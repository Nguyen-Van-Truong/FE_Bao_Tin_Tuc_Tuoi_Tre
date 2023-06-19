import React, { useEffect, useState } from 'react';
import Header from "./Header";
import axios from 'axios';
import cheerio from 'cheerio';
import { FaTrash } from 'react-icons/fa';

const ViewedArticles = () => {
    const [viewedArticles, setViewedArticles] = useState(() => {
        const savedViewedArticles = localStorage.getItem('viewed');
        return savedViewedArticles ? JSON.parse(savedViewedArticles) : [];
    });
    useEffect(() => {
        const articles = JSON.parse(localStorage.getItem('viewed') || '[]').reverse();
        const fetchedArticles = articles.map(async (url) => {
            try {
                const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`;
                const response = await axios.get(proxyUrl);
                const html = response.data;
                const $ = cheerio.load(html);

                const title = $('.detail-title').text();
                const description = $('.detail-sapo').text();
                const img = $('.detail-content img').first().attr('src');
                const pubDate = $('[data-role="publishdate"]').text().trim();

                console.log(url);
                return { title, description, img, link: url, pubDate };
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });

        Promise.all(fetchedArticles).then(setViewedArticles);
    }, []);

    const clearViewedArticles = () => {
        localStorage.removeItem('viewed');
        setViewedArticles([]);
    };

    return (
        <div>
            <Header />


            <div className="container main-news">
                <div className="row">
                    <div className="clear-viewed-container" style={{textAlign: "right"}}>
                        <button onClick={clearViewedArticles}>
                            <FaTrash size={20} />
                            Xóa hết
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="mb-4 mt-4 section">
                            <div className="section-title">
                                <span>Tin tức đã xem</span>
                            </div>
                            {viewedArticles.map((item, index) => (
                                <div className="row mb-3 bb-1 pt-0" key={index}>
                                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                        <img className="thumb" src={item.img} alt="Thumb" />
                                    </div>
                                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                        <h5>
                                            <a href={`detail?url=${encodeURIComponent(item.link)}`}>
                                                {item.title}
                                            </a>
                                        </h5>
                                        <small>{item.pubDate}</small>
                                        <p className="summary pt-3">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewedArticles;
