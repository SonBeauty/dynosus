import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Newsletter from "../components/elements/Newsletter";
import CustomerFeedback from "../components/elements/CustomerFeedback";
import { PricingData1 } from "../Data/pricingData";
import { PriceTable } from "../components/elements/PriceTable";


function Index2(): JSX.Element {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-2 overflow-hidden">
                            <div className="container">
                                <div className="row mb-50">
                                    <div className="col-lg-7 mt-50">
                                        <span className="tag-1 bg-color-3 color-white">Moirai</span>
                                        <h1 className="text-display-3 mt-30">
                                            Unveiling the{" "}
                                            <span className="color-gray-blue">latest fashion</span>{" "}
                                            trend in global
                                        </h1>
                                        <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                            The lastest trend is waiting for you
                                        </p>
                                        <div className="mt-40">
                                            <Link
                                                to="/#"
                                                className="btn btn-black shape-square icon-arrow-right-white">
                                                Get Start
                                            </Link>
                                            <Link
                                                to="/#"
                                                className="btn btn-link icon-triangle-2 color-gray-900 ml-40">
                                                How it works
                                            </Link>
                                        </div>
                                        <div className="mt-50">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">5000</span>+
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Product
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">756</span>+
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Happy Client
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">100</span>%
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Client Satisfaction
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <div className="banner-imgs">
                                            <div className="block-1 shape-2">
                                                <img
                                                    src="/assets/imgs/page/homepage2/balance.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <div className="block-2 shape-3">
                                                <img
                                                    src="/assets/imgs/page/homepage2/payment.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <div className="img-responsive shape-1">
                                                <img
                                                    alt="Moirai"
                                                    src="/assets/imgs/page/homepage2/banner.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="section-box overflow-visible mt-90">
                        <div className="container">
                            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                                Trusted by the world’s fashion companies
                            </h2>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/dg.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/givenchy.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/prada.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/ysl.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/versace.svg"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                    <Link to="/#" className="item-logo box-hover-shadow hover-up">
                                        <img
                                            alt="Moirai"
                                            className="w-100"
                                            src="/assets/imgs/slider/logo/burberry.svg"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-box mt-100">
                        <div className="container mt-60">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 block-img-we-do">
                                    <div className="inner-image">
                                        <img
                                            className="bdrd-16 img-responsive"
                                            src="/assets/imgs/page/homepage2/img-2.png"
                                            alt="Moirai"
                                        />
                                        <div className="block-chart rounded-4 overflow-hidden">
                                            <img
                                                src="/assets/imgs/page/homepage2/chart.png"
                                                alt="Moirai"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do-2">
                                    <span className="tag-1 bg-6 color-green-900">Overview</span>
                                    <h3 className="text-heading-1 mt-30">About Us</h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        We facilitate the creation of strategy and design
                                    </p>
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-company.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <h4 className="text-heading-4">About the Company</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Our company is a leading fashion enterprise dedicated to
                                                providing exceptional clothing and accessories.
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-history.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <h4 className="text-heading-4">History of Information</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Our company has a rich and inspiring history. It all
                                                started [insert specific information about the
                                                company&apos;s origin, such as the year and
                                                circumstances of establishment].
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-mission.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <h4 className="text-heading-4">Company Mission</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                At our company, our mission is to empower individuals to
                                                express their unique personalities through fashion. We
                                                believe that clothing goes beyond mere functionality—it
                                                is a powerful form of self-expression.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container mt-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Application Flatform
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        An application platform is a software framework or
                                        infrastructure that provides a foundation for developing and
                                        running applications. It typically includes tools,
                                        libraries, and services that simplify the development
                                        process, enable application deployment, and facilitate
                                        scalability and performance optimization.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-60 mb-lg-100">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div
                                        className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
                                        data-wow-delay=".1s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Cross-Platform
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only landings. Get
                                            essential inner pages using our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-1">
                                            <img
                                                src="/assets/imgs/page/homepage2/temp-web-1.png"
                                                alt="Moirai"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div
                                        className="bg-6 box-square hover-up wow animate__animated animate__fadeIn"
                                        data-wow-delay=".2s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Extremely Flexible
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only landings. Get
                                            essential inner pages using our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-2">
                                            <img
                                                src="/assets/imgs/page/homepage2/temp-web-2.png"
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
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        What Makes Us Outstanding
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        At our clothing shop, we strive to stand out from the crowd
                                        by offering a unique and exceptional shopping experience.
                                        Here are a few factors that set us apart.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-60">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons">
                                        <div className="item-icon">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-quality.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <div className="career-category">
                                                <h4 className="text-heading-4">
                                                    1. Unparalleled Quality
                                                </h4>
                                                <p className="text-body-text color-gray-600 mt-15">
                                                    We meticulously curate our collections to ensure that
                                                    every garment we offer meets the highest standards of
                                                    quality.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons">
                                        <div className="item-icon">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-trendsetting.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <div className="career-category">
                                                <h4 className="text-heading-4">2. Trendsetting Style</h4>
                                                <p className="text-body-text color-gray-600 mt-15">
                                                    Our team of experienced fashion experts keeps a pulse on
                                                    the latest trends and emerging styles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons">
                                        <div className="item-icon">
                                            <span className="icon-left">
                                                <img
                                                    src="/assets/imgs/page/homepage2/icon-community.svg"
                                                    alt="Moirai"
                                                />
                                            </span>
                                            <div className="career-category">
                                                <h4 className="text-heading-4">
                                                    3. Community Engagement
                                                </h4>
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
                    <section className="section-box mt-100">
                        <div className="container mt-60">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <span className="tag-1 bg-9 color-green-900">For You</span>
                                    <h3 className="text-heading-1 mt-30">Best Seller</h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        Welcome to our Best Sellers collection, where you can
                                        discover our most sought-after fashion pieces that are loved
                                        by our customers.
                                    </p>
                                    <div className="line-bd-green mt-50" />
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Stay on-trend
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Explore our Best Sellers collection for the latest
                                                fashion trends that are making waves in the industry.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Customer Favorites
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Discover our most-loved fashion pieces, as recommended
                                                by our valued customers.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Uncompromising Quality
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Shop from our Best Sellers collection, where fashion
                                                meets exceptional craftsmanship and high-quality
                                                materials..
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Versatile Style
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Find versatile fashion pieces that effortlessly elevate
                                                your wardrobe for any occasion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do">
                                    <div className="inner-image">
                                        <img
                                            className="bdrd-16 img-responsive"
                                            src="/assets/imgs/page/homepage2/img-best-seller.png"
                                            alt="Moirai"
                                        />
                                        <div className="block-image-bottom">
                                            <img
                                                className="bdrd-16 img-responsive"
                                                src="/assets/imgs/page/homepage2/img-best-seller-2.png"
                                                alt="Moirai"
                                            />
                                        </div>
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
                    <Newsletter newsletterStyle="style-1" />
                </div>
            </Layout>
        </>
    );
}

export default Index2;
