import React, {useEffect, useState} from 'react';
import {parseFeed} from "./NewsFeed";
import getNewsCategories from "./RssCategories";
import Header from "./Header";
import Trending from "./Trending";

const Category = () => {
    const [items, setItems] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const feedUrlParam = urlParams.get('feedUrl');
    const feedUrl = feedUrlParam || 'rss/tin-moi-nhat.rss';
    const [worldEducation, setWorldEducation] = useState([]);
    const feedUrlEducation = 'rss/giao-duc.rss';

    useEffect(() => {
        async function fetchData() {
            const news = await parseFeed(feedUrl);
            setItems(news);
        }

        fetchData();
    }, [feedUrl]);

    useEffect(() => {
        const fetchWorldData = async () => {
            const worldEducationsItems = await parseFeed(feedUrlEducation);
            setWorldEducation(worldEducationsItems);
        };

        fetchWorldData();
    }, [feedUrlEducation]);

    useEffect(() => {
        window.onscroll = function () {
            setSticky();
        };

        const navbar = document.getElementsByClassName('menu')[0];
        const sticky = navbar.offsetTop;

        function setSticky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }
    }, []);

    return (
        <div>
            <Header/>

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">

                        <div className="mb-4 mt-4 section">
                            <div className="section-title">
                                <span>Cập nhật mới nhất</span>
                            </div>
                            {items.map((item, index) => (
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
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="col-4">
                        <Trending items={worldEducation.slice(0, 4)} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category;


