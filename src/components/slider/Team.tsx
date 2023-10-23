import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderDataRow1, SliderDataRow2 } from "../../Data/SliderData";
import useWidth from "../../hooks/useWidth";
SwiperCore.use([Autoplay, Navigation]);

const TeamSlider: React.FC = () => {
  const { width } = useWidth()
  const [sliderPerview, setSliderPerview] = useState<number>(4)

  useEffect(() => {
    if (width > 991.98) {
      setSliderPerview(4);
    } else if (width < 991.98 && width > 575) {
      setSliderPerview(2);
    } else { setSliderPerview(1) }
  }, [width])
  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-1">
          <Swiper
            slidesPerView={sliderPerview}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-30 pt-5"
          >
            <>
              {SliderDataRow1.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide active">
                    <div className="row">
                      <div className="">
                        <div className="card-grid-style-5 hover-up">
                          <div className="grid-5-img mb-15"><img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`/assets/imgs/page/about/1/${item?.img}`} alt="Dionysus" /></div><span className="text-body-text-md color-gray-500">{`${item.job}`}</span>
                          <h3 className="text-heading-5 mb-5 mt-5">{`${item?.title}`}</h3>
                          <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">{`${item?.content}`}</p><span className="text-body-text-md color-gray-600">{`${item?.action}`}</span>
                          <div className="social-bottom">
                            <Link to="#" className="icon-socials icon-facebook"></Link>
                            <Link to="#" className="icon-socials icon-twitter"></Link>
                            <Link to="#" className="icon-socials icon-instagram"></Link>
                            <Link to="#" className="icon-socials icon-linkedin"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
          <Swiper
            slidesPerView={sliderPerview}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            {SliderDataRow2.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="swiper-slide active">
                    <div className="row">
                      <div className="">
                        <div className="card-grid-style-5 hover-up">
                          <div className="grid-5-img mb-15"><img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`/assets/imgs/page/about/1/${item?.img}`} alt="Dionysus" /></div><span className="text-body-text-md color-gray-500">{`${item.job}`}</span>
                          <h3 className="text-heading-5 mb-5 mt-5">{`${item?.title}`}</h3>
                          <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">{`${item?.content}`}</p><span className="text-body-text-md color-gray-600">{`${item?.action}`}</span>
                          <div className="social-bottom">
                            <Link to="#" className="icon-socials icon-facebook"></Link>
                            <Link to="#" className="icon-socials icon-twitter"></Link>
                            <Link to="#" className="icon-socials icon-instagram"></Link>
                            <Link to="#" className="icon-socials icon-linkedin"></Link>
                          </div>
                        </div>
                      </div>
                    </div></div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" />
      </div>
    </>
  );
};

export default TeamSlider;