import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AccordionData } from "../Data/AccordionData";
import Accordion from "../components/elements/Accordion";
import TestimonialSlider from "../components/slider/Testimonial";
import { PriceTable } from "../components/elements/PriceTable";
import { PricingData1 } from "../Data/pricingData";
import { deliveryData } from "../Data/DeliveryData";

function Faqs(): JSX.Element {
  return (
    <>
      <Layout headerStyle={"header-bg-transparent"}>
        <div>
          <section className="section-box">
            <div className="banner-hero banner-faqs">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="text-display-3 color-white mb-30">Frequently Asked<br className="d-lg-block d-none" /> Questions</h1>
                    <div className="form-round">
                      <form className="form-inline" action="#"><input className="form-control input-round" placeholder="Ask a questions..." /><a className="btn btn-round-icon" type="submit" /></form>
                    </div>
                    <p className="text-body-lead color-white mt-40">We are collect your searching keywords to improve our services</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box mt-80">
            <div className="container mt-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900">Type of FAQ</h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">We understand that you may have questions about various aspects of furniture, from delivery and installation to maintenance and warranty. To make your shopping experience as smooth as possible, we have categorized our frequently asked questions into different types.</p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
            </div>
            <div className="container mt-60 mb-30">
              <div className="row">
                {deliveryData && deliveryData.map(item =>
                  <div className="col-lg-4 col-md-12 col-12 mb-20" key={item.id}>
                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                      <div className="grid-6-img"><img width={50} height={50} src={item.icon} alt="Dionysus" /></div>
                      <h3 className="text-heading-5 mt-20">{item.title}</h3>
                      <p className="text-body-text color-gray-600 mt-20">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="section-box mt-80">
            <div className="container mt-60">
              <div className="row">
                <div className="col-lg-5 mb-40">
                  <h3 className="text-heading-1 text-center">Frequently Asked Question</h3>
                  <div className="row">
                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">Shipping</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">Find answers to common questions about our products.</p>
                    </div>
                    <div className="col-lg-12 mt-50">
                      <h4 className="text-heading-6 icon-leaf">Product & Payment</h4>
                      <p className="text-body-excerpt color-gray-600 mt-15">Explore FAQs related to purchasing and payment processes.</p>
                    </div>
                  </div>
                  <div className="mt-60 group-res-btns text-center">
                    <Link to="/page-contact"><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>
                    <div className="visible-phone py-2"></div>
                    <Link to="/auth/page-login"><a className="btn btn-link text-heading-6">Support Center</a></Link>
                  </div>
                </div>
                <div className="col-lg-7">
                  <Accordion accordionData={AccordionData} />
                </div>
              </div>
            </div>
          </section>
          <section className="section-box mt-70 mb-20">
            <div className="container mt-60">
              <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan <br className="d-lg-block d-none" />That&apos;s For You</h3>
            </div>
            <PriceTable priceData={PricingData1} />
          </section>
          <section className="section-box mt-80">
            <div className="container mt-60">
              <div className="row">
                <h3 className="text-heading-1 mb-10">Customers Feedback</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">What are customers talk about us?</p>
              </div>
            </div>
            <div className="container mt-60 mobile-feedback">
              <TestimonialSlider />
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Faqs;