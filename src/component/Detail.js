import React, {useEffect, useState} from 'react';

const Detail = () => {

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
            <div className="container">
                <div className="logo-wrapper d-flex align-items-center">
                    <h1>
                        <a href="index.html">The News</a>
                    </h1>
                </div>
            </div>
            <div className="container-fluid menu">
                <div className="container">
                    <div className="d-flex menu-items">
                        <div className="active">
                            <a href="index.html">Home</a>
                        </div>
                        <div>
                            <a href="category.html">Health</a>
                        </div>
                        <div>
                            <a href="category.html">Religion</a>
                        </div>
                        <div>
                            <a href="category.html">Technology</a>
                        </div>
                        <div>
                            <a href="category.html">Business</a>
                        </div>
                        <div>
                            <a href="category.html">Politics</a>
                        </div>
                        <div>
                            <a href="category.html">Features</a>
                        </div>
                        <div>
                            <a href="category.html">Interviews</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">
                        <h1>Nepal and PNG to play ODI series in Oman</h1>
                        <small>27th August, 2021</small>
                        <p className="mt-4 summary">
                            Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                        </p>
                        <img src="https://letzcricket.com/uploads/news/ZqXXlQDeCffne57g.jpg" className="mt-3 thumb" />
                        <div className="story mt-4">
                            <p>
                                Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                            </p>
                            <p>
                                Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                            </p>
                            <p>
                                Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs. Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                            </p>
                            <p>
                                Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                            </p>
                            <p>
                                Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.
                            </p>
                        </div>
                        <hr />
                        <div className="container section mt-4 no-pad">
                            <div className="section-title">
                                <span>Recommended</span>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb" src="https://letzcricket.com/uploads/news/zXhIbjMmry4D2Sup.png" />
                                    </div>
                                    <a href="">
                                        India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb" src="https://letzcricket.com/uploads/articles/6CdghhIpvYREvJ6a.png" />
                                    </div>
                                    <a href="">
                                        Glenn Maxwell's All-Time IPL XI, Big names missing
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb" src="https://letzcricket.com/uploads/articles/dddNsPXVC6f5bmI5.jpg" />
                                    </div>
                                    <a href="">
                                        Can Rohit be next Sehwag in Indian Test Cricket
                                    </a>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                                    <div className="mb-2 image image-xs">
                                        <img className="thumb" src="https://letzcricket.com/uploads/articles/sL1e41w4xUmSDA8L.jpg" />
                                    </div>
                                    <a href="">
                                        Domestic Cricket changing the face of Nepali Cricket
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="trending mt-4">
                            <div className="section-title">
                                <span>Trending</span>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/Pk9jw3Z9iv8EBLxE.jpg" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Paras Khadka retires from international cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/articles/dddNsPXVC6f5bmI5.jpg" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Can Rohit be next Sehwag in Indian Test Cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/vGWpKyVU7jHXz5K8.png" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        India win series despite Sam Curran's Heroics
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/ZqXXlQDeCffne57g.jpg" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="">
                                        Domestic Cricket Changing the Face of Nepali Cricket
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/LCfdygXg89FURcsM.jpeg" />
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
