// import Image from "next/image";
import { Link } from "react-router-dom";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const BlogSlider: React.FC = () => {
    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
    ];
    return (
        <>
            <div className="slider-news">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 250000,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active">
                                    <div className="block-news grid-4-img">
                                        <div className="item-news">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="img-news">
                                                        <Link to="/blog-single">
                                                            <a><img width={677} height={492} src="/assets/imgs/page/blog/1/img-1.png" alt="Moirai" /></a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="right-news card-grid-style-4 mb-0"><span className="tag-dot">Marketing Event</span>
                                                        <Link to="/blog-single" className="text-heading-4"><a >We can blend colors multiple ways, the most common
                                                        </a></Link>
                                                        <p className="text-body-text color-gray-500 text-desc-fix-h">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p>
                                                        <div className="blog-img-user">
                                                            <div className="img-user img-user-round"><img width={56} height={56} src="/assets/imgs/page/blog/2/user-1.png" alt="Moirai" /></div>
                                                            <h4 className="text-heading-6 color-gray-900">Jenny Wilson</h4>
                                                            <p className="text-body-small color-gray-500">August 25, 2022</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>
        </>
    );
};

export default BlogSlider;

