import React from 'react'
import { Link } from 'react-router-dom';

interface ContactProps {
    imgChart: string;
    imgNewsletter: string;
    bg: string;
}

const Contact: React.FC<ContactProps> = ({ imgChart, imgNewsletter, bg }) => {
    return (
        <section className="section-box overflow-visible mb-50">
            <div className="container mt-50">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className={`${bg} box-newsletter position-relative`}>
                            <div className="row">
                                <div className="col-lg-5 col-md-7">
                                    <span className="text-body-capitalized color-gray-500 text-uppercase">
                                        newsletter
                                    </span>
                                    <h4 className="text-heading-2 mb-10 mt-10">
                                        Contact for selling overview
                                    </h4>
                                    <p className="text-body-text color-gray-500">
                                        By clicking the button, you are agreeing with our <Link to="/page-terms">Term &amp; Conditions
                                        </Link>
                                    </p>
                                    <div className="box-form-newsletter mt-30">
                                        <form className="form-newsletter">
                                            <input
                                                className="input-newsletter"
                                                placeholder="Enter you mail .."
                                            />
                                            <button className="btn btn-send" />
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                    <div className="block-chart shape-1">
                                        <img
                                            src={`${imgChart}`}
                                            alt="Moirai"
                                        />
                                    </div>
                                    <div className="img-responsive img-newsletter">
                                        <img
                                            src={`${imgNewsletter}`}
                                            alt="Moirai"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact