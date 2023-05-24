import React, {useEffect} from 'react';

const Category = () => {
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

            <div className="container main-news">
                <div className="row">
                    <div className="col-8">

                        <div className="mb-4 mt-4 section">
                            <div className="section-title">
                                <span>Latest Updates</span>
                            </div>
                            <div className="row mb-3 bb-1 pt-0">
                                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                    <img className="thumb" src="https://letzcricket.com/uploads/news/vGWpKyVU7jHXz5K8.png" alt="Thumb" />
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
                            {/* Repeat the above code block for other news items */}
                        </div>
                    </div>
                    <div className="col-4">
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

                            {/* Repeat the above code block for other trending news items */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;


