import React from 'react'
import Layout from "../components/layout/Layout";
import CustomerFeedback from "../components/elements/CustomerFeedback";
import Faq from "../components/elements/Faq";
import Style from '../css/Pricing1.module.css'
import { PricingData2 } from "../Data/pricingData";
import { PriceTable } from "../components/elements/PriceTable";
import { Newsletter } from '../components/elements/NewSteller';
import LifecycleComponent from '../components/elements/LifecycleComponent';
import { lifecycleData } from '../Data/LifecycleData';
import { Link } from 'react-router-dom';

const Pricing1 = () => {
  return (
    <Layout>
      <section className={Style.header}>
        <p className={Style.textBanner}>Pricing</p>
      </section>
      <section className="section-box mt-100">
        <div className="container mt-60">
          <h3 className="text-heading-1 text-center mb-10">
            Choose The Best Plan <br className="d-lg-block d-none" />
            That&apos;s For You
          </h3>
        </div>
        <PriceTable priceData={PricingData2} />
        <div className='text-center mt-30'>
          <Link to="" className='btn btn-black icon-arrow-right-white mr-10'>Start free trial</Link>
          <Link to="" className='btn btn-default hover-up icon-arrow-right ml-10'>View plans comparison</Link>
        </div>
      </section>
      <LifecycleComponent data={lifecycleData} />
      <CustomerFeedback />
      <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center">
              <h2 className="text-heading-1 color-gray-900">Frequently Asked Questions</h2>
              <p className="text-body-lead-large color-gray-600 mt-20">We understand that you may have questions about various aspects of furniture, from delivery and installation to maintenance and warranty. To make your shopping experience as smooth as possible, we have categorized our frequently asked questions into different types.</p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>
      </section>
      <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <Faq />
          </div>
        </div>
      </section>
      <section className='mb-80'>
      <Newsletter chartImgUrl='./assets/imgs/template/chart.png' newsletterImgUrl='./assets/imgs/page/homepage3/imgNewlestter.png' />
      </section>
    </Layout>
  )
}

export default Pricing1