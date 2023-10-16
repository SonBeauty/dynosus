import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper as SwiperProps } from "swiper/types";
interface ThumbProps extends SwiperProps {
    destroyed: boolean;
}

const ThumbSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<ThumbProps>();

    return (
        <>
            <div className="galleries">
                <div className="detail-gallery">
                    <span className="icon-plus" />
                    <div className="product-image-slider">
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}>
                            <SwiperSlide>
                                <img
                                    src="/assets/imgs/page/single-product/img-sp6.jpg"
                                    alt="product mage"
                                    className="border-radius-15"
                                    style={{ width: '100%', height: '50%', objectFit: 'cover' }}
                                />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className="">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="">
                        <SwiperSlide>
                            <img
                                src="/assets/imgs/page/single-product/img-sp5.jpg"
                                alt="product mage"
                                className="border-radius-15"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img
                                src="/assets/imgs/page/single-product/img-sp-6.jpg"
                                alt="Product mage"
                                className="border-radius-15"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/assets/imgs/page/single-product/img-sp5.jpg"
                                alt="product mage"
                                className="border-radius-15"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ThumbSlider;
