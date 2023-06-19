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
import {FaHeart} from 'react-icons/fa';
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

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const handleFavoriteClick = (itemLink) => {
        let newFavorites = [...favorites];

        if (favorites.includes(itemLink)) {
            newFavorites = newFavorites.filter(favorite => favorite !== itemLink);
        } else {
            newFavorites.push(itemLink);
        }

        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };


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
            <MainNews items={items}/>
            <CategoryRow items={worldItems} title={categories.length > 0 ? categories[1].title : 'Đang tải...'}/>

            <div className="container section">
                <div className="row">
                    {/* "Cập nhật mới nhất" section */}
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        {/* Tìm kiếm tin tức */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Tìm kiếm tin tức..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <button onClick={handleSearch}>Tìm kiếm</button>
                        </div>

                        {/* Kết quả tìm kiếm */}
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
                                        <button onClick={() => handleFavoriteClick(item.link)}>
                                            {favorites.includes(item.link) ? <FaHeart color="red" size={20}/> : <FaHeart size={20}/>}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Section>

                    </div>

                    {/* "Trending" section */}
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <Trending items={technologyItems.slice(0, 4)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
