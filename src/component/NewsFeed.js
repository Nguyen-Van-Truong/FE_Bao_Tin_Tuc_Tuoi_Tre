import React, {useEffect, useState} from 'react';
import Parser from 'rss-parser';

const parseFeed = async (url) => {
    const parser = new DOMParser();
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const webUrl = 'https://tuoitre.vn/';
    const response = await fetch(proxyUrl + webUrl + encodeURIComponent(url));

    const text = await response.text();
    const xml = parser.parseFromString(text, 'application/xml');
    const items = xml.querySelectorAll('item');
    const news = Array.from(items).map((item) => {
        const description = item.querySelector('description').textContent;
        const html = parser.parseFromString(description, 'text/html');
        const anchor = html.querySelector('a');
        const descriptionText = anchor ? anchor.nextSibling.textContent : '';

        const img = html.querySelector('img');
        const imgSrc = img ? processImageUrl(img.getAttribute('src')) : '';

        const pubDateElement = item.querySelector('pubDate');
        const pubDate = pubDateElement
            ? formatPubDate(pubDateElement.textContent)
            : '';

        return {
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: descriptionText,
            pubDate: pubDate,
            img: imgSrc,
        };
    });

    console.log(news);
    return news;
};

const processImageUrl = (imageUrl) => {
    return imageUrl.replace('/zoom/80_50/', '/thumb_w/730/').replace('/cdn1', '/cdn');
};
const formatPubDate = (pubDate) => {
    const date = new Date(pubDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    return date.toLocaleDateString('vi-VN', options);
};
;


function NewsFeed() {
    const [items, setItems] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const feedUrlParam = urlParams.get('feedUrl');
    const feedUrl = feedUrlParam || 'https://tuoitre.vn/rss/tin-moi-nhat.rss';

    useEffect(() => {
        async function fetchData() {
            const news = await parseFeed(feedUrl);
            setItems(news);
        }

        fetchData();
    }, [feedUrl]);

    return (
        <div className="w3-col l8 s12">
            {items.map((item, index) => (
                <div key={index} className="w3-card-4 w3-margin w3-white">
                    <img src={item.img} alt="Nature" style={{width: '30%'}}/>
                    <div className="w3-container">
                        <h3>
                            <b>{item.title}</b>
                        </h3>
                        <h5>
                            {item.description}, <span className="w3-opacity">May 10, 2023</span>
                        </h5>
                    </div>

                    <div className="w3-container">
                        <p>{item.description}</p>
                        <div className="w3-row">
                            <div className="w3-col m8 s12">
                                <p>
                                    <button className="w3-button w3-padding-large w3-white w3-border">
                                        <b>READ MORE »</b>
                                    </button>
                                </p>
                            </div>
                            <div className="w3-col m4 w3-hide-small">
                                <p>
                  <span className="w3-padding-large w3-right">
                    <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsFeed;
export {parseFeed};
