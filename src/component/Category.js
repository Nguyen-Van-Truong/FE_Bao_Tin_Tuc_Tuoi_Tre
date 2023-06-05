import React, {useEffect, useState} from 'react';
import {parseFeed} from "./NewsFeed";
import getNewsCategories from "./rssCategories";

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getNewsCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    const [items, setItems] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const feedUrlParam = urlParams.get('feedUrl');
    const feedUrl = feedUrlParam || 'rss/tin-moi-nhat.rss';

    useEffect(() => {
        async function fetchData() {
            const news = await parseFeed(feedUrl);
            setItems(news);
        }

        fetchData();
    }, [feedUrl]);

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
            <div className="container">
                <div className="logo-wrapper d-flex align-items-center">
                    <h1>
                        <a href="index.html">
                            The News
                        </a>
                    </h1>
                </div>
            </div>
            <div className="container-fluid menu">
                <div className="container">
                    <div className="d-flex menu-items">
                        <div className="active">
                            <a href="/">Home</a>
                        </div>
                        {categories.map((category, index) => (
                            <div key={index} className="">
                                <a href={`category?feedUrl=${encodeURIComponent(category.rssUrl)}`}>
                                    {category.title}
                                </a>
                            </div>
                        ))}
                        <div>
                            <a href="category.html">Interviews</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">

                        <div className="mb-4 mt-4 section">
                            <div className="section-title">
                                <span>Latest Updates</span>
                            </div>
                            {items.map((item, index) => (

                                <div className="row mb-3 bb-1 pt-0">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src={item.img} alt="Thumb" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <h5>
                                        <a href="detail.html">
                                            {item.title}
                                        </a>
                                    </h5>
                                    <small>29th August, 2021</small>
                                    <p className="summary pt-3">Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.</p>
                                </div>
                            </div>
                            ))}

                            {/* Repeat the above code block for other news items */}
                        </div>
                    </div>

                        <div className="col-4">
                        <div className="trending mt-4">
                            <div className="section-title">
                                <span>Trending</span>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/Pk9jw3Z9iv8EBLxE.jpg" alt="Trending Thumbnail" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="detail.html">
                                        Paras Khadka retires from international cricket
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category;


