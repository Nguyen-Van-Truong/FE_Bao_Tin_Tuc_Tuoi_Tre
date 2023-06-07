import React from 'react';
import '../styles/style.css';

export const NewsItem = ({item}) => (
    <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
        <div className="mb-2 image image-xs">
            <img className="thumb" src={item.img} alt="Thumbnail"/>
        </div>
        <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
    </div>
);

export const NewsItem2 = ({item, layout = 'default'}) => (
    layout === 'default' ? (
        <>
            <div className="image image-sm mb-1">
                <img className="thumb" src={item.img} alt="Thumbnail"/>
            </div>
            <h3 className="mb-4">
                <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
            </h3>
        </>
    ) : (
        <>
            <img className="thumb mb-3" src={item.img} alt="Thumbnail"/>
            <h3>
                <a className="font-large" href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
            </h3>
        </>
    )
);
