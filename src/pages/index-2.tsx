import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { PricingData2 } from "../Data/pricingData";
import { data } from "../Data/ShopData";
import { PriceTable } from "../components/elements/PriceTable";
import ProductCategory from "../components/elements/ProductCategory";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import IconComponent from "../components/elements/IconComponent";
import BannerComponent from "../components/elements/BannerComponent";
import { blogsData1 } from "../Data/Blog";
import { Blogs } from "../components/elements/Blogs";
import { items } from "../Data/IconData";
import Style from '../css/Home2.module.css'

function Index2(): JSX.Element {
    const [isActive, setIsActive] = useState(1)

    return (
        <>
            <Layout>
                <section className={`section-box ${Style.bannerHP2}`}>
                    <div className="container mt-80">
                        <p className={Style.textHeader}>Unveiling the
                            <p className={Style.textColor}>latest furniture</p>
                            trend in global
                        </p>
                        <p className="text-body-lead-large mb-30 mt-30">
                            The lastest trend is waiting for you
                        </p>
                        <Link
                            to="/#"
                            className="btn btn-black icon-arrow-right-white">
                            View more
                        </Link>
                    </div>
                </section>
                <div className="section-box overflow-hidden mt-90">
                    <div className="container">
                        <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                            SHOP BY COLLECTION
                        </h2>
                        <IconComponent items={items} />
                        <div className="row mt-80">
                            <BannerComponent />
                        </div>
                    </div>
                </div>
                <div className="container mt-60 mb-100">
                    <div className="row text-center justify-content-center">
                        <div className={`${Style.textContain} col-lg-3 col-md-4 `} onClick={() => setIsActive(1)}>LATEST <div className={` ${isActive === 1 ? Style.active : ''}`}></div></div>
                        <div className={`${Style.textContain} col-lg-3 col-md-4`} onClick={() => setIsActive(2)}>BEST SELLING <div className={` ${isActive === 2 ? Style.active : ''}`}></div></div>
                        <div className={`${Style.textContain} col-lg-3 col-md-4 `} onClick={() => setIsActive(3)}>SPECIAL <div className={` ${isActive === 3 ? Style.active : ''}`}></div></div>
                    </div>
                    <ProductCategory data={data} />
                </div>
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
                                        At our furniture shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience. Here are a few factors that set us apart
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
                    <Blogs title="Latest News" description="From Our blog and Event fanpage" blogsData={blogsData1} />
                </section>
                <section className="section-box mt-100 section-blue mb-100">
                    <div className="container mt-60">
                        <h3 className="text-heading-1 text-center mb-10">
                            Choose The Best Plan <br className="d-lg-block d-none" />
                            That&apos;s For You
                        </h3>
                    </div>
                    <PriceTable priceData={PricingData2} priceItemStyle="price-style-4" />
                </section>
            </Layout>
        </>
    );
}

export default Index2;
