import { Link } from "react-router-dom";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import Layout from "../components/layout/Layout";
import Accordion2 from "../components/elements/Accordion2";
import ModalVideo from 'react-modal-video';
import Feedback from "../components/elements/Feedback";
import { FBData } from "../util/feedbackData";
import Blog from "../components/elements/Blog";
import Newsletter from "../components/elements/Newsletter";

function Index3(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-red color-white">Fashion as unique as you are</span>
                                <h1 className="text-display-2 color-red mt-40">Unveiling the <span className="color-gray-900">latest fashion</span> trend in global</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">The latest trend is waiting for you</div>
                                <div className="mt-50 group-res-btns">
                                    <Link to="/#" className="btn btn-black icon-arrow-right-white mb-15">Start free trial</Link>
                                    <Link to="/#" className="btn btn-default icon-arrow-right color-gray-900 ml-20 btn-mb mb-15">Learn more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <div className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></div>
                                    <img className="img-responsive bdrd-16" src="/assets/imgs/page/homepage3/img-banner-video.png" alt="Moirai" />
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <div className="section-box mt-100 mb-30">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-red mb-10">What Makes Us Outstanding</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    At our clothing shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience.
                                    Here are a few factors that set us apart.
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons home-3">
                                    <div className="item-icon">
                                        <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-quality.svg" alt="Moirai" /></span>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">
                                                1. Unparalleled Quality
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons home-3">
                                    <div className="item-icon">
                                        <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-trendsetting.svg" alt="Moirai" /></span>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">
                                                2. Trendsetting Style
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Our team of experienced fashion experts keeps a pulse on the latest trends and emerging styles.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons home-3">
                                    <div className="item-icon">
                                        <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-community.svg" alt="Moirai" /></span>
                                        <div className="career-category">
                                            <h4 className="text-heading-4">
                                                3. Community Engagement
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                We actively engage with our community through various initiatives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box mt-100 mb-50">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage3/img-product-2.png" alt="Moirai" /></div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1 bg-red color-white">Fashion as unique as you are</span>
                                <h3 className="text-heading-1 text-center color-red mt-30">
                                    Best Seller
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Welcome to our Best Sellers collection, where you can
                                    discover our most sought-after fashion pieces that are loved
                                    by our customers.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Stay on-trend
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Explore our Best Sellers collection for the latest fashion trends that are making waves in the industry.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Customer Favorites
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Discover our most-loved fashion pieces, as recommended by our valued customers.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Uncompromising Quality
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Shop from our Best Sellers collection, where fashion meets exceptional craftsmanship and high-quality materials.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">
                                            Versatile Style
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            Find versatile fashion pieces that effortlessly elevate your wardrobe for any occasion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Feedback feedbackStyle={'feedback-style-1'} feedbackData={FBData} />
                <section className="section-box mt-100">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1 color-red">Frequently asked questions</h3>
                                <p className="text-body-text color-gray-600 mt-30">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                <div className="row">
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">Need any help</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Are you in trouble with purchasing product?</p>
                                    </div>
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf-red">Support your problem</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Just contact us and we will support you at any time.</p>
                                    </div>
                                </div>
                                <div className="mt-50 group-res-btns">
                                    <Link to="#" className="btn mt-10 btn-black icon-arrow-right-white">Contact Us</Link>
                                    <div className="hidden-phone px-3" />
                                    <Link to="/page-login" className="btn mt-10 btn-link text-heading-6">Support Center</Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <Accordion2 />
                            </div>
                        </div>
                    </div>
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
                                <Link to="/#" className="btn btn-black icon-arrow-right-white">
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <Blog />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container mt-60">
                        <div className="bdrd-58 box-gray-100">
                            <div className="row px-2 py-5">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-red mt-10">What can we support for you?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Feel free to ask about clothes.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-red icon-home-red mb-10 mt-10">Moirai</h4>
                                    <p className="text-body-text color-gray-600">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                                    <p className="text-body-text color-gray-600">(239) 555-0108</p>
                                    <p className="text-body-text color-gray-600">vzenlabs@gmail.com</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about your problem" /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-20 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><p className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter newsletterStyle="style-2" />
                <ModalVideo
                    channel="youtube"
                    youtube={{
                        autoplay: 1,
                        mute: 1
                    }}
                    isOpen={isOpen}
                    videoId="A450hyqGkmk"
                    onClose={() => setOpen(false)}
                />
            </Layout>
        </>
    )
}

export default Index3;