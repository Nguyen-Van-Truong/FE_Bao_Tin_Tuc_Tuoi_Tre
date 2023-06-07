import {useState, useEffect} from 'react';
import {parseFeed} from "../component/NewsFeed";

export default function useAllNewsItems(feedUrls) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (feedUrls.length > 0) {
                const allItems = await Promise.all(feedUrls.map(url => parseFeed(url)));
                const flattenedItems = allItems.flat();
                setItems(flattenedItems);
            }
        }

        fetchData();
    }, [feedUrls]);

    return items;
}
