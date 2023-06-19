import ContentDetail from "./ContentDetail";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Trending from "./Trending";
import useNewsItems from "../hooks/UseNewsItems";
import useStickyNavbar from "../hooks/UseStickyNavbar";
import CategoryRow from './CategoryRow';
import {MyContext} from "../App";
import React from "react";


const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');
    const url = 'https://api.codetabs.com/v1/proxy?quest=' + queryParams.get('url');

    const feedUrlEducation = 'rss/giao-duc.rss';
    const feedUrlWorld = 'rss/the-gioi.rss';

    const educationItems = useNewsItems(feedUrlEducation);
    const worldItems = useNewsItems(feedUrlWorld);

    useStickyNavbar();

    const {backgroundColor} = React.useContext(MyContext);
    const lightColor = calculateLighterColor(backgroundColor);
    function calculateLighterColor(color) {
        // Tính toán màu nhạt hơn
        // Ví dụ: giảm giá trị đỏ, xanh và màu xanh lam của màu gốc
        const r = parseInt(color.substr(1, 2), 16) * 0.8;
        const g = parseInt(color.substr(3, 2), 16) * 0.8;
        const b = parseInt(color.substr(5, 2), 16) * 0.8;

        // Chuyển đổi lại sang chuỗi màu hex
        return `#${Math.round(r).toString(16)}${Math.round(g).toString(16)}${Math.round(b).toString(16)}`;
    }


    return (
        <div style={{backgroundColor: lightColor}}>
            <Header />
            <div className="container main-news">
                <div className="row">
                    <div className="col-12">
                        <div className="story mt-4">
                            <ContentDetail url={url} />
                        </div>
                        <br />
                        <hr />
                        <CategoryRow items={worldItems} title="Phổ biến" />
                    </div>
                    {/*trending*/}
                    {/*<div className="col-4">*/}
                    {/*    <Trending items={educationItems.slice(0, 5)} />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Detail;
