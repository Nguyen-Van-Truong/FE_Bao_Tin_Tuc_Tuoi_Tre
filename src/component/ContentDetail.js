import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import {formatPubDate} from "./NewsFeed";
import SettingMenu from "./SettingMenu";

const ContentDetail = ({url}) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [publishDate, setPublishDate] = useState('');

    useEffect(() => {
        const getContent = async () => {
            try {
                const response = await axios.get(url);
                const html = response.data;
                const $ = cheerio.load(html);

                // Lấy tiêu đề của bài viết
                const title = $('.detail-title').text();
                setArticleTitle(title);

                // Lấy mô tả của bài viết
                const description = $('.detail-sapo').text();
                setArticleDescription(description);

                // Lấy nội dung của bài viết
                let content = $('.detail-content').html();

                // Lấy ngày xuất bản của bài viết
                const publishDate = $('[data-role="publishdate"]').text().trim();
                setPublishDate(formatPubDate(publishDate));

                // Convert link thẻ a của báo tuổi trẻ về link web hiện tại
                const content$ = cheerio.load(content);
                content$('a').each(function () {
                    const link = content$(this).attr('href');
                    const newLink = `detail?url=${encodeURIComponent(link)}`;
                    content$(this).attr('href', newLink);
                });

                // Hạn chế kích thước tối đa của ảnh
                content$('img').each(function () {
                    content$(this).css('max-width', '100%');
                    content$(this).css('height', 'auto');
                });
                setArticleContent(content$.html());
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        getContent();
    }, [url]);

    return (
        <div>
            <h1 style={{
                fontSize: '36px',
            }}>{articleTitle}</h1>
            <small>{publishDate}</small>

            <p className="fw-bold"
               style={{
                   direction: 'ltr',
                   fontSize: '26px',
                   textAlign: 'left',
               }
               }>
                {articleDescription}
            </p>
            <div
                style={{
                    direction: 'ltr',
                    textAlign: 'left',
                    fontSize: '20px',
                }}>
                {articleContent ? (
                    <div dangerouslySetInnerHTML={{__html: articleContent}}/>
                ) : (
                    <div>Đang tải nội dung...</div>
                )}
            </div>
            <SettingMenu />
        </div>
    );
};

export default ContentDetail;
