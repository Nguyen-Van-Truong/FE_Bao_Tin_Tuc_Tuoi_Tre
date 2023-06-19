import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import {formatPubDate} from "./NewsFeed";
import SettingMenu from "./SettingMenu";
import {FaHeart} from 'react-icons/fa';

const ContentDetail = ({url}) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [articleDescription, setArticleDescription] = useState('');
    const [articleContent, setArticleContent] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [audio_text, setAudioText] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [isViewed, setIsViewed] = useState(false);

    useEffect(() => {
        const getContent = async () => {
            const favArticles = JSON.parse(localStorage.getItem('favorites') || '[]');
            let viewedArticles = JSON.parse(localStorage.getItem('viewed') || '[]');

            const urlNoProxy = url.replace("https://api.codetabs.com/v1/proxy?quest=", "");
            setIsFavorite(favArticles.includes(urlNoProxy));

            if (!viewedArticles.includes(urlNoProxy)) {
                viewedArticles.push(urlNoProxy);
                localStorage.setItem('viewed', JSON.stringify(viewedArticles));
            }
            setIsViewed(true);

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


                // Lọc nội dung của các thẻ p và h2 là con trực tiếp của thẻ gốc
                let container = document.createElement('div');
                container.innerHTML = content;
                let filteredContent = [];
                Array.from(container.childNodes).forEach((child) => {
                    if (child.tagName === 'P' || child.tagName === 'H2') {
                        filteredContent.push(child.textContent);
                    }
                });
                let contentText = filteredContent.join('\n');

                // Lấy ngày xuất bản của bài viết
                const publishDate = $('[data-role="publishdate"]').text().trim();
                setPublishDate(formatPubDate(publishDate));

                // Lấy nội dung sử dụng cho báo nói (tiêu đề, mô tả, nội dung)
                setAudioText(title + "\n" + description + "\n" + contentText);

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
                    content$(this).css('max-height', '100%');
                });
                setArticleContent(content$.html());
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        getContent();
    }, [url]);

    const handleFavoriteClick = () => {
        const favArticles = JSON.parse(localStorage.getItem('favorites') || '[]');
        const urlNoProxy = url.replace("https://api.codetabs.com/v1/proxy?quest=", "");

        if (!isFavorite) {
            localStorage.setItem('favorites', JSON.stringify([...favArticles, urlNoProxy]));
        } else {
            localStorage.setItem('favorites', JSON.stringify(favArticles.filter(favUrl => favUrl !== urlNoProxy)));
        }

        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? <FaHeart color="red" size={56}/> : <FaHeart size={56}/>}
            </button>

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
            <SettingMenu text={audio_text}/>
        </div>
    );
};

export default ContentDetail;
