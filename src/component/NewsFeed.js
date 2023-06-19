import React, {useEffect, useState} from 'react';

const parseFeed = async (url) => {
    const MAX_RETRIES = 3;
    const parser = new DOMParser();
    // const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
    const webUrl = 'https://tuoitre.vn/';

    let retries = 0;
    let success = false;
    let response, text;

    while (!success && retries < MAX_RETRIES) {
        try {
            response = await fetch(proxyUrl + webUrl + encodeURIComponent(url)); // Lay du lieu tu url voi proxy
            text = await response.text(); // chuyen ve dang text
            success = true;
        } catch (error) {
            retries += 1;
            console.error(`Lần thử ${retries} để lấy dữ liệu từ ${url} thất bại. Đang thử lại...`);
        }
    }

    if (!success) {
        console.error(`Không lấy được dữ liệu từ ${url} sau ${MAX_RETRIES} lần thử.`);
        return [];
    }

    // Parse du lieu ve xml
    const xml = parser.parseFromString(text, 'application/xml');
    // Tim tat ca item trong xml
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

export {parseFeed};
export {formatPubDate};
