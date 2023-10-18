import React, { useState } from "react";
import PricingItem from "./PricingTable";

const PricingTable: React.FC = () => {
    const pricingItems = [
        {
            price: 50,
            title: "Standard",
            description: "All the basics for businesses that are just starting out.",
            features: [
                "Unlimited updates",
                "Custom permissions",
                "Custom designs & features",
                "Custom permissions",
            ],
            delay: ".1s",
        },
        {
            price: 89,
            title: "Essentials",
            description: "All the basics for businesses that are just starting out.",
            features: [
                "Unlimited updates",
                "Custom permissions",
                "Custom instructors",
                "Custom permissions",
            ],
            delay: ".2s",
            className: "hover-up active",
        },
        {
            price: 129,
            title: "Premium",
            description: "Advanced features for pros who need more.",
            features: [
                "Unlimited updates",
                "Custom designs & features",
                "Custom permissions",
                "Custom instructors",
            ],
            delay: ".3s",
        },
        {
            price: 129,
            title: "Unlimited",
            description: "Advanced features for pros who need more.",
            features: [
                "Unlimited updates",
                "Custom designs & features",
                "Custom permissions",
                "Custom instructors",
            ],
            delay: ".4s",
        },
    ];

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => {
        setToggled(!isToggled);
    };

    return (
        <>
            <div className="container mt-20">
                <div className="text-center block-bill-2 mt-10">
                    <span className="text-lg text-billed">Billed Monthly</span>
                    <label className="switch ml-20 mr-20">
                        <input
                            id="cb_billed_type"
                            type="checkbox"
                            name="billed_type"
                            onClick={toggleTrueFalse}
                        />
                        <span className="slider round" />
                    </label>
                    <span className="text-lg text-billed">Bill Annually</span>
                </div>
                <div className="block-pricing block-pricing-2 mt-70 active">
                    <div className="container">
                        <div className="row">
                            {pricingItems.map((item, index) => (
                                <PricingItem
                                    key={item.title}
                                    {...item}
                                    toggle={isToggled}
                                    className={index === 1 ? "active" : ""}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingTable;
