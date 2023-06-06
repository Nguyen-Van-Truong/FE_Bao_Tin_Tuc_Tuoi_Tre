import React, { useEffect, useState } from 'react';
import ContentDetail from "./ContentDetail";
import Header from "./Header";
import { parseFeed } from "./NewsFeed";
import { useLocation } from "react-router-dom";
import Trending from "./Trending";

const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');

    const [educationItems, setEducationItems] = useState([]);
    const [worldItems, setWorldItems] = useState([]);

    const feedUrlEducation = 'rss/giao-duc.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';

    useEffect(() => {
        window.onscroll = function () {
            setSticky();
        };

        const navbar = document.getElementsByClassName('menu')[0];
        const sticky = navbar.offsetTop;

        function setSticky() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        const fetchEducationData = async () => {
            const educationNewsItems = await parseFeed(feedUrlEducation);
            setEducationItems(educationNewsItems);
        };

        const fetchWorldData = async () => {
            const worldNewsItems = await parseFeed(feedUrlWorld);
            setWorldItems(worldNewsItems);
        };

        fetchEducationData();
        fetchWorldData();
    }, []);

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

                        {/*recomend*/}
                        <div className="container section mt-4 no-pad">
                            <div className="section-title">
                                <span>Recommended</span>
                            </div>
                            <div className="row">
                                {worldItems.slice(0, 4).map((item, index) => (
                                    <div key={index} className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                        <div className="mb-2 image image-xs">
                                            <img className="thumb" src={item.img} alt="Thumbnail" />
                                        </div>
                                        <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
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
