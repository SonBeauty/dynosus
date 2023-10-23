import { Link } from "react-router-dom";
import React, { useState } from "react";
import Style from "../css/Home1.module.css";
import { data } from "../Data/ShopData";
import { PricingData1 } from "../Data/pricingData";
import Layout from "../components/layout/Layout";
import Category from "../components/elements/Category";
import CustomerFeedback from "../components/elements/CustomerFeedback";
import Button from "../components/elements/Button/Button";
import InconTrueSVG from "../components/svg/InconTrueSVG";
import ProductCategory from "../components/elements/ProductCategory";
import { PriceTable } from "../components/elements/PriceTable";

interface Product {
  id: number;
  img: string;
  brand: string;
  title: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  type: string
}

function Home(): JSX.Element {
  const [type, setType] = useState<Product[]>(data)
  const [activeButton, setActiveButton] = useState("ALL");
  const filterProduct = (typeFilter: string) => {
    const updatedList = data.filter((item) => item?.type === typeFilter);
    setType(updatedList);
  };

  return (
    <Layout>
      <section className={`${Style.bannerHp} w-full`}>
        <div className="text-center">
          <div className="container">
            <div className="row">
              <div className={`col-lg-12 ${Style.headerContent}`}>
                <h1 className="text-display-2 text-white mt-30">
                  Creative Home Simpify Your Furniture
                </h1>
                <p className={`text-body-lead-large color-gray-500 ${Style.headerBtn} text-white`}>
                  The lastest trend is waiting for you
                </p>
                <div className={Style.headerBtn}>
                  <Link
                    to="/#"
                    className="btn btn-black icon-arrow-right-white">
                    Get Started
                  </Link>
                  <Link
                    to="/#"
                    className="btn btn-link icon-arrow-right-white color-gray-900 text-heading-6 text-white">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`container ${Style.bg1} text-white text-center py-32`}>
        <div className={`text-heading-3 ${Style.borderRight} ${Style.px70}`}>
          5 <br /> Year <br /> experience
        </div>
        <div className={`text-heading-3 ${Style.borderRight} ${Style.px70}`}>
          4 <br /> Opened in <br /> the country
        </div>
        <div className={`text-heading-3 ${Style.borderRight} ${Style.px70}`}>
          10k+ <br /> Furniture <br /> sold{" "}
        </div>
        <div className={` text-heading-3 ${Style.px70}`}>
          100k+ <br /> Variant <br /> Furniture
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
                {" "}Feel trendy. Feel authentic.
              </p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>
        <div className="container mt-60 mb-100">
          <div className=" mt-60">
            <div className="d-flex filter-element">
              <button onClick={() => { setType(data); setActiveButton('ALL') }} className={activeButton === "ALL" ? `btn ${Style.active} ` : "btn"}>ALL</button>
              <button onClick={() => { filterProduct('sofa'); setActiveButton('sofa') }} className={activeButton === "sofa" ? `btn ${Style.active}` : 'btn'}>SOFA</button>
              <button onClick={() => { filterProduct('bed'); setActiveButton('bed') }} className={activeButton === "bed" ? `btn ${Style.active}` : "btn"}>BED</button>
              <button onClick={() => { filterProduct('chair'); setActiveButton('chair') }} className={activeButton === "chair" ? `btn ${Style.active}` : "btn"}>CHAIR</button>
              <button onClick={() => { filterProduct('wardrobe'); setActiveButton('wardrobe') }} className={activeButton === "wardrobe" ? `btn ${Style.active}` : "btn"}>WARDROBE</button>
            </div>
            <ProductCategory data={type} />
          </div>
        </div>
      </section>
      <section className={`${Style.furnitureBanner} mb-100`}>
        <div className="text-white container pt-50 pb-200">
          <div className="col-lg-6 col-md-8">
            <h2 className="text-white">
              Design your dream home with the perfect furniture{" "}
            </h2>
            <p className={`pt-30 col-lg-8 ${Style.textBody} text-white mb-30`}>
              Delivering the highest quality items is our commitment, and
              ensuring exceptional customer experiences is always our top
              priority.
            </p>
          </div>
          <Button
            content="Explore All Product"
            color="text-white"
            border="1px solid #fff"
            borderRadius="30px"
          />
        </div>
      </section>
      <div className="mb-100">
        <Category />
      </div>
      <section className={`${Style.dFlex} container`}>
        <div className="col-lg-6 col-md-12">
          <img className={`${Style.aesthetic}`} src="./assets/imgs/page/homepage1/imgAesthetic.png" alt="" />
        </div>
        <div className={`container mt-50 ml-10 col-lg-6 col-md-12`}>
          <div className={`${Style.textTheme} mb-30`}>
            We Create Your Home More Aesthetic
          </div>
          <p className={Style.textBody}>
            Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.
          </p>
          <div className="d-flex mt-30">
            <div>
              <InconTrueSVG />
            </div>
            <div className="ml-40">
              <p className={Style.textTitle}>
                Valuation Services
              </p>
              <p className={Style.textBody}>
                Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.
              </p>
            </div>
          </div>
          <div className="d-flex mt-30">
            <div>
              <InconTrueSVG />
            </div>
            <div className="ml-40">
              <p className={Style.textTitle}>
                Development Furniture
              </p>
              <p className={Style.textBody}>
                Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CustomerFeedback />
      <section className="section-box mt-110">
        <div className="container mt-60">
          <h3 className="text-heading-1 text-center mb-10 text-shadow-25">
            Choose The Best Plan <br className="d-lg-block d-none" />
            That’s For You
          </h3>
        </div>
        <PriceTable priceData={PricingData1} />
      </section>
    </Layout>
  );
}

export default Home;
