import React, {useEffect, useState} from 'react';
import Content from "./content";
import Header from "./Header";
import {useLocation} from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = 'https://api.allorigins.win/raw?url=' + queryParams.get('url');

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
    }, []);

    return (
        <div>
            <Header/>

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">
                        <div className="story mt-4">
                            <Content url={url}/>
                        </div>
                        <br/>
                        <hr/>

                        {/*recomend*/}
                        <div className="container section mt-4 no-pad">
                            <div className="section-title">
                                <span>Recommended</span>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb"
                                             src="https://letzcricket.com/uploads/news/zXhIbjMmry4D2Sup.png"/>
                                    </div>
                                    <a href="">
                                        India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb"
                                             src="https://letzcricket.com/uploads/articles/6CdghhIpvYREvJ6a.png"/>
                                    </div>
                                    <a href="">
                                        Glenn Maxwell's All-Time IPL XI, Big names missing
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb"
                                             src="https://letzcricket.com/uploads/articles/dddNsPXVC6f5bmI5.jpg"/>
                                    </div>
                                    <a href="">
                                        Can Rohit be next Sehwag in Indian Test Cricket
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb"
                                             src="https://letzcricket.com/uploads/articles/sL1e41w4xUmSDA8L.jpg"/>
                                    </div>
                                    <a href="">
                                        Domestic Cricket changing the face of Nepali Cricket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*trending*/}
                    <div className="col-4">
                        <div className="trending mt-4">
                            <div className="section-title">
                                <span>Trending</span>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb"
                                         src="https://letzcricket.com/uploads/news/Pk9jw3Z9iv8EBLxE.jpg"/>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Paras Khadka retires from international cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb"
                                         src="https://letzcricket.com/uploads/articles/dddNsPXVC6f5bmI5.jpg"/>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Can Rohit be next Sehwag in Indian Test Cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb"
                                         src="https://letzcricket.com/uploads/news/vGWpKyVU7jHXz5K8.png"/>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        India win series despite Sam Curran's Heroics
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb"
                                         src="https://letzcricket.com/uploads/news/ZqXXlQDeCffne57g.jpg"/>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Domestic Cricket Changing the Face of Nepali Cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb"
                                         src="https://letzcricket.com/uploads/news/LCfdygXg89FURcsM.jpeg"/>
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Afridi to play Everest Premier League from Kathmandu Kings
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
