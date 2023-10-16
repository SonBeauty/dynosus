import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ThumbSlider from "../../components/slider/Thumb";
import { data } from "../../util/shopData";
import Layout from "../../components/layout/Layout";
import PlayStore from "../../components/elements/PlayStore";

const SingleVendor: React.FC = () => {
    interface Product {
        id: number;
        img: string;
        brand: string;
        title: string;
        rating: number;
        oldPrice: number;
        newPrice: number;
    }

    const [singleStore, setSingleStore] = useState<Product>();
    const { id } = useParams();

    useEffect(() => {
        setSingleStore(data.find((item) => item?.id.toString() == id));
    }, [id]);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
    };

    const [quantity, setQuanlity] = useState(1);
    return (
        <>
            <Layout
                headTitle="Blog"
                pageTitle="Our online News"
                pageTitleSub="The fancy moon going in little artist painting"
                parent="Blog"
                child="Blog Details"
                pageClass="front">
                <section className="section-box">
                    <div className="banner-hero nav-breadcrums bg-gray-100">
                        <div className="container">
                            <div className="breadcrumb">
                                <ul>
                                    <li className="home">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="page-shop-grid-1.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="page-shop-grid-2.html">Women</a>
                                    </li>
                                    <li>
                                        <a href="#">Pajama</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-70" />
                {singleStore && (
                    <>
                        <section className="section-box">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <ThumbSlider />
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="product-info">
                                            <div className="d-flex">
                                                <div className="box-category-product">
                                                    <span className="tag-category">
                                                        {singleStore?.brand}
                                                    </span>
                                                </div>
                                                <div className="box-rate-product">
                                                    <div className="box-rating">
                                                        <span>
                                                            <img
                                                                src="/assets/imgs/page/homepage5/star-active.svg"
                                                                alt="Moirai"
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                src="/assets/imgs/page/homepage5/star-active.svg"
                                                                alt="Moirai"
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                src="/assets/imgs/page/homepage5/star-active.svg"
                                                                alt="Moirai"
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                src="/assets/imgs/page/homepage5/star-active.svg"
                                                                alt="Moirai"
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                src="/assets/imgs/page/homepage5/star.svg"
                                                                alt="Moirai"
                                                            />
                                                        </span>
                                                    </div>
                                                    <span className="text-semibold">
                                                        <span>(</span>
                                                        <span>{singleStore?.rating}</span>
                                                        <span>&nbsp;rates )</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <h1 className="text-heading-4 mt-30">
                                                Barocco Silk Pajama Slip
                                            </h1>
                                            <div className="box-price">
                                                <span className="price">$318.00</span>
                                                <span className="price-old">$420.00</span>
                                                <span className="text-stock">(In stock)</span>
                                            </div>
                                            <p className="text-body-text color-gray-500 single-product">
                                                <ul>
                                                    In stock
                                                    <li>Barocco print</li> <li>Sleeveless</li>{" "}
                                                    <li>Shoulder straps</li>{" "}
                                                    <li>Outer composition: 100% Silk</li>
                                                </ul>
                                            </p>
                                            <div className="box-countdown mt-40">
                                                <div className="box-processbar">
                                                    <div className="text-hurry">
                                                        Hurry up!
                                                        <br />
                                                        Sales ends soon!
                                                    </div>
                                                    <div className="process-bar-line">
                                                        <div className="process-bar-inner" />
                                                    </div>
                                                    <span className="text-number-sold">63/158 sold</span>
                                                </div>
                                                <div></div>
                                                <div className="box-count">
                                                    <div
                                                        className="deals-countdown pl-5"
                                                        data-countdown="2022/05/25 00:00:00"
                                                    />
                                                </div>
                                            </div>
                                            <div className="detail-extralink mb-30">
                                                <div className="detail-qty border radius">
                                                    <a
                                                        className="qty-down"
                                                        onClick={() => {
                                                            setQuanlity(quantity + 1);
                                                        }}>
                                                        <i className="fi-rs-angle-small-down" />
                                                    </a>
                                                    <input
                                                        className="qty-val"
                                                        name="quantity"
                                                        defaultValue={quantity}
                                                        min={1}
                                                    />
                                                    <a href="#" className="qty-up">
                                                        <i className="fi-rs-angle-small-up" />
                                                    </a>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button
                                                        className="button button-add-to-cart"
                                                        type="submit">
                                                        <img
                                                            src="/assets/imgs/page/single-product/cart.svg"
                                                            alt="Moirai"
                                                        />{" "}
                                                        Add to cart
                                                    </button>
                                                    <a
                                                        href="#"
                                                        className="action-btn hover-up"
                                                        aria-label="Add To Wishlist">
                                                        <img
                                                            src="/assets/imgs/page/single-product/heart.svg"
                                                            alt="Moirai"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="action-btn hover-up"
                                                        aria-label="Compare">
                                                        <img
                                                            src="/assets/imgs/page/single-product/align.svg"
                                                            alt="Moirai"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="box-categories-link">
                                                <div className="item-cat">
                                                    <span className="text-body-text color-gray-900">
                                                        Vendor:
                                                    </span>
                                                    <a
                                                        href="#"
                                                        className="text-body-text color-gray-500 ml-5">
                                                        MoiraiMart
                                                    </a>
                                                </div>
                                                <div className="item-cat">
                                                    <span className="text-body-text color-gray-900">
                                                        SKU:
                                                    </span>
                                                    <a
                                                        href="#"
                                                        className="text-body-text color-gray-500 ml-5">
                                                        ABJK767C878
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="nav mt-50" role="tablist">
                                                    <li onClick={() => handleOnClick(1)}>
                                                        <a
                                                            className={
                                                                activeIndex === 1
                                                                    ? "btn btn-default btn-tab choice"
                                                                    : "btn btn-default btn-tab"
                                                            }>
                                                            Description
                                                        </a>
                                                    </li>
                                                    <li onClick={() => handleOnClick(2)}>
                                                        <a
                                                            className={
                                                                activeIndex === 2
                                                                    ? "btn btn-default btn-tab choice"
                                                                    : "btn btn-default btn-tab"
                                                            }>
                                                            Additional info
                                                        </a>
                                                    </li>
                                                    <li onClick={() => handleOnClick(4)}>
                                                        <a
                                                            className={
                                                                activeIndex === 4
                                                                    ? "btn btn-default btn-tab choice"
                                                                    : "btn btn-default btn-tab"
                                                            }>
                                                            Reviews (3)
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content mt-50">
                                                    <div
                                                        className={
                                                            activeIndex === 1
                                                                ? "tab-pane fade active show"
                                                                : "tab-pane fade"
                                                        }>
                                                        <p className="text-body-text color-gray-500">
                                                            Crafted from silk twill, this pajama slip dress
                                                            features an all-over Barocco print.
                                                            <br /> Product Details
                                                            <ul>
                                                                <li>Barocco print</li>
                                                                <li>Sleeveless</li>
                                                                <li>Shoulder straps</li>
                                                                <li>Outer composition: 100% Silk</li>
                                                                <li>Do not wash</li>
                                                                <li>Do not bleach</li>
                                                                <li>Do not tumble dry</li>
                                                                <li>Cool iron</li>
                                                                <li>Delicate dry clean</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={
                                                            activeIndex === 2
                                                                ? "tab-pane fade active show"
                                                                : "tab-pane fade"
                                                        }>
                                                        <table className="table">
                                                            <tbody>
                                                                <tr className="stand-up">
                                                                    <th>Height</th>
                                                                    <td>
                                                                        <p>149 - 156 cm</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-wo-wheels">
                                                                    <th>Bust</th>
                                                                    <td>
                                                                        <p>74 - 80 cm</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-w-wheels">
                                                                    <th>Weight</th>
                                                                    <td>
                                                                        <p>57 - 63 cm</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="door-pass-through">
                                                                    <th>Hip</th>
                                                                    <td>
                                                                        <p>82 - 88 cm</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div
                                                        className={
                                                            activeIndex === 3
                                                                ? "tab-pane fade active show"
                                                                : "tab-pane fade"
                                                        }>
                                                        <div className="vendor-logo d-flex mb-30">
                                                            <img
                                                                src="/assets/imgs/page/single-product/vendor-18.svg"
                                                                alt="image"
                                                            />
                                                            <div className="vendor-name ml-15">
                                                                <h6>
                                                                    <a href="vendor-details-2.html">
                                                                        Noodles Co.
                                                                    </a>
                                                                </h6>
                                                                <div className="product-rate-cover text-end">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div
                                                                            className="product-rating"
                                                                            style={{ width: "90%" }}
                                                                        />
                                                                    </div>
                                                                    <span className="font-small ml-5 text-muted">
                                                                        (32 reviews)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="contact-infor mb-50">
                                                            <li>
                                                                <img
                                                                    src="/assets/imgs/page/single-product/icon-location.svg"
                                                                    alt="image"
                                                                />
                                                                <strong>Address: </strong>
                                                                <span>
                                                                    5171 W Campbell Ave undefined Kent, Utah 53127
                                                                    United States
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="/assets/imgs/page/single-product/icon-contact.svg"
                                                                    alt="image"
                                                                />
                                                                <strong>Contact Seller:</strong>
                                                                <span>(+91) - 540-025-553</span>
                                                            </li>
                                                        </ul>
                                                        <div className="d-flex mb-55">
                                                            <div className="mr-30">
                                                                <p className="text-brand font-xs">Rating</p>
                                                                <h4 className="mb-0">92%</h4>
                                                            </div>
                                                            <div className="mr-30">
                                                                <p className="text-brand font-xs">
                                                                    Ship on time
                                                                </p>
                                                                <h4 className="mb-0">100%</h4>
                                                            </div>
                                                            <div>
                                                                <p className="text-brand font-xs">
                                                                    Chat response
                                                                </p>
                                                                <h4 className="mb-0">89%</h4>
                                                            </div>
                                                        </div>
                                                        <p className="text-body-text color-gray-500">
                                                            Noodles &amp; Company is an American fast-casual
                                                            restaurant that offers international and American
                                                            noodle dishes and pasta in addition to soups and
                                                            salads. Noodles &amp; Company was founded in 1995
                                                            by Aaron Kennedy and is headquartered in
                                                            Broomfield, Colorado. The company went public in
                                                            2013 and recorded a $457 million revenue in
                                                            2017.In late 2018, there were 460 Noodles &amp;
                                                            Company locations across 29 states and Washington,
                                                            D.C.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={
                                                            activeIndex === 4
                                                                ? "tab-pane fade active show"
                                                                : "tab-pane fade"
                                                        }>
                                                        <div className="comments-area">
                                                            <div className="row">
                                                                <div className="col-lg-8">
                                                                    <h4 className="mb-30 title-question">
                                                                        Customer questions &amp; answers
                                                                    </h4>
                                                                    <div className="comment-list">
                                                                        <div className="single-comment justify-content-between d-flex mb-30">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center">
                                                                                    <img
                                                                                        src="/assets/imgs/page/single-product/author-2.png"
                                                                                        alt="image"
                                                                                    />
                                                                                    <a
                                                                                        href="#"
                                                                                        className="font-heading text-brand">
                                                                                        Sienna
                                                                                    </a>
                                                                                </div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center">
                                                                                            <span className="font-xs text-muted">
                                                                                                December 4, 2022 at 3:12 pm
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div
                                                                                                className="product-rating"
                                                                                                style={{ width: "100%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">
                                                                                        Lorem ipsum dolor sit amet,
                                                                                        consectetur adipisicing elit.
                                                                                        Delectus, suscipit exercitationem
                                                                                        accusantium obcaecati quos voluptate
                                                                                        nesciunt facilis itaque modi commodi
                                                                                        dignissimos sequi repudiandae minus
                                                                                        ab deleniti totam officia id
                                                                                        incidunt?
                                                                                        <a href="#" className="reply">
                                                                                            Reply
                                                                                        </a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-comment justify-content-between d-flex mb-30">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center">
                                                                                    <img
                                                                                        src="/assets/imgs/page/single-product/author-3.png"
                                                                                        alt="image"
                                                                                    />
                                                                                    <a
                                                                                        href="#"
                                                                                        className="font-heading text-brand">
                                                                                        Brenna
                                                                                    </a>
                                                                                </div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center">
                                                                                            <span className="font-xs text-muted">
                                                                                                December 4, 2022 at 3:12 pm
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div
                                                                                                className="product-rating"
                                                                                                style={{ width: "80%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">
                                                                                        Lorem ipsum dolor sit amet,
                                                                                        consectetur adipisicing elit.
                                                                                        Delectus, suscipit exercitationem
                                                                                        accusantium obcaecati quos voluptate
                                                                                        nesciunt facilis itaque modi commodi
                                                                                        dignissimos sequi repudiandae minus
                                                                                        ab deleniti totam officia id
                                                                                        incidunt?
                                                                                        <a href="#" className="reply">
                                                                                            Reply
                                                                                        </a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-comment justify-content-between d-flex">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center">
                                                                                    <img
                                                                                        src="/assets/imgs/page/single-product/author-4.png"
                                                                                        alt="image"
                                                                                    />
                                                                                    <a
                                                                                        href="#"
                                                                                        className="font-heading text-brand">
                                                                                        Gemma
                                                                                    </a>
                                                                                </div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center">
                                                                                            <span className="font-xs text-muted">
                                                                                                December 4, 2022 at 3:12 pm
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div
                                                                                                className="product-rating"
                                                                                                style={{ width: "80%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">
                                                                                        Lorem ipsum dolor sit amet,
                                                                                        consectetur adipisicing elit.
                                                                                        Delectus, suscipit exercitationem
                                                                                        accusantium obcaecati quos voluptate
                                                                                        nesciunt facilis itaque modi commodi
                                                                                        dignissimos sequi repudiandae minus
                                                                                        ab deleniti totam officia id
                                                                                        incidunt?
                                                                                        <a href="#" className="reply">
                                                                                            Reply
                                                                                        </a>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <h4 className="mb-30 title-question">
                                                                        Customer reviews
                                                                    </h4>
                                                                    <div className="d-flex mb-30">
                                                                        <div className="product-rate d-inline-block mr-15">
                                                                            <div
                                                                                className="product-rating"
                                                                                style={{ width: "90%" }}
                                                                            />
                                                                        </div>
                                                                        <h6>4.8 out of 5</h6>
                                                                    </div>
                                                                    <div className="progress">
                                                                        <span>5 star</span>
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: "50%" }}
                                                                            aria-valuenow={50}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}>
                                                                            50%
                                                                        </div>
                                                                    </div>
                                                                    <div className="progress">
                                                                        <span>4 star</span>
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: "25%" }}
                                                                            aria-valuenow={25}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}>
                                                                            25%
                                                                        </div>
                                                                    </div>
                                                                    <div className="progress">
                                                                        <span>3 star</span>
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: "45%" }}
                                                                            aria-valuenow={45}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}>
                                                                            45%
                                                                        </div>
                                                                    </div>
                                                                    <div className="progress">
                                                                        <span>2 star</span>
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: "65%" }}
                                                                            aria-valuenow={65}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}>
                                                                            65%
                                                                        </div>
                                                                    </div>
                                                                    <div className="progress mb-30">
                                                                        <span>1 star</span>
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: "85%" }}
                                                                            aria-valuenow={85}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}>
                                                                            85%
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className="font-xs text-muted">
                                                                        How are ratings calculated?
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
                <section className="section-box mt-90">
                    <div className="container">
                        <h2 className="text-heading-1 color-gray-900">You may also like</h2>
                        <p className="text-body-lead-large color-gray-600 mt-20">
                            Take it to your cart
                        </p>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-21.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">
                                                    Chanel Belts Metal Gold & Black
                                                </h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-21.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">
                                                    Chanel Belts Metal Gold & Black
                                                </h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-21.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">
                                                    Chanel Belts Metal Gold & Black
                                                </h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-22.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">Eternal N°5 Necklace</h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-20.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">Large Dior Book Tote</h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <a href="#">
                                        <a>
                                            <div className="product-image">
                                                <img
                                                    src="/assets/imgs/page/shop1/img-11.png"
                                                    alt="agon"
                                                />
                                            </div>
                                            <div className="product-info">
                                                <h3 className="title-product">
                                                    Clover Flip Floral Skirt
                                                </h3>
                                                <span className="price-regular mr-15">$29.8</span>
                                                <span className="price-regular price-line">$29.8</span>
                                            </div>
                                        </a>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-60">
                    <div className="container">
                        <div className="banner-ads">
                            <div className="box-banner-ads">
                                <h3 className="text-head-ads mb-15"></h3>
                                <p className="desc-ads">
                                    <br className="d-lg-block d-none" />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <PlayStore />
            </Layout>
        </>
    );
};

export default SingleVendor;
