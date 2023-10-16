import { Link } from 'react-router-dom';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../util/shopData";

SwiperCore.use([Autoplay, Navigation]);

const Intro2: React.FC = () => {
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        className="swiper-wrapper pt-5"
                    >
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12 swiper-slide-1">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link to="#"><a>
                                                <div className="category-image"><span className="for-quality"></span></div>
                                                <div className="category-info">
                                                    <h3 className="text-heading-6">Unparalleled Quality</h3>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link to="#"><a><img width={274} height={154} src="/assets/imgs/page/homepage6/img-2.png" alt="image" /></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 swiper-slide-1">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link to="#"><a>
                                                <div className="category-image"><span className="for-trendsetting"></span></div>
                                                <div className="category-info">
                                                    <h3 className="text-heading-6">Trendsetting Style</h3>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link to="#"><a><img width={274} height={154} src="/assets/imgs/page/homepage6/img-3.png" alt="image" /></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 swiper-slide-2">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link to="#"><a>
                                                <div className="category-image"><span className="for-community"></span></div>
                                                <div className="category-info">
                                                    <h3 className="text-heading-6 mt-15">Community Engagement</h3>
                                                    <p className="text-body-lead-large color-gray-500 mt-10">Fashion</p><span className="icon-arrow-right-thin"></span>
                                                </div>
                                            </a></Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link to="#"><a><img width={174} height={230} src="/assets/imgs/page/homepage6/img-4.png" alt="image" /></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>
        </>
    );
};

export default Intro2;

