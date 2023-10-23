import { Link } from 'react-router-dom';
import React from 'react';
import { SwiperSlide } from "swiper/react";
import { Swiper } from 'swiper/react';
import 'swiper/css'
import { data } from "../../util/shopData";

const FeaturedSlider: React.FC = () => {
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
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
                        className="swiper-wrapper pb-70 pt-5"
                    >

                        <SwiperSlide>
                            <div className="row">
                                {data.map((item, i) => (
                                    <>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="product-item-2 hover-up">
                                                <Link to={`/shop/${item.id}`}>
                                                    <div className="product-image">
                                                        <img width={215} height={215} className="img-fluid" src={`/assets/imgs/page/shop1/${item.img}`} alt="" />
                                                    </div>
                                                </Link>
                                                <div className="box-quick-view">
                                                    <div className="quick-view">
                                                        <Link to="#" className="like-product"></Link>

                                                        <Link to="#" className="shuffle-product"></Link>

                                                        <Link to="#" className="view-product"></Link>
                                                    </div>
                                                </div>
                                                <div className="product-info"><span className="text-body-small color-gray-500 font-bold">{item.brand}</span>
                                                    <Link to={`/shop/${item.id}`}>
                                                        <h3 className="text-body-lead color-gray-900">{item.title}</h3>
                                                    </Link>
                                                    <div className="rating mt-10">
                                                        <div className="box-rating">
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star.svg" alt="Dionysus" />
                                                        </div>
                                                        <span className="text-semibold"><span>(</span><span>{item.rating}</span><span>&nbsp;rates )</span></span>
                                                    </div>
                                                    <div className="d-flex mt-20">
                                                        <div className="box-prices"><span className="price-regular mr-5">${item.oldPrice}</span><span className="price-regular price-line">${item.newPrice}</span></div>
                                                        <div className="button-add text-end">
                                                            <Link to="#" className="btn btn-cart">Add</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                {data.map((item, i) => (
                                    <>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="product-item-2 hover-up">
                                                <Link to={`/shop/${item.id}`}>
                                                    <div className="product-image">
                                                        <img width={215} height={215} className="img-fluid" src={`/assets/imgs/page/shop1/${item.img}`} alt="" />
                                                    </div>
                                                </Link>
                                                <div className="box-quick-view">
                                                    <div className="quick-view">
                                                        <Link to="#" className="like-product"></Link>
                                                        <Link to="#" className="shuffle-product"></Link>
                                                        <Link to="#" className="view-product"></Link>
                                                    </div>
                                                </div>
                                                <div className="product-info"><span className="text-body-small color-gray-500 font-bold">{item.brand}</span>
                                                    <Link to={`/shop/${item.id}`}>
                                                        <h3 className="text-body-lead color-gray-900">{item.title}</h3>
                                                    </Link>
                                                    <div className="rating mt-10">
                                                        <div className="box-rating">
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star-active.svg" alt="Dionysus" />
                                                            <span></span><img width={12} height={12} src="/assets/imgs/page/homepage5/star.svg" alt="Dionysus" />
                                                        </div>
                                                        <span className="text-semibold"><span>(</span><span>{item.rating}</span><span>&nbsp;rates )</span></span>
                                                    </div>
                                                    <div className="d-flex mt-20">
                                                        <div className="box-prices"><span className="price-regular mr-5">${item.oldPrice}</span><span className="price-regular price-line">${item.newPrice}</span></div>
                                                        <div className="button-add text-end">
                                                            <Link to="#" className="btn btn-cart">Add</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div >
        </>
    );
};

export default FeaturedSlider;

