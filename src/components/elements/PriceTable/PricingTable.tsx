import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PricingData {
  title: string;
  decription: string;
  features: string[];
  pricing?: number;
  pricingMonth?: number;
  pricingYear?: number;
}
interface PriceTableProps {
  priceItemStyle?: string;
  priceData: PricingData[];
}

const PriceTableComponent: React.FC<PriceTableProps> = ({ priceItemStyle, priceData }) => {
  const [isActive, setIsActive] = useState(0);
  const [isToggled, setToggled] = useState(false);

  const handleActive = (i: number) => { setIsActive(i) };
  const toggleTrueFalse = () => { setToggled(!isToggled) };
  return (
    <>
      <div className="container mt-20">
        {!priceData[0].pricing &&
          <div className="text-center block-bill-2 mt-10">
            <span className="text-lg text-billed">Billed Monthly</span>
            <label className={`switch ml-20 mr-20 ${priceItemStyle}`}>
              <input id="cb_billed_type" type="checkbox" name="billed_type" onClick={toggleTrueFalse} />
              <span className="slider round" /></label>
            <span className="text-lg text-billed">Bill Annually</span>
          </div>
        }
        <div className={`block-pricing block-pricing-2 mt-70 ${priceItemStyle}`}>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                {priceData.map((opt, i) =>
                  <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s" key={i} onClick={() => handleActive(i)}>
                    <div className={`box-pricing-item hover-up ${isActive === i && "active"}`}>
                      <div className="box-info-price">
                        {opt.pricing ?
                          <>
                          <span className="text-heading-3 for-month display-month">${opt.pricing}</span>
                          <span className="text-month for-month text-body-small color-gray-400 display-month">/Month</span>
                          </>
                           :
                          <>
                            <span className="text-heading-3 for-month display-month">${isToggled ? opt.pricingYear : opt.pricingMonth}</span>
                            <span className="text-month for-month text-body-small color-gray-400 display-month">/{isToggled ? "Year" : "Month"}</span>
                          </>
                        }
                      </div>
                      <div className="line-bd-bottom">
                        <h4 className="text-heading-5 mb-15">
                          {opt.title}
                        </h4>
                        <p className="text-body-small color-gray-400">
                          {opt.decription}
                        </p>
                      </div>
                      <ul className="list-package-feature">
                        {opt.features.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                      <div>
                        <Link to="/#"><a className="btn btn-black text-body-lead icon-arrow-right-white pr-40">Get Started
                        </a></Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTableComponent;