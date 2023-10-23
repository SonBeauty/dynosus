// import Image from 'next/image';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const WeDoSlider3: React.FC = () => {
    const data = [
        {
            img: "checking.svg",
            title: "Inspection and Evaluation",
            text: "Our expert team conducts a thorough inspection to assess the garments requiring alteration. We identify specific adjustments needed for the desired fit."
        },
        {
            img: "confirm.svg",
            title: "Size Confirmation",
            text: "Upon receiving customer-provided size information, we verify the measurements and cross-reference them with garment specifications for accurate alterations."
        },
        {
            img: "sewing.svg",
            title: "Alteration and Tailoring",
            text: "Our experienced tailors meticulously adjust the garments, including hemming, seam adjustments, and more, ensuring a perfect fit based on customer requirements."
        },
        {
            img: "check-all.svg",
            title: "Quality Assurance",
            text: "After alterations, our quality assurance team rigorously inspects each garment, checking fit, stitching, and craftsmanship to ensure high standards and customer satisfaction."
        },
        {
            img: "iron.svg",
            title: "Final Touches and Pressing",
            text: "Before delivery, we add final touches, such as pressing or steaming, to ensure impeccable appearance, eliminating wrinkles and presenting garments in their best condition."
        },
        {
            img: "delivery.svg",
            title: "Packaging and Delivery",
            text: "After completing alterations and final touches, we securely package the garments for transit. Prompt delivery to the customer's specified address ensures a seamless experience."
        }
    ];
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={2}
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
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 pl-30 pr-30 hover-up">
                                        <div className="grid-2-img">
                                            <img width={50} height={50} src={`/assets/imgs/page/services/2/${item.img}`} alt="Dionysus" />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
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

export default WeDoSlider3;

