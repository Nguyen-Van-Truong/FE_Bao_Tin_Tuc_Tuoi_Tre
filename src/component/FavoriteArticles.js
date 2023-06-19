import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import Header from "./Header";
import {FaHeart, FaTrash} from 'react-icons/fa';

const FavoriteArticles = () => {
    const [favArticles, setFavArticles] = useState([]);

    useEffect(() => {
        const articles = JSON.parse(localStorage.getItem('favorites') || '[]').reverse();

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

                return {title, description, img, link: url, pubDate, isFavorite: true};
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });

        Promise.all(fetchedArticles).then(setFavArticles);
    }, []);

    const clearFavoriteArticles = () => {
        localStorage.removeItem('favorites');
        setFavArticles([]);
    };

    const handleFavoriteClick = (itemLink) => {
        const updatedArticles = favArticles.map((article) => {
            if (article.link === itemLink) {
                return {...article, isFavorite: !article.isFavorite};
            }
            return article;
        });

        const updatedFavorites = updatedArticles
            .filter((article) => article.isFavorite)
            .map((article) => article.link);

        setFavArticles(updatedArticles);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites.reverse()));
    };

    return (
        <div>
            <Header/>

            <div className="container main-news">
                <div className="row">
                    <div className="clear-fav-container" style={{textAlign: 'right'}}>
                        <button onClick={clearFavoriteArticles}>
                            <FaTrash size={20}/>
                            Clear All
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="mb-4 mt-4 section">
                            <div className="section-title">
                                <span>Favorite Articles</span>
                            </div>
                            {favArticles.map((item, index) => (
                                <div className="row mb-3 bb-1 pt-0" key={index}>
                                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                        <img className="thumb" src={item.img} alt="Thumb"/>
                                    </div>
                                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                        <h5>
                                            <a href={`detail?url=${encodeURIComponent(item.link)}`}>
                                                {item.title}
                                            </a>
                                        </h5>
                                        <small>{item.pubDate}</small>
                                        <p className="summary pt-3">{item.description}</p>
                                        <button
                                            onClick={() => handleFavoriteClick(item.link)}
                                        >
                                            {item.isFavorite ? (
                                                <FaHeart color="red" size={20}/>
                                            ) : (
                                                <FaHeart size={20}/>
                                            )}
                                        </button>
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

export default FavoriteArticles;
