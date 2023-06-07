import React from 'react';
import {NewsItem} from "./NewsItem";

const CategoryRow = ({ items, title }) => (
    <div className="container section mt-4">
        <div className="section-title">
            <span>{title}</span>
        </div>
        <div className="row">
            {items.slice(0, 4).map((item, index) => (
                <NewsItem key={index} item={item} />
            ))}
        </div>
    </div>
);

export default CategoryRow;