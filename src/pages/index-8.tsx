import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import { productData } from "../util/productData";
import { searchKeyword } from "../util/PopularSearchKeyword";
import Newsletter from "../components/elements/Newsletter";

interface ProductProp {
    name: string;
    image: string;
    rate: number;
    address: string;
    calendar: string;
    oldCost: number;
    newCost: number;
}

function Index8(): JSX.Element {
    return (
        <>
            <Layout>
                <div className="section-box">
                    <div className="banner-hero banner-homepage8">
                        <div className="container mt-50">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 bg-6 color-green-900">Fashion as unique as you are</span>
                                    <h1 className="text-display-4 font-bold mt-30">Unveiling the <span className="color-deep-orange">latest <br /> fashion</span> trend in global</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">The latest trend is waiting for you</p>
                                    <div className="mt-40 box-mw-610">
                                        <div className="form-newsletter-2">
                                            <form><input className="input-newsletter" placeholder="Enter key word" /><button className="btn btn-newsletter icon-arrow-right-white" type="submit">Search</button></form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs d-flex">
                                        <div className="rounded-img shape-1">
                                            <img width={158} height={373} alt="Moirai" src="/assets/imgs/page/homepage8/banner1.png" />
                                        </div>
                                        <div className="rounded-img mt-20 shape-1-2">
                                            <img width={158} height={373} alt="Moirai" src="/assets/imgs/page/homepage8/banner2.png" />
                                        </div>
                                        <div className="rounded-img shape-1">
                                            <img width={158} height={373} alt="Moirai" src="/assets/imgs/page/homepage8/banner3.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-search col-lg-12 mt-100">
                                    <h2 className="text-heading-4">Popular Fashion Brands Search</h2>
                                    <ul className="list-search-popular">
                                        {searchKeyword && searchKeyword.map((key, i) =>
                                            <li key={i}>
                                                <Link to={key.link} className="btn btn-border">{key.name}</Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="tag-1 color-orange-900 bg-2">This Summer</span>
                                <h2 className="text-heading-1 color-gray-900 mt-30">Fashion Week</h2>
                                <p className="text-body-lead-large color-gray-600 font-20 mt-20">
                                    The best-selling fashion shows are dazzling events where exquisite and unique collections are unveiled to the world.
                                    These shows are highly anticipated by fashion enthusiasts, industry professionals, and trendsetters alike.</p>
                            </div>
                        </div>

                    </div>
                    <div className="container mt-60">
                        <div className="row">
                            {productData && productData.map((item: ProductProp, i: number) =>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 category-product" key={i}>
                                    <div className="product-item-2 product-item-3 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <Link to="#">
                                            <div className="product-image"><img width={365} height={246} src={`/assets/imgs/page/homepage8/${item.image}.png`} alt="Moirai" /></div>
                                        </Link>
                                        <div className="product-info">
                                            <div className="rating">
                                                <div className="box-rating">
                                                    <span><img width={12} height={12} alt="Moirai" src="/assets/imgs/page/homepage5/star-active.svg" /></span>
                                                    <span><img width={12} height={12} alt="Moirai" src="/assets/imgs/page/homepage5/star-active.svg" /></span>
                                                    <span><img width={12} height={12} alt="Moirai" src="/assets/imgs/page/homepage5/star-active.svg" /></span>
                                                    <span><img width={12} height={12} alt="Moirai" src="/assets/imgs/page/homepage5/star-active.svg" /></span>
                                                    <span><img width={12} height={12} alt="Moirai" src="/assets/imgs/page/homepage5/star.svg" /></span>
                                                </div>
                                                <Link to="#" className="text-semibold">({item.rate} rates)</Link>
                                            </div>
                                            <Link to="#">
                                                <h3 className="text-body-lead color-gray-900">{item.name}</h3>
                                            </Link>
                                            <div className="d-flex mt-20">
                                                <div className="box-prices"><span className="location-icon">{item.address}</span></div>
                                                <div className="box-prices"><span className="calendar-icon">{item.calendar}</span></div>
                                            </div>
                                            <div className="d-flex mt-30">
                                                <div className="box-prices"><span className="price-regular mr-5">${item.newCost}</span><span className="price-regular price-line">${item.oldCost}</span></div>
                                                <div className="button-add text-end">
                                                    <Link to="#" className="btn btn-explorer">Explore</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="text-center mt-30">
                            <Link to="#" className="btn btn-black icon-arrow-right-white">Load more destinations</Link>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-70 mb-30">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do img-center">
                                <div className="inner-image"><img width={618} height={590} src="/assets/imgs/page/homepage8/img-2.png" alt="Moirai" /></div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do-2">
                                <h3 className="text-heading-1 mt-30">Best Seller</h3>
                                <p className="text-body-lead-large color-gray-600 mt-20">Welcome to our Best Sellers collection, where you can discover our most sought-after fashion pieces that are loved by our customers.</p>
                                <div className="list-icons-round mt-40">
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img width={25} height={24} alt="Moirai" src="/assets/imgs/page/homepage8/icon-trend.svg" /></span>
                                        <h4 className="text-heading-5 color-green-900">Stay on Trend</h4>
                                        <p className="text-body-text color-gray-600 mt-5">Elevate your fashion game with our curated collection of the latest trends. From bold prints to vibrant colors, we have the pieces that will keep you looking stylish and up-to-date.</p>
                                    </div>
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img width={25} height={24} alt="Moirai" src="/assets/imgs/page/homepage8/icon-like.svg" /></span>
                                        <h4 className="text-heading-5 color-green-900">Customer Favorites</h4>
                                        <p className="text-body-text color-gray-600 mt-5">Discover our most loved fashion pieces, handpicked by our customers. These popular items combine fashion-forward designs with comfort and versatility, ensuring you always look and feel your best.</p>
                                    </div>
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".5s"><span className="icon-left"><img width={25} height={24} alt="Moirai" src="/assets/imgs/page/homepage8/icon-lock.svg" /></span>
                                        <h4 className="text-heading-5 color-green-900">Uncompromising Quality</h4>
                                        <p className="text-body-text color-gray-600 mt-5"> Experience fashion at its finest with our uncompromising commitment to quality. Each garment is meticulously crafted using premium materials and impeccable attention to detail, ensuring durability and longevity.</p>
                                    </div>
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".7s"><span className="icon-left"><img width={25} height={24} alt="Moirai" src="/assets/imgs/page/homepage8/icon-recycle.svg" /></span>
                                        <h4 className="text-heading-5 color-green-900">Versatile Style</h4>
                                        <p className="text-body-text color-gray-600 mt-5">Embrace the versatility of our fashion collection, designed to effortlessly adapt to any occasion. Whether you&apos;re dressing up for a formal event or keeping it casual for a weekend outing, our range of styles offers endless possibilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box bg-7 fit mt-80">
                    <div className="container mt-60 mb-20">
                        <div className="row relative">
                            <div className="col-lg-6 col-sm-12 block-we-do-2">
                                <h3 className="text-heading-1 mt-30">Application Flatform</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    An application platform is a software framework or infrastructure that provides a foundation for developing and running applications.
                                    It typically includes tools, libraries, and services that simplify the development process, enable application deployment, and facilitate scalability and performance optimization.
                                </p>
                                <div className="list-icons mt-40">
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img width={64} height={64} alt="Moirai" src="/assets/imgs/page/homepage8/icon-cross-platform.svg" /></span>
                                        <h4 className="text-heading-4">Cross-Platform</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    </div>
                                    <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img width={64} height={64} alt="Moirai" src="/assets/imgs/page/homepage8/icon-extremely.svg" /></span>
                                        <h4 className="text-heading-4">Extremely Flexible</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12 block-img-we-do img-bottom banner8-img">
                                <div className="inner-image"><img width={860} height={800} src="/assets/imgs/page/homepage8/img.png" alt="Moirai" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-70">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Customers Feedback</h3>
                                <p className="text-body-lead-large color-gray-600">What are popular brand talk about us?</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-60 mobile-feedback">
                        <TestimonialSlider />
                    </div>
                </div>
                <div className="section-box mt-70 overflow-visible">
                    <div className="container mt-60">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/dg.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/givenchy.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/prada.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/ysl.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/versace.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link to="#" className="item-logo box-hover-shadow hover-up"><img width={166} height={166} alt="Moirai" className="w-100" src="/assets/imgs/slider/logo/burberry.svg" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </Layout>
        </>
    )
}

export default Index8;