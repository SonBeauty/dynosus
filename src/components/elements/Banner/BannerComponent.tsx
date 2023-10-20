import React from "react";
import CounterUp from "../CounterUp";
import { Link } from "react-router-dom";

interface BannerProps {
  tag?: string;
  title: string;
  description: string;
  hasButton?: boolean;
  bgImage: string;
  expColor?: string;
}

export const BannerComponent: React.FC<BannerProps> = ({ tag, title, description, hasButton, bgImage, expColor }) => {
  return (
    <section className="section-box banner-section">
      <div className="relative about-banner">
        <div className="text-center absolute w-full banner-content">
          <div className="container mt-100">
            {tag &&
              <span className="tag-1 bg-olive color-white">{tag}</span>
            }
            
            <h2 className="text-heading-1 color-white mt-30">{title}</h2>
            <p className="text-body-lead-large color-white mt-20">{description}</p>
            {hasButton &&
              <div className="group-res-btns text-center mt-50">
              <Link to="#" className="btn btn-black icon-arrow-right-white mb-20">Join Our Team</Link>
              <div className="d-lg-inline-block d-md-inline-block d-none px-2"></div>
              <Link to="#" className="btn btn-link-white icon-arrow-right-white text-heading-6 mb-20">Contact Us</Link>
            </div>
            }
          </div>
        </div>
        <img src={bgImage} alt="Dionysus" className="img-responsive about-banner-bg" />
      </div>
      <div className={`w-full exp-section ${expColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10 exp-block">
              <div className="pt-50 pb-50 text-mb-center">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 exp-info text-center">
                    <span className="text-display-3">
                      <CounterUp count={5} time={3} />
                    </span>
                    <p className="text-heading-4">
                      Year Experience
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 exp-info text-center">
                    <span className="text-display-3">
                      <CounterUp count={4} time={3} />
                    </span>
                    <p className="text-heading-4">
                      Retail Stores
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 exp-info text-center">
                    <span className="text-display-3">
                      <CounterUp count={10} time={3} />k+
                    </span>
                    <p className="text-heading-4">
                      Sold
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 exp-info text-center">
                    <span className="text-display-3">
                      <CounterUp count={100} time={3} />k+
                    </span>
                    <p className="text-heading-4">
                      Variant Furniture
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </div>
    </section>
  )
}