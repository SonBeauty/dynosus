import React from 'react'
import { Link } from "react-router-dom";
import Style from '../css/Home3.module.css'
import Layout from "../components/layout/Layout";
import { PricingData1 } from "../Data/pricingData";
import { PriceTable } from "../components/elements/PriceTable";
import IconComponent from "../components/elements/IconComponent";
import CustomerFeedback from "../components/elements/CustomerFeedback";
import { items2 } from '../Data/IconData';
import IconBox from '../components/svg/IconBoxSVG';
import IconCoinSVG from '../components/svg/IconCoinSVG';
import IconPhoneSVG from '../components/svg/IconPhoneSVG';
import IconBoxBold from '../components/svg/IconBoxBold';
import { Newsletter } from '../components/elements/NewSteller';
import OverviewComponent from '../components/elements/Overview';
import MakeUs from '../components/elements/MakeUs';
import BestSeller from '../components/elements/BestSeller';
import CounterComponent from '../components/elements/CounterComponent';

const Index3 = () => {

  return (
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-2 overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mt-50">
                  <span className="tag-1 bg-color-3 color-white">DIONYSUS</span>
                  <h1 className="text-display-3 mt-30">
                  Unveiling the <span className="color-olive">latest furniture</span> trend in global
                  </h1>
                <p className="text-body-lead-large color-gray-900 mt-40 pr-40">
                    The lastest trend is waiting for you
                  </p>
                  <div className="mt-40">
                    <Link to="/page-about-1" className="btn btn-black shape-square icon-arrow-right-white">Get Start</Link>
                    <Link to="/page-about-2" className="btn btn-link icon-triangle-2 color-gray-900 ml-40">How it works</Link>
                  </div>
                <div className="mt-50 mb-100">
                  <CounterComponent />
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2">
                      <img src="/assets/imgs/page/homepage2/balance.png" alt="Moirai" />
                    </div>
                    <div className="block-2 shape-3">
                      <img src="/assets/imgs/page/homepage2/payment.png" alt="Moirai" />
                    </div>
                    <div className="img-responsive shape-1">
                      <img alt="Moirai" src="/assets/imgs/page/homepage2/banner.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box overflow-hidden mt-90">
          <div className="container">
            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
              Trusted by the world’s furniture companies
            </h2>
            <IconComponent items={items2} />
          </div>
        </div>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <div className="inner-image">
                  <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage2/img-2.png" alt="Moirai" />
                  <div className="block-chart rounded-4 overflow-hidden">
                    <img src="/assets/imgs/page/homepage2/chart.png" alt="dynosus" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <span className="tag-1 bg-6 color-green-900">Overview</span>
                <h3 className="text-heading-1 mt-30">
                  About Us
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  We facilitate the creation of strategy and design
                </p>
                <div className="list-icons mt-50">
                <OverviewComponent />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container mt-100'>
          <p className={`${Style.textSection} mb-50`}>
            Why Choose Us
          </p>
          <p className={`${Style.textContent} mb-50`}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </p>
          <div className='row'>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-12 ${Style.pxmd} ${Style.imgBanner}`}>
              <div className='h-100'>
                <img src="/assets/imgs/page/homepage3/imgChoose1.png" alt="dyno" className='img-about-2' />
              </div>
            </div>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-12 ${Style.pxmd} ${Style.column}`}>
            <div className='h-50'>
              <img src="/assets/imgs/page/homepage3/imgChoose2.png" alt="dyno" className='img-about-2' />
            </div>
            <div className='h-50'>
                <img src="/assets/imgs/page/homepage3/imgChoose3.png" alt="dyno" className='img-about-2' />
              </div>
            </div>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-12 ${Style.pxmd} ${Style.column} ${Style.columnInfo}`}>
            <div>
              <div className={Style.boxborder}>
                <div className={Style.box}>
                  <IconBox />
                </div>
                <p className={`${Style.textTitleBox} mb-10 mt-10`}>
                  Free Shipping
                </p>
                <p className={Style.textContentBox}>
                  It is a long established fact that
                  a reader will be distracted by the readable content.
                </p>
              </div>
            </div>
              <div>
                <div className={Style.boxborder}>
                  <div className={Style.box}>
                  <IconPhoneSVG />
                  </div>
                  <p className={`${Style.textTitleBox} mb-10 mt-10`}>
                  24/7 Customer Support
                  </p>
                <p className={`${Style.textContentBox}`}>
                    It is a long established fact that
                    a reader will be distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-12 ${Style.pxmd} ${Style.column} ${Style.columnInfo}`}>
            <div>
                <div className={Style.boxborder}>
                  <div className={`${Style.box}`}>
                  <IconCoinSVG />
                  </div>
                  <p className={`${Style.textTitleBox} mb-10 mt-10`}>
                  Money Guarantee
                  </p>
                  <p className={Style.textContentBox}>
                    It is a long established fact that
                    a reader will be distracted by the readable content.
                  </p>
                </div>
            </div>
            <div>
                <div className={Style.boxborder}>
                  <div className={Style.box}>
                    <IconBoxBold />
                  </div>
                  <p className={`${Style.textTitleBox} mb-10 mt-10`}>
                  Flexible Payment
                  </p>
                  <p className={Style.textContentBox}>
                    It is a long established fact that
                    a reader will be distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <MakeUs />
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mb-30">
                <span className="tag-1 bg-9 color-green-900">For You</span>
                <h3 className="text-heading-1 mt-30">Best Seller</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                Welcome to our Best Sellers collection, where you can discover our most sought-after furniture pieces that are loved by our customers.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                <BestSeller />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <div className="inner-image">
                  <img
                    className="bdrd-16 img-responsive"
                    src="/assets/imgs/page/homepage2/img-best-seller.png"
                    alt="Moirai"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CustomerFeedback />
        <section className="section-box mt-100">
          <div className="container mt-60">
            <h3 className="text-heading-1 text-center mb-10">
              Choose The Best Plan <br className="d-lg-block d-none" />
              That&apos;s For You
            </h3>
          </div>
          <PriceTable priceData={PricingData1} />
        </section>
      <Newsletter chartImgUrl='./assets/imgs/template/chart.png' newsletterImgUrl='./assets/imgs/page/homepage3/imgNewlestter.png' />
    </Layout>
  )
}

export default Index3