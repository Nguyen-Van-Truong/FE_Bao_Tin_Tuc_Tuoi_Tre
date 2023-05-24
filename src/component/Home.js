import React, {useEffect} from 'react';
import './style.css';
import './bootstrap.min.css';

function Home() {
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
                        <a href="index.html">
                            The News
                        </a>
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

            <div className="container main-news section">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                        <img className="thumb mb-3" src="https://letzcricket.com/uploads/news/ZqXXlQDeCffne57g.jpg" alt="Thumbnail" />
                        <h3>
                            <a className="font-large" href="detail.html">
                                Nepal and PNG to play ODI series in Oman
                            </a>
                        </h3>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                                <div className="image image-sm mb-1">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/Pk9jw3Z9iv8EBLxE.jpg" alt="Thumbnail" />
                                </div>
                                <h3 className="mb-4">
                                    <a href="detail.html">
                                        Paras Khadka retires from international cricket
                                    </a>
                                </h3>

                                <div className="image image-sm mb-1">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/aU1BQdD1aezJIXUv.jpg" alt="Thumbnail" />
                                </div>
                                <h3 className="mb-4">
                                    <a href="detail.html">
                                        New Zealand win inaugural World Test Championship
                                    </a>
                                </h3>

                                {/*cho bi thieu*/}
                                ...
                            </div>

                            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                                <div className="image image-sm mb-1">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/rTv8qzdEizH8HSTE.png" alt="Thumbnail" />
                                </div>
                                <h3 className="mb-4">
                                    <a href="detail.html">
                                        Afridi to play Everest Premier League from Kathmandu Kings
                                    </a>
                                </h3>

                                <div className="image image-sm mb-3">
                                    <img className="thumb image-sm" src="https://letzcricket.com/uploads/news/VxmVhzyjAkw3hCaB.png" alt="Thumbnail" />
                                </div>
                                <h3>
                                    <a href="detail.html">
                                        IPL 2021 to resume in UAE in September-October
                                    </a>
                                </h3>
                            </div>

                            {/*het*/}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section mt-4">
                <div className="section-title">
                    <span>Analysis & Prediction</span>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                        <div className="mb-2 image image-xs">
                            <img className="thumb" src="https://letzcricket.com/uploads/news/zXhIbjMmry4D2Sup.png" alt="Thumbnail" />
                        </div>
                        <a href="detail.html">
                            India vs England 4th T20 : Match Prediction, Probable XI, Fantasy Picks
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                        <div className="mb-2 image image-xs">
                            <img className="thumb" src="https://letzcricket.com/uploads/articles/6CdghhIpvYREvJ6a.png" alt="Thumbnail" />
                        </div>
                        <a href="detail.html">
                            Glenn Maxwell's All-Time IPL XI, Big names missing
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                        <div className="mb-2 image image-xs">
                            <img className="thumb" src="https://letzcricket.com/uploads/articles/dddNsPXVC6f5bmI5.jpg" alt="Thumbnail" />
                        </div>
                        <a href="detail.html">
                            Can Rohit be the next Sehwag in Indian Test Cricket
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                        <div className="mb-2 image image-xs">
                            <img className="thumb" src="https://letzcricket.com/uploads/articles/sL1e41w4xUmSDA8L.jpg" alt="Thumbnail" />
                        </div>
                        <a href="detail.html">
                            Domestic Cricket changing the face of Nepali Cricket
                        </a>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="row">
                    {/*content*/}
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="mb-4 mt-4">
                            <div className="section-title">
                                <span>Latest Updates</span>
                            </div>
                            <div className="row mb-3 bb-1 pt-0">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/vGWpKyVU7jHXz5K8.png" alt="Article Thumbnail" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <h5>
                                        <a href="detail.html">
                                            India win series despite Sam Curran's heroics
                                        </a>
                                    </h5>
                                    <small>29th August, 2021</small>
                                    <p className="summary pt-3">Despite heroic innings from the bat of Sam Curran, India defeated England by 7 runs to win the 3 match series 2-1. Chasing a target of 330 runs to win, the visiting team finished on 322/9 falling short of the target by 7 runs.</p>
                                </div>
                            </div>
                            {/* Repeat the above row divs for other articles */}
                        </div>
                    </div>

                    {/*trending*/}
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="trending mt-4">
                            <div className="section-title">
                                <span>Trending</span>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/Pk9jw3Z9iv8EBLxE.jpg" alt="Trending Thumbnail" />
                                </div>
                                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                    <a href="detail.html">
                                        Paras Khadka retires from international cricket
                                    </a>
                                </div>
                            </div>
                            {/* Repeat the above row divs for other trending articles */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
