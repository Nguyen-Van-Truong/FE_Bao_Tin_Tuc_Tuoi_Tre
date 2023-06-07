import React, { useEffect, useState } from 'react';
import getNewsCategories from "./RssCategories";
import '../styles/style.css';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await getNewsCategories();
            setCategories(fetchedCategories);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="logo-wrapper d-flex align-items-center">
                    <h1>
                        <a href="/">
                            Báo tuổi trẻ
                        </a>
                    </h1>
                </div>
            </div>

            <div className="container-fluid menu">
                <div className="container">
                    <div className="d-flex menu-items">
                        {categories.map((category, index) => (
                            <div key={index} className="">
                                <a href={`category?feedUrl=${encodeURIComponent(category.rssUrl)}`}>
                                    {index === 0 ? 'Tin mới nhất' : category.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;
