// import Image from 'next/image';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const OfferSlider: React.FC = () => {
    const data = [
        {
            img: "quality.svg",
            title: "Unparalleled Quality",
            text: "We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality."
        },
        {
            img: "trendsetting.svg",
            title: "Trendsetting Style",
            text: "Our team of experienced fashion experts keeps a pulse on the latest trends and emerging styles."
        },
        {
            img: "community.svg",
            title: "Community Engagement",
            text: "We actively engage with our community through various initiatives."
        }
    ];
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView="auto"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide
                                key={i}
                            >
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up outstanding">
                                        <div className="grid-2-img">
                                            <img
                                                width={50}
                                                height={50}
                                                src={`/assets/imgs/page/homepage1/${item.img}`}
                                                alt="Dionysus"
                                            />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default OfferSlider;

