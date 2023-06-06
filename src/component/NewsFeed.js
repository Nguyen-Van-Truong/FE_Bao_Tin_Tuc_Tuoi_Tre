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

export {parseFeed};
export {formatPubDate};
