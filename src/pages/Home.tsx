import { Link } from "react-router-dom";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import OfferSlider from "../components/slider/Offer";
import Newsletter from "../components/elements/Newsletter";
// import Blog from "../components/elements/Blog";
// import AboutUs from "../components/elements/AboutUs/index";
import Logos from "../components/elements/Logo/index";
import BestSeller from "../components/elements/BestSeller";

import NewProducts from "../components/elements/NewProduct/index";

function Home(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="text-display-2">
                    Unveiling the
                    <br />
                    <span className="color-pink-primary">lastest fashion</span>
                    <br />
                    trend in global
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    The lastest trend is waiting for you
                  </p>
                  <div className="mt-40">
                    <Link
                      to="/#"
                      className="btn btn-black icon-arrow-right-white"
                    >
                      Get Start
                    </Link>
                    <Link
                      to="/#"
                      className="btn btn-link icon-arrow-right color-gray-900 text-heading-6"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="video-block shape-1">
                      <div
                        className="popup-youtube btn-play-video"
                        onClick={() => setOpen(true)}
                      ></div>
                      <span className="text-heading-4">Watch intro video</span>
                    </div>
                    <div className="shape-2">
                      <img
                        alt="Moirai"
                        src="/assets/imgs/page/homepage1/banner-img.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box overflow-visible mt-80">
          <div className="container mt-70">
            <div className="row justify-content-md-center">
              <Logos />
            </div>
          </div>
        </div>
        <section className="section-box mt-100">
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">NEW PRODUCT</h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We’re unique no matter how you put it.
                  <br className="d-lg-block d-none" />
                  Feel trendy. Feel authentic.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-60">
            <div className="text-center mt-60">
              <NewProducts />
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">About Us</h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We facilitate the creation of strategy and design
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-60">
            <div className="row">
              {/* <AboutUs /> */}
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img
                  className="bdrd-16 img-responsive"
                  src="/assets/imgs/page/homepage1/img-product-2.png"
                  alt="Moirai"
                />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <span className="tag-1">Fashion as unique as you are.</span>
                <h3 className="text-heading-1 text-center mt-30">
                  Best Seller
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  Welcome to our Best Sellers collection, where you can discover
                  our most sought-after fashion pieces that are loved by our
                  customers.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">
                  <BestSeller />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-70">
            <div className="bg-2 bdrd-58 pattern-white pb-60">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                  <h2 className="text-heading-1 color-gray-900">
                    What makes us outstanding
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    At our clothing shop, we strive to stand out from the crowd
                    by offering a unique and exceptional shopping experience.
                    Here are a few factors that set us apart.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-60">
                <OfferSlider />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Customers Feedback</h3>
                <p className="text-body-lead-large color-gray-600">
                  What are our client talk about us?
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-60 mobile-feedback">
            <TestimonialSlider />
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="text-heading-1 mb-10">Latest News</h3>
                <p className="text-body-lead-large color-gray-600">
                  From Our blog and Event fanpage
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-start pt-30">
                <Link to="/#" className="btn btn-black icon-arrow-right-white">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              {/* <Blog /> */}
            </div>
          </div>
        </section>
        <section className="section-box section-blue mt-110">
          <div className="container mt-60">
            <h3 className="text-heading-1 text-center mb-10 text-shadow-25">
              Choose The Best Plan <br className="d-lg-block d-none" />
              That’s For You
            </h3>
          </div>
          {/* <PricingTable /> */}
        </section>
        <Newsletter />
        <ModalVideo
          channel="youtube"
          youtube={{
            autoplay: 1,
            mute: 1,
          }}
          isOpen={isOpen}
          videoId="A450hyqGkmk"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}

export default Home;
