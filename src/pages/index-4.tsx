import { Link } from "react-router-dom";
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/Layout";
import ModalVideo from "react-modal-video";
import Feedback from "../components/elements/Feedback";
import { FBData } from "../util/feedbackData";
import Blog from "../components/elements/Blog";
import Newsletter from "../components/elements/Newsletter";
import { PriceTable } from "../components/elements/PriceTable";
import { PricingData1 } from "../Data/pricingData";

function Index4(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout headerStyle="logo-white">
                <section className="section-box">
                    <div className="banner-hero banner-4 bg-gray-1000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2 color-white">
                                        Unveiling <br />
                                        The Latest <br />
                                        Fashion Trends!
                                    </h1>
                                    <p className="text-body-lead-large color-white mt-30 pr-40">
                                        The latest trend is waiting for you
                                    </p>
                                    <div className="mt-40">
                                        <Link
                                            to="/#"
                                            className="btn btn-orange icon-arrow-right text-heading-6">
                                            Get Started
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-link color-white text-heading-6 btn-link-inter">
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className="mt-60">
                                        <div className="d-flex">
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">
                                                    5000+
                                                </h3>
                                                <p className="text-body-normal color-gray-300">
                                                    Happy Customers
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">
                                                    200+
                                                </h3>
                                                <p className="text-body-normal color-gray-300">
                                                    Quality Products
                                                </p>
                                            </div>
                                            <div className="col-lg-3 col-sm-4 col-4">
                                                <h3 className="text-heading-2 color-white mb-15">
                                                    100%
                                                </h3>
                                                <p className="text-body-normal color-gray-300">
                                                    Customers Satisfaction
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div
                                            className="popup-youtube btn-play-video-4"
                                            onClick={() => setOpen(true)}></div>
                                        <div className="img-responsive shape-2">
                                            <img
                                                alt="Moirai"
                                                src="/assets/imgs/page/homepage4/banner.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <h2 className="text-heading-2 font-3-5xl line-height-58 color-gray-900 mb-30">
                                    <span className="text-heading-1 font-4xl">What</span>
                                    <br />
                                    Makes Us
                                    Outstand
                                </h2>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15">
                                            <img
                                                className="icon-img-80"
                                                src="/assets/imgs/page/homepage4/icon-quality.svg"
                                                alt="Moirai"
                                            />
                                        </div>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">Unparalleled Quality</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                We meticulously curate our collections to ensure that
                                                every garment we offer meets the highest standards of
                                                quality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15">
                                            <img
                                                className="icon-img-80"
                                                src="/assets/imgs/page/homepage4/icon-trendsetting.svg"
                                                alt="Moirai"
                                            />
                                        </div>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">Trendsetting Style</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Our team of experienced fashion experts keeps a pulse on
                                                the latest trends and emerging styles.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15">
                                            <img
                                                className="icon-img-80"
                                                src="/assets/imgs/page/homepage4/icon-community.svg"
                                                alt="Moirai"
                                            />
                                        </div>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">Community Engagement</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                We actively engage with our community through various
                                                initiatives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container mt-60">
                        <div className="row relative pb-40 overflow-hidden">
                            <div className="col-lg-9 col-sm-12 block-img-we-do">
                                <div className="inner-image">
                                    <img
                                        width={948}
                                        height={655}
                                        className="bdrd-16 img-responsive"
                                        src="/assets/imgs/page/homepage4/img.png"
                                        alt="Moirai"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 block-content-we-do shape-4">
                                <p className="color-gray-900 font-2xl text-uppercase">
                                    <span className="text-w-600 d-none d-sm-block">New</span> <span className="d-none d-sm-block">collections</span>
                                </p>
                                <h3 className="text-heading-1 mt-30 d-none d-sm-block">
                                    Stay Warm <br />
                                    And Stay Trendy
                                </h3>
                                <div className="mt-30">
                                    <Link
                                        to="/#"
                                        className="btn btn-default btn-white icon-arrow-right">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Feedback feedbackStyle={"feedback-style-2"} feedbackData={FBData} />
                <section className="section-box mt-100">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">
                                    Leverage The Power Of AI <br className="d-lg-block d-none" />
                                    To Find Your Style
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Instead of the traditional manual process of deciding what to
                                    wear, we leverage the power of AI to curate the perfect items
                                    for you. Our AI system analyzes your inputted information and
                                    references to select the best-suited options that match your
                                    style!
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-60 mb-lg-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div
                                    className="bg-grey box-square hover-up wow animate__animated animate__fadeIn"
                                    data-wow-delay=".1s">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">
                                        Traditional Items Picking
                                    </h4>
                                    <p className="text-body-text-md color-gray-600">
                                        Select what you believe suits you best through manual
                                        choice.
                                    </p>
                                    <div className="box-image-inner bg-color-1">
                                        <img
                                            src="/assets/imgs/page/homepage4/temp-1.png"
                                            alt="Moirai"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div
                                    className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
                                    data-wow-delay=".2s">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">
                                        Curating Items by AI
                                    </h4>
                                    <p className="text-body-text-md color-gray-600">
                                        Using AI to push beyond your imagination, curate items what
                                        you.
                                    </p>
                                    <div className="box-image-inner bg-color-2">
                                        <img
                                            src="/assets/imgs/page/homepage4/temp-2.png"
                                            alt="Moirai"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container mt-60">
                        <h3 className="text-heading-1 text-center mb-10">
                            Choose The Best Plan <br className="d-lg-block d-none" />
                            That’s For You
                        </h3>
                    </div>
                    <PriceTable priceData={PricingData1} priceItemStyle="price-style-2" />
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link
                                    to="/#"
                                    className="btn btn-black icon-arrow-right-white">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <Blog />
                        </div>
                    </div>
                </section>
                <Newsletter newsletterStyle="style-3" />
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

export default Index4;
