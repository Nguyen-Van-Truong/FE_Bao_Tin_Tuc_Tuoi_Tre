import React, {useEffect, useState} from 'react';
import {parseFeed} from "./NewsFeed";
import getNewsCategories from "./RssCategories";
import Header from "./Header";
import Trending from "./Trending";
import useNewsItems from "../hooks/UseNewsItems";
import useStickyNavbar from "../hooks/UseStickyNavbar";

const Category = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const feedUrlParam = urlParams.get('feedUrl');
    const feedUrl = feedUrlParam || 'rss/tin-moi-nhat.rss';
    const feedUrlEducation = 'rss/giao-duc.rss';

    const items = useNewsItems(feedUrl);
    const worldEducation = useNewsItems(feedUrlEducation);

    useStickyNavbar();

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