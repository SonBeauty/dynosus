import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Feedback from "../components/elements/Feedback";
import { FBData } from "../util/feedbackData";
import Posts from "../components/elements/Posts";
import { postsData } from "../util/blogData";
import { storesInfo } from "../util/storeInfoData";
import Newsletter from "../components/elements/Newsletter";

function Index7(): JSX.Element {
    return (
        <>
            <Layout>
                <div className="page-homepage7-bg"></div>
                <div className="section-box">
                    <div className="banner-hero banner-homepage6">
                        <div className="container mt-40">
                            <div className="row">
                                <div className="col-lg-6 mt-30">
                                    <h1 className="text-display-2">Unveiling the <br /><span className="color-purple">latest fashion</span><br /> trend in global</h1>
                                </div>
                                <div className="col-lg-5 offset-xl-1 mt-30">
                                    <p className="text-body-lead-large font-xl color-gray-500">
                                        Embrace sustainable fashion with our new line of clothing made from ethically sourced organic cotton and recycled materials,
                                        ensuring both style and environmental consciousness go hand in hand.
                                    </p>
                                    <div className="mt-30 group-res-btns">
                                        <Link to="#" className="btn btn-deep-red shape-square icon-arrow-right-white mt-10">Get Started</Link>
                                        <div className="hidden-phone px-2"></div>
                                        <Link to="#" className="btn btn-link icon-triangle icon-triangle-green-600 color-gray-900 mt-10">How it works</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-70">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-7"><img width={746} height={564} src="/assets/imgs/page/homepage7/banner-1.png" alt="Moirai" /></div>
                            <div className="col-lg-5"><img width={746} height={804} src="/assets/imgs/page/homepage7/banner-2.png" alt="Moirai" /></div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-100">
                    <div className="container mt-60">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-10">
                                <div className="pb-20 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-deep-red"><span className="count">20</span>k+</span>
                                            <div className="text-body-quote">Items sold</div>
                                            <p className="text-body-text color-gray-500 mt-10">Over 20k items sold so far! We are blessed to be a leading fashion supplier in the world.</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-600"><span className="count">4.6</span></span>
                                            <div className="text-body-quote">Overall Rating</div>
                                            <p className="text-body-text color-gray-500 mt-10">We strive to provide the best possible shopping experience.</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-deep-red"><span className="count">35</span>+</span>
                                            <div className="text-body-quote">Stores</div>
                                            <p className="text-body-text color-gray-500 mt-10">Over 35 official stores opened worldwide, and the number continues to grow!</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"><span className="text-display-3 color-green-600"><span className="count">100</span>+</span>
                                            <div className="text-body-quote">Partners</div>
                                            <p className="text-body-text color-gray-500 mt-10">We have established long-term partnerships with the most prestigious brands in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
                <Feedback feedbackStyle={'feedback-style-3'} feedbackData={FBData} />
                <div className="section-box mt-100">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center"><img width={494} height={605} className="img-small img-responsive" src="/assets/imgs/page/homepage7/img-1.png" alt="Moirai" />
                                <div className="block-card"><img width={250} height={190} src="/assets/imgs/page/homepage7/chart-2.png" alt="Moirai" /></div>
                                <div className="block-control"><img width={190} height={218} src="/assets/imgs/page/homepage7/img-safety.png" alt="Moirai" /></div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
                                <h3 className="text-heading-1 mt-30">Shopping Process</h3>
                                <p className="text-body-lead-large color-gray-400">How it works</p>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <p className="text-heading-1 color-deep-red mb-10">01</p>
                                        <h4 className="text-heading-6 icon-leaf-purple">Input</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Enter your references and personal information.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <p className="text-heading-1 color-green-600 mb-10">02</p>
                                        <h4 className="text-heading-6 icon-leaf-purple">Item suggestion</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Exclusive item recommendations generated by AI based on your input.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <p className="text-heading-1 color-green-600 mb-10">03</p>
                                        <h4 className="text-heading-6 icon-leaf-purple">Try out</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <p className="text-heading-1 color-deep-red mb-10">04</p>
                                        <h4 className="text-heading-6 icon-leaf-purple">Payment</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-80">
                    <div className="container mt-70 text-center">
                        <h2 className="text-heading-1 color-gray-900">Our Flagship Stores</h2>
                        <p className="text-body-lead-large color-gray-600 mt-20">Our main stores are strategically located in some of the <br className="d-lg-block d-none" />busiest and most high-traffic areas in the world.</p>
                    </div>
                    <div className="container list-category-homepage7 mt-60">
                        <div className="row">
                            {storesInfo && storesInfo.map((store, i) =>
                                <div className="col-lg-6 col-md-12 col-sm-12" key={i}>
                                    <div className="grid-category-2">
                                        <div className="grid-category-image">
                                            <Link to={store.link}><img width={800} height={487} src={store.imageUrl} alt="Moirai" /></Link>
                                        </div>
                                        <Link to={store.link} className="text-heading-5 color-gray-900">{store.name}</Link>
                                        <div className="category-info-bottom">
                                            <div className="shop-info">
                                                <span className="mr-15 color-green-600">Established</span>
                                                <span className="text-date mr-15">{store.established}</span>
                                                <br />
                                                <span className="mr-15 color-green-600">Address</span>
                                                <span className="mr-15">{store.address}</span>
                                            </div>
                                            <div className="link-read-more">
                                                <Link to={store.link} className="color-purple">READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <Link to="#" className="btn btn-deep-red icon-arrow-right-white">Discover other stores</Link>
                        </div>
                    </div>
                </div>
                <Posts bigTitle="From Our Blog" description="Our fashion articles" postsData={postsData} />
                <Newsletter newsletterStyle="style-4" />
            </Layout>
        </>
    )
}

export default Index7;
