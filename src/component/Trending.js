import React from 'react';

const Trending = ({items}) => {
    return (
        <div className="trending mt-4">
            <div className="section-title">
                <span>Trending</span>
            </div>
            {items.map((item, index) => (
                <div key={index} className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <img className="thumb" src={item.img} alt="Trending Thumbnail"/>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                        <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trending;