import React, {useEffect, useState} from 'react';

const parseFeed = async (url) => {
    const MAX_RETRIES = 3; // Số lần thử lại tối đa khi gặp lỗi khi lấy dữ liệu
    const parser = new DOMParser();
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const webUrl = 'https://tuoitre.vn/';

    let retries = 0; // Biến đếm số lần thử lại
    let success = false; // Biến kiểm tra xem việc lấy dữ liệu có thành công hay không
    let response, text;

    // Tiến hành thử lấy dữ liệu cho đến khi thành công hoặc số lần thử lại đạt tối đa
    while (!success && retries < MAX_RETRIES) {
        try {
            response = await fetch(proxyUrl + webUrl + encodeURIComponent(url)); // Lấy dữ liệu từ url
            text = await response.text(); // Chuyển dữ liệu vừa lấy về dạng text
            success = true; // Nếu không gặp lỗi, đánh dấu là đã lấy dữ liệu thành công
        } catch (error) { // Nếu gặp lỗi
            retries += 1; // Tăng số lần thử lại lên 1
            console.error(`Lần thử ${retries} để lấy dữ liệu từ ${url} thất bại. Đang thử lại...`);
        }
    }

    // Nếu sau số lần thử lại tối đa mà vẫn không lấy được dữ liệu
    if (!success) {
        console.error(`Không lấy được dữ liệu từ ${url} sau ${MAX_RETRIES} lần thử.`);
        return [];
    }

    // Parse dữ liệu dạng text vừa lấy được thành dạng XML
    const xml = parser.parseFromString(text, 'application/xml');
    // Tìm tất cả các item trong dữ liệu XML
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
