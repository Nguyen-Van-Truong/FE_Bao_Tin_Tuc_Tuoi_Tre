import React, {useEffect, useState} from 'react';
import './style.css';
import './bootstrap.min.css';
import getNewsCategories from "./RssCategories";
import {parseFeed} from "./NewsFeed";
import Header from "./Header";
import Trending from "./Trending";

function Home() {
    const [items, setItems] = useState([]);
    const [worldItems, setWorldItems] = useState([]);
    const [technologyItems, setTechnologyItems] = useState([]);

    const feedUrlHome = 'rss/tin-moi-nhat.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';
    const feedUrlTechnology = 'rss/cong-nghe.rss';

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getNewsCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const newsItems = await parseFeed(feedUrlHome);
            setItems(newsItems);
        };

        fetchData();
    }, [feedUrlHome]);

    useEffect(() => {
        const fetchWorldData = async () => {
            const worldNewsItems = await parseFeed(feedUrlWorld);
            setWorldItems(worldNewsItems);
        };

        fetchWorldData();
    }, [feedUrlWorld]);

    useEffect(() => {
        const fetchTechnologyData = async () => {
            const technologyNewsItems = await parseFeed(feedUrlTechnology);
            setTechnologyItems(technologyNewsItems);
        };

        fetchTechnologyData();
    }, [feedUrlTechnology]);

    useEffect(() => {
        window.addEventListener('scroll', setSticky);

        const navbar = document.getElementsByClassName('menu')[0];
        const sticky = navbar.offsetTop;

        function setSticky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        return () => {
            window.removeEventListener('scroll', setSticky);
        };
    }, []);

    return (
        <div>
            <Header/>

            <div className="container main-news section">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                        {items.length > 1 && (
                            <>
                                <img className="thumb mb-3" src={items[0].img} alt="Thumbnail"/>
                                <h3>
                                    <a className="font-large" href={`detail?url=${encodeURIComponent(items[0].link)}`}>
                                        {items[0].title}
                                    </a>
                                </h3>
                            </>
                        )}
                    </div>
                    <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                        <div className="row">
                            {items.slice(1, 5).map((item, index) => (
                                <div key={index} className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                                    <div className="image image-sm mb-1">
                                        <img className="thumb" src={item.img} alt="Thumbnail"/>
                                    </div>
                                    <h3 className="mb-4">
                                        <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section mt-4">
                <div className="section-title">
                    <span>{categories.length > 0 ? categories[1].title : 'Đang tải...'}</span>
                </div>
                <div className="row">
                    {worldItems.slice(0, 4).map((item, index) => (
                        <div key={index} className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                            <div className="mb-2 image image-xs">
                                <img className="thumb" src={item.img} alt="Thumbnail"/>
                            </div>
                            <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container section">
                <div className="row">
                    {/*content*/}
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="mb-4 mt-4">
                            <div className="section-title">
                                <span>Cập nhật mới nhất</span>
                            </div>
                            {items.map((item, index) => (
                                <div className="row mb-3 bb-1 pt-0">
                                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                        <img className="thumb" src={item.img} alt="Article Thumbnail"/>
                                    </div>
                                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                        <h5>
                                            <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                                        </h5>
                                        <small>{item.pubDate}</small>
                                        <p className="summary pt-3">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*trending*/}
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <Trending items={technologyItems.slice(0, 4)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
