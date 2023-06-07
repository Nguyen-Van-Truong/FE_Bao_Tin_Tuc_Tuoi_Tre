import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import '../styles/bootstrap.min.css';
import {getNewsCategories, getRssUrls} from "./RssCategories";
import {parseFeed} from "./NewsFeed";
import Header from "./Header";
import Trending from "./Trending";
import useNewsItems from "../hooks/UseNewsItems";
import useStickyNavbar from "../hooks/UseStickyNavbar";
import Section from "./Section";
import MainNews from "./MainNews";
import CategoryRow from "./CategoryRow";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAllNewsItems from "../hooks/UseAllNewsItems";
library.add(faSearch);

function Home() {
    const feedUrlHome = 'rss/tin-moi-nhat.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';
    const feedUrlTechnology = 'rss/cong-nghe.rss';

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [categories, setCategories] = React.useState([]);

    const items = useNewsItems(feedUrlHome);
    const worldItems = useNewsItems(feedUrlWorld);
    const technologyItems = useNewsItems(feedUrlTechnology);
    const [rssUrls, setRssUrls] = useState([]);

    useEffect(() => {
        const fetchUrls = async () => {
            const urls = await getRssUrls();
            setRssUrls(urls);
        };

        fetchUrls();
    }, []);

    const itemSearchs = useAllNewsItems(rssUrls);
    console.log(itemSearchs);


    useStickyNavbar();

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getNewsCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    // hàm xử lý tìm kiếm để lấy kết quả tìm kiếm từ danh sách tin tức
    const handleSearch = () => {
        if (searchTerm === '') {
            setSearchResults([]);
        } else {
            const results = itemSearchs.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    return (
        <div>
            <Header/>

            <MainNews items={items} />
            <CategoryRow items={worldItems} title={categories.length > 0 ? categories[1].title : 'Đang tải...'} />

            {/*Tìm kiếm tin tức*/}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm tin tức..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>
                    Tìm kiếm
                </button>
            </div>

            {/*xử lý tìm kiếm tin tức*/}
            {searchResults.length > 0 && (
                <Section title="Kết quả tìm kiếm">
                    {searchResults.map((item, index) => (
                        <div className="row mb-3 bb-1 pt-0" key={index}>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <img className="thumb" src={item.img} alt="Ảnh minh họa bài viết" />
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
            )}

            {/*Cập nhật mới nhất*/}
            <Section title="Cập nhật mới nhất">
                {searchResults.length > 0 && (
                    <Section title="Kết quả tìm kiếm">
                        {searchResults.map((item, index) => (
                            <div className="row mb-3 bb-1 pt-0" key={index}>
                                {/* Phần hiển thị nội dung tin tức tương tự như trong Section hiện tại */}
                            </div>
                        ))}
                    </Section>
                )}
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
