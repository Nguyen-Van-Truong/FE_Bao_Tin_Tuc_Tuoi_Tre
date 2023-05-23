import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const Content = () => {
    const [articleContent, setArticleContent] = useState('');

    useEffect(() => {
        const url = 'https://api.allorigins.win/raw?url=https://tuoitre.vn/xe-tai-dam-vao-hang-rao-an-ninh-gan-nha-trang-20230523102332496.htm';

        const getContent = async () => {
            try {
                const response = await axios.get(url);
                const html = response.data;
                const $ = cheerio.load(html);

                // Lấy nội dung bài viết
                const content = $('.detail-content').text().trim();
                setArticleContent(content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getContent();
    }, []);

    return (
        <div>
            {articleContent ? (
                <div>{articleContent}</div>
            ) : (
                <div>Fetching content...</div>
            )}
        </div>
    );
};

export default Content;
