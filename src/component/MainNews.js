// MainNews.js
import React from 'react';
import '../styles/style.css';
import {NewsItem, NewsItem2} from "./NewsItem";

const MainNews = ({ items }) => (
    <div className="container main-news section">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                {items.length > 0 && (
                    <NewsItem2 item={items[0]} layout="large" />
                )}
            </div>
            <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                <div className="row">
                    {items.slice(1, 5).map((item, index) => (
                        <div key={index} className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                            <NewsItem2 item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default MainNews;
