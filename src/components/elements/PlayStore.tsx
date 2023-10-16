import { Link } from "react-router-dom";
import React from "react";

const PlayStore = () => {
    return (
        <section className="section-box mt-70 shop-bottom-banner">
            <div className="container">
                <div className="box-green box-green-2 bdr-18">
                    <h3 className="text-heading-1 color-white">
                        You can order on
                        <br />
                        App and Play store
                    </h3>
                    <p className="text-desc-white">
                        Bring the world of shopping to your phone
                    </p>

                    <div className="mt-60">
                        <Link to="#" className="mr-20">
                            <img
                                width={150}
                                height={45}
                                src="/assets/imgs/page/homepage5/apple-button.svg"
                                alt="agon"
                            />
                        </Link>
                        <Link to="#">
                            <img
                                width={150}
                                height={45}
                                src="/assets/imgs/page/homepage5/google-play.svg"
                                alt="agon"
                            />
                        </Link>
                    </div>
                    <div className="mt-10">
                        <span className="cb-layout mr-5">Order direct from the app</span>
                        <span className="cb-layout">Save and searches</span>
                    </div>
                    <div className="block-1 shop-grid-1">
                        <img
                            src="/assets/imgs/page/shop1/safety.png"
                            alt="agon"
                        />
                    </div>
                    <div className="block-2 d-none d-lg-block">
                        <img
                            src="/assets/imgs/page/shop1/chart.png"
                            alt="agon"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayStore;
