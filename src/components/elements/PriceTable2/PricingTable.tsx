import { Link } from "react-router-dom";
import React from "react";

interface pricingtable {
    price: number,
    title: string,
    description: string,
    features: string[],
    toggle: boolean,
    delay: string
}

const PricingItem: React.FC<pricingtable> = ({ price, title, description, features, delay, toggle }) => {

    return (
        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay={`${delay}`}>
            <div className="box-pricing-item">
                <div className="box-info-price">
                    <span className="text-heading-3 for-month display-month">${toggle ? 150 : price}</span>
                    <span className="text-month for-month text-body-small color-gray-400 display-month">/{toggle ? "Year" : " Month"}</span>
                </div>
                <div className="line-bd-bottom">
                    <h4 className="text-heading-5 mb-15">{title}</h4>
                    <p className="text-body-small color-gray-400">{description}</p>
                </div>
                <ul className="list-package-feature">
                    {features.map((feature: any) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <div>
                    <Link to="/#" className="btn btn-black-border text-body-lead icon-arrow-right">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingItem;