import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BlogSlider from "../components/slider/Blog";
import Contact from "../components/elements/Contact";
import Blog from "../components/elements/Blog";

function Blog1(): JSX.Element {
    return (
        <>
            <Layout>
                <section className="section-box bg-header">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">
                                    Our Blog
                                </h2>
                                <p className="text-heading-6 color-gray-600 mt-20">
                                    Welcome to our fashion shop blog, a virtual haven for style
                                    enthusiasts and trendsetters alike. Here, we dive into the
                                    world of fashion retail, bringing you the latest updates,
                                    tips, and inspiration to enhance your shopping experience.
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <BlogSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">
                                    Latest News
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    From Our Blog And Event Fanpage
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <Blog />
                        </div>
                        <div className="mt-20 mb-30 text-center">
                            <Link to="/#" className="btn btn-black icon-arrow-right-white">
                                Load more posts
                            </Link>
                        </div>
                    </div>
                </section>
                <Contact imgChart="/assets/imgs/template/chart.png" imgNewsletter="/assets/imgs/template/img-newsletter.png" bg="bg-6" />
            </Layout >
        </>
    );
}

export default Blog1;
