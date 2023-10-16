// import Image from "next/image";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Contact from "../components/elements/Contact";

function Blog2(): JSX.Element {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-breadcrums bg-gray-100">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h1 className="text-display-3 color-gray-900 mb-20">
                                            Our Blog
                                        </h1>
                                        <p className="text-heading-6 color-gray-600 mb-20">
                                            Welcome to our fashion shop blog, a virtual haven for
                                            style enthusiasts
                                            <br />
                                            and trendsetters alike. Here, we dive into the world of
                                            fashion retail,
                                            <br />
                                            bringing you the latest updates, tips, and inspiration to
                                            enhance your <br />
                                            shopping experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container mt-130">
                            <div className="row">
                                <div className="col-lg-1 col-sm-1 col-12" />
                                <div className="col-lg-10 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Featured Articles
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
                                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                                    <div className="card-grid-style-4">
                                        <div className="w-120">
                                            <div className="grid-4-img mb-20">
                                                <Link to="/#">
                                                    <img
                                                        src="/assets/imgs/page/blog/2/img-news-2.png"
                                                        className="img-blog-2"
                                                        alt="Moirai"
                                                        style={{ objectFit: "cover" }}
                                                    />{" "}
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to="/#">
                                            <a className="text-heading-4">
                                                Unveiling the Hottest Fashion Trends of the Season
                                            </a>
                                        </Link>
                                        <p className="text-body-text color-gray-500">
                                            Dressing nice every day doesn&apos;t have to be a daunting
                                            task or reserved for special occasions. With a few simple
                                            tips and a little planning, you can elevate your daily
                                            style and feel confident in your appearance
                                        </p>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={56}
                                                    height={56}
                                                    src="/assets/imgs/page/blog/2/user-1.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <h4 className="text-heading-6 color-gray-900">
                                                Jenny Wilson
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 pr-30 mb-50">
                                    <div className="card-grid-style-4">
                                        <div className="w-120">
                                            <div className="grid-4-img color-bg-2 mb-20 w-80">
                                                <Link to="/#">
                                                    <a>
                                                        <img
                                                            src="/assets/imgs/page/blog/2/img-news-3.png"
                                                            className="img-blog-2"
                                                            alt="Moirai"
                                                        />{" "}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to="/#">
                                            <a className="text-heading-4">
                                                Unleashing Your Style: A Journey into the World of
                                                Fashion
                                            </a>
                                        </Link>
                                        <p className="text-body-text color-gray-500">
                                            In this blog post, we&apos;ll explore some timeless tips
                                            and tricks to help you dress nice effortlessly, regardless
                                            of the occasion.
                                        </p>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={56}
                                                    height={56}
                                                    src="/assets/imgs/page/blog/2/user-2.png"
                                                    alt="Moirai"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <h4 className="text-heading-6 color-gray-900">
                                                Jenny Wilson
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 pr-3 mb-20">
                                    <div className="card-list-style-1">
                                        <Link to="/#">
                                            <a className="text-heading-6">The Art of Dressing</a>
                                        </Link>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={41}
                                                    height={41}
                                                    src="/assets/imgs/page/blog/2/user-3.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <h4 className="text-body-lead color-gray-500">
                                                Jane Cooper
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                        <div className="style-1-img color-bg-10">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        width={110}
                                                        height={110}
                                                        src="/assets/imgs/page/homepage1/img-news-11.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-list-style-1">
                                        <Link to="/#">
                                            <a className="text-heading-6">The Art of Dressing</a>
                                        </Link>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={41}
                                                    height={41}
                                                    src="/assets/imgs/page/blog/2/user-4.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <h4 className="text-body-lead color-gray-500">
                                                Wade Warren
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                        <div className="style-1-img color-bg-2">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        width={110}
                                                        height={110}
                                                        src="/assets/imgs/page/homepage1/img-news-11.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-list-style-1">
                                        <Link to="/#" className="text-heading-6">
                                            The Art of Dressing
                                        </Link>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={41}
                                                    height={41}
                                                    src="/assets/imgs/page/blog/2/user-5.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <h4 className="text-body-lead color-gray-500">
                                                Jenny Wilson
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                        <div className="style-1-img color-bg-5">
                                            <Link to="/#">
                                                <img
                                                    width={110}
                                                    height={110}
                                                    src="/assets/imgs/page/homepage1/img-news-11.png"
                                                    alt="Moirai"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-list-style-1">
                                        <Link to="/#">
                                            <a className="text-heading-6">The Art of Dressing</a>
                                        </Link>
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <img
                                                    width={41}
                                                    height={41}
                                                    src="/assets/imgs/page/blog/2/user-6.png"
                                                    alt="Moirai"
                                                />
                                            </div>
                                            <h4 className="text-body-lead color-gray-500">
                                                Robert Fox
                                            </h4>
                                            <p className="text-body-small color-gray-500">
                                                August 25, 2022
                                            </p>
                                        </div>
                                        <div className="style-1-img color-bg-9">
                                            <Link to="/#">
                                                <img
                                                    width={110}
                                                    height={110}
                                                    src="/assets/imgs/page/homepage1/img-news-11.png"
                                                    alt="Moirai"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container mt-50">
                            <div className="row">
                                <div className="col-lg-1 col-sm-1 col-12" />
                                <div className="col-lg-10 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Latest Blog Posts
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        From Our blog and Event fanpage
                                    </p>
                                </div>
                                <div className="col-lg-1 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-30">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#">
                                                    <a className="text-heading-4 blog-title">
                                                        Unveiling the Hottest Fashion Trends of the Season
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-6">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="w-100"
                                                        src="/assets/imgs/page/homepage1/img-news-14.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#">
                                                    <a className="text-heading-4 blog-title">
                                                        Unveiling the Latest Fashion Trends: Elevate Your Style
                                                        Game
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-6">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="w-100"
                                                        src="/assets/imgs/page/homepage1/img-news-15.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#">
                                                    <a className="text-heading-4 blog-title">
                                                        Unleashing Your Style: A Journey into the World of
                                                        Fashion
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-4">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="w-100"
                                                        src="/assets/imgs/page/homepage1/img-news-16.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#">
                                                    <a className="text-heading-4 blog-title">
                                                        Dressing Nice Every Day: A Guide to Effortless Style
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-2">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="w-100"
                                                        src="/assets/imgs/page/homepage1/img-news-10.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#">
                                                    <a className="text-heading-4 blog-title">
                                                        Mastering the Art of Dressing Nice and Looking Cool:
                                                        Your Style
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-8">
                                            <Link to="/#">
                                                <img
                                                    className="w-100"
                                                    src="/assets/imgs/page/homepage1/img-news-11.png"
                                                    alt="Moirai"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <div className="blog-category">
                                            <span className="tag-dot">TRENDING</span>
                                            <div className="h-title">
                                                <Link to="/#" className="text-heading-4 blog-title">
                                                    Dressing Nice: A Guide to Effortless Style
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="grid-4-img color-bg-1">
                                            <Link to="/#">
                                                <img
                                                    className="w-100"
                                                    src="/assets/imgs/page/homepage1/img-news-12.png"
                                                    alt="Moirai"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20">
                                    <div className="card-grid-style-4">
                                        <span className="tag-dot">TRENDING</span>
                                        <Link to="/#">
                                            <a className="text-heading-4 blog-title">
                                                Fashion 360: A Complete Guide to Fashion, Style, and
                                                Shopping
                                            </a>
                                        </Link>
                                        <div className="grid-4-img color-bg-2">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="img-blog-1"
                                                        src="/assets/imgs/page/homepage1/img-news-3.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                    <div className="card-grid-style-4">
                                        <span className="tag-dot">TRENDING</span>
                                        <Link to="/#">
                                            <a className="text-heading-4 blog-title">
                                                The Stylist&apos;s Notebook: Tricks, and Secrets for a
                                                Flawless Wardrobe
                                            </a>
                                        </Link>
                                        <div className="grid-4-img color-bg-8">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="img-blog-1"
                                                        src="/assets/imgs/page/homepage1/img-news-2.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                    <div className="card-grid-style-4">
                                        <span className="tag-dot">TRENDING</span>
                                        <Link to="/#">
                                            <a className="text-heading-4 blog-title">
                                                Style Chronicles: Unveiling the Secrets of Fashion
                                            </a>
                                        </Link>
                                        <div className="grid-4-img color-bg-1">
                                            <Link to="/#">
                                                <a>
                                                    <img
                                                        className="img-blog-1"
                                                        src="/assets/imgs/page/homepage1/img-news-1.png"
                                                        alt="Moirai"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="mt-20 mb-30 text-center">
                                <Link to="/#">
                                    <a className="btn btn-black icon-arrow-right-white">
                                        Load more posts
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <Contact
                        imgChart="/assets/imgs/template/chart.png"
                        imgNewsletter="/assets/imgs/template/img-newsletter-1.png"
                        bg="bg-2"
                    />
                </div>
            </Layout>
        </>
    );
}

export default Blog2;
