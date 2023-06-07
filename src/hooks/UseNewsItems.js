import { useState, useEffect } from 'react';
import { parseFeed } from '../component/NewsFeed';

export default function useNewsItems(feedUrl) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const newsItems = await parseFeed(feedUrl);
            setItems(newsItems);
        }
        fetchData();
    }, [feedUrl]);

    return items;
}
