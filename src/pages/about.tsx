import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import CounterUp from "../components/elements/CounterUp";
import { useState } from "react";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import ModalVideo from "react-modal-video";
import { blogsData1 } from "../Data/Blog";
import { AUData1 } from "../Data/AboutUsData";
import { AboutUs } from "../components/elements/AboutUs";
import { Blogs } from "../components/elements/Blogs";
import { OurStrenghts1 } from "../components/elements/OurStrenght";
import { OurStrenghts1Data } from "../Data/OurStrenghtData";
import { Banner } from "../components/elements/Banner";


function About(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <Banner
          tag="What We Do, What You Get"
          title="About us"
          description="Elevate Your Style, Embrace the Extraordinary Home Decor"
          bgImage="/assets/imgs/page/about/1/banner-bg-img.png"
          hasButton
          expColor="bg-tan"
        />
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1 bg-2 color-orange-900">
                    What We Do, What You Get
                  </span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  The Power Of
                  <br className="d-lg-block d-none" /> Creative Ideas
                </h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}></a>
                  <img
                    width={1076}
                    height={520}
                    className="img-responsive bdrd-16"
                    src="/assets/imgs/page/about/1/img-1.png"
                    alt="Dionysus"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </section>
        <OurStrenghts1 data={OurStrenghts1Data} />
        <AboutUs AUData={AUData1} bigTitle="About Us" decription="We facilitate the creation of strategy and design." tag="What We Do, What You Get"/>
        <section className="section-box">
          <div className="container mt-110">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Team</h3>
                <p className="text-body-lead-large color-gray-600">
                  Create & Trending
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TeamSlider />
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-10">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Customers Feedback</h3>
                <p className="text-body-lead-large color-gray-600">
                  What are our client talk about us?
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TestimonialSlider />
          </div>
        </section>
        <Blogs title="Latest News" description="From Our blog and Event fanpage" blogsData={blogsData1} />
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
  )
}

export default About;