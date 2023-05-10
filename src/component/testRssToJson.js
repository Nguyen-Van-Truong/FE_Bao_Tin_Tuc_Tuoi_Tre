import React, {useEffect, useState} from 'react';
import {parse} from 'rss-to-json';

const feedUrl = 'https://blog.ethereum.org/feed.xml';

const parseFeed = async (url) => {
    try {
        const rss = await parse({url});
        console.log(JSON.stringify(rss, null, 3));
    } catch (error) {
        console.log("fail")
        console.log(error);
    }
};

parseFeed(feedUrl);
