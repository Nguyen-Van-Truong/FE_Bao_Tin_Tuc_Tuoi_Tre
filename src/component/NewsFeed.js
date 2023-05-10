import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

const parser = new Parser();
const feedUrl = 'https://tuoitre.vn/rss/the-gioi.rss';

const parseFeed = async (url) => {
    const parser = new DOMParser();
    const proxyUrl = 'https://api.allorigins.win/raw?url=';

    const response = await fetch(proxyUrl + encodeURIComponent(url));
    const text = await response.text();
    // console.log('text:' + text);

    const xml = parser.parseFromString(text, 'application/xml');
    const items = xml.querySelectorAll('item');
    const news = Array.from(items).map((item) => ({
        title: item.querySelector('title').textContent,
        description: item.querySelector('description').textContent,
    }));

    // console.log('news:', news);
    return news;
};

function NewsFeed() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const news = await parseFeed(feedUrl);
            setItems(news);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Tin tức thế giới</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsFeed;
