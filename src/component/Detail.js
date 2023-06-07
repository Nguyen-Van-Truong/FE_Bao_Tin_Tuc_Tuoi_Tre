import React from 'react';
import ContentDetail from "./ContentDetail";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Trending from "./Trending";
import useNewsItems from "../hooks/UseNewsItems";
import useStickyNavbar from "../hooks/UseStickyNavbar";
import CategoryRow from './CategoryRow';

const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');

    const feedUrlEducation = 'rss/giao-duc.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';

    const educationItems = useNewsItems(feedUrlEducation);
    const worldItems = useNewsItems(feedUrlWorld);

    useStickyNavbar();

    return (
        <div>
            <Header />

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">
                        <div className="story mt-4">
                            <ContentDetail url={url} />
                        </div>
                        <br />
                        <hr />
                        <CategoryRow items={worldItems} title="Phổ biến" />
                    </div>
                    {/*trending*/}
                    <div className="col-4">
                        <Trending items={educationItems.slice(0, 5)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
