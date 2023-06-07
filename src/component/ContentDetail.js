import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import {formatPubDate} from "./NewsFeed";

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

                // Lấy tiêu đề bài viết
                const title = $('.detail-title').text();
                setArticleTitle(title);

                // Lấy mô tả bài viết
                const description = $('.detail-sapo').text();
                setArticleDescription(description);

                // Lấy nội dung bài viết
                const content = $('.detail-content').html();
                setArticleContent(content);

                // Lấy ngày đăng bài viết
                const publishDate = $('[data-role="publishdate"]').text().trim();
                setPublishDate(formatPubDate(publishDate));
            } catch (error) {
                console.error('Error fetching data:', error);
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
        </div>
    );
};

export default ContentDetail;
