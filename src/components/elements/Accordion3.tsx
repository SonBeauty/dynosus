import { useState } from "react";

function Accordion3(): JSX.Element {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "1",
    });

    const handleToggle = (key: string) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "1"
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("1")}>
                        <button className={isActive.key == "1" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>Does altering pants affect their shape?</button>
                    </h2>
                    <div className={isActive.key == "1" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">The length of the pants may be reduced due to altering, which can affect the shape or fit of the bottoms as follows:</div>
                        <ul className="list-style-disc ml-40">
                            <li className="ms-1">Mid-Calf High-Waisted Super Stretch Leggings</li>
                            <li className="ms-1">Full-Length High-Waisted Super Stretch Skinny Jeans</li>
                            <li className="ms-1">Full-Length Smart Pants</li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("2")}><button className={isActive.key == "2" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>What is the expected delivery time?</button></h2>
                    <div className={isActive.key == "2" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Orders using the clothing alteration service will take an additional 1-4 business days from the estimated delivery time, excluding holidays and weekends. (Normal delivery time is 1-4 business days). Once your order is ready for shipment, you will receive an email with the tracking number from the shipping carrier. Same-day delivery for Click&Collect service does not apply to orders with pants alteration service.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("3")}><button className={isActive.key == "3" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>Do you provide support for clothing size adjustments?</button></h2>
                    <div className={isActive.key == "3" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes, we do, but we only provide support for reducing the size of clothing. We cannot extend a product longer than its original length or widen the product.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("4")}><button className={isActive.key == "4" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>Clothing repair service is currently available at all physical stores and online stores?</button></h2>
                    <div className={isActive.key == "4" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">This service is only applicable to certain specific types of products. For online orders that include clothing alteration service, the delivery time will be extended by 1-4 working days from the estimated delivery time. (Not applicable for Click & Collect Same Day Delivery).</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("5")}><button className={isActive.key == "5" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>Can I request a second alteration for the same item of clothing?</button></h2>
                    <div className={isActive.key === "5" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">For additional clothing alterations beyond the initial adjustment, we offer convenient options to cater to your needs. You can visit any of our stores or access our online store&apos;s dedicated clothing alteration service to request further modifications. To ensure seamless assistance, kindly provide the phone number associated with your purchase so that we may locate your order. Our attentive store staff is ready to provide the support you require.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("6")}><button className={isActive.key == "6" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>I have made an online purchase and would like to have the clothing altered. Can I bring the product to the store for alterations?</button></h2>
                    <div className={isActive.key == "6" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes, you can visit any of our stores and request assistance from our staff. Please provide the phone number used for the purchase so that we can check your order. All of our stores provide clothing alteration services, so you can go to any store that is most convenient for you to request assistance from our staff.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle("7")}><button className={isActive.key == "7" ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 accordion-color collapsed"}>Can I request a return or exchange for a product that has been altered?</button></h2>
                    <div className={isActive.key == "7" ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Altered or tailored products are not eligible for exchange or return. In the event that you receive inaccurately altered or defective products, you can contact our Customer Service team for assistance.</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accordion3;