import { Link } from "react-router-dom";
import React from "react";

const FooterComponent: React.FC = () => {
    return (
        <div>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link to="/">
                                    <img alt="Dionysus" src="/assets/imgs/template/logo.svg" width={187} height={50} />
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
                                <Link to="/page-signup" className="btn btn-square">Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>
                            <div className="mt-20 text-body-text color-gray-600">(239) 555-0108</div>
                            <div className="text-body-text color-gray-600">vzenlabs@gmail.com</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link to="/#">Mission &amp; Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Our Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Our Commitment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Advertising
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link to="/#">Our Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Cookie Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">Office Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">News &amp; Events
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link to="/#">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Editor Help
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Live Chatting
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Support Center
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link to="/#">
                                        Request an offer
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#">
                                        Stories
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">©Dionysus Official 2022</span>
                                <Link to="/page-terms" className="text-body-text color-gray-400 ml-50">Privacy policy
                                </Link>
                                <Link to="/page-terms" className="text-body-text color-gray-400 ml-50">Cookies
                                </Link>
                                <Link to="/page-terms" className="text-body-text color-gray-400 ml-50">Terms of service
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link to="https://facebook.com" className="icon-socials icon-facebook">
                                    </Link>
                                    <Link to="https://twitter.com" className="icon-socials icon-twitter">
                                    </Link>
                                    <Link to="https://www.instagram.com" className="icon-socials icon-instagram">
                                    </Link>
                                    <Link to="https://www.linkedin.com" className="icon-socials icon-linkedin">
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;