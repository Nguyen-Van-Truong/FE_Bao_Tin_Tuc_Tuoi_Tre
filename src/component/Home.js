import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import '../styles/bootstrap.min.css';
import getNewsCategories from "./RssCategories";
import {parseFeed} from "./NewsFeed";
import Header from "./Header";
import Trending from "./Trending";
import useNewsItems from "../hooks/UseNewsItems";
import useStickyNavbar from "../hooks/UseStickyNavbar";
import Section from "./Section";
import MainNews from "./MainNews";
import CategoryRow from "./CategoryRow";

function Home() {
    const feedUrlHome = 'rss/tin-moi-nhat.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';
    const feedUrlTechnology = 'rss/cong-nghe.rss';

    const [categories, setCategories] = React.useState([]);

    const items = useNewsItems(feedUrlHome);
    const worldItems = useNewsItems(feedUrlWorld);
    const technologyItems = useNewsItems(feedUrlTechnology);

    useStickyNavbar();

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getNewsCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <Header/>
            <MainNews items={items} />
            <CategoryRow items={worldItems} title={categories.length > 0 ? categories[1].title : 'Đang tải...'} />

            <Section title="Cập nhật mới nhất">
                {items.map((item, index) => (
                    <div className="row mb-3 bb-1 pt-0" key={index}>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                            <img className="thumb" src={item.img} alt="Article Thumbnail"/>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                            <h5>
                                <a href={`detail?url=${encodeURIComponent(item.link)}`}>{item.title}</a>
                            </h5>
                            <small>{item.pubDate}</small>
                            <p className="summary pt-3">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Section>

            <Section title="Technology">
                <Trending items={technologyItems.slice(0, 4)}/>
            </Section>
        </div>
    );
}

export default Home;
