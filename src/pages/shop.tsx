import { postsData1 } from "../Data/Blog";
import { Categories, ShopData, ViewedProductData } from "../Data/ShopData";
import { Posts } from "../components/elements/Blogs";
import { Newsletter } from "../components/elements/NewSteller";
import { ViewedProduct } from "../components/elements/ProductCategory";
import ProductCategory from "../components/elements/ProductCategory/ProductCategory";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "../css/Shop.css";

function Shop(): JSX.Element {
  return (
    <>
      <Layout>
        <section className="section-box bg-gray-100">
          <div className="container mt-60 mb-60 text-center">
            <h2 className="text-heading-1">Shop</h2>
            <p className="text-body-lead-large">Welcome to our furniture shop, a haven for style enthusiasts and <br className="d-lg-block d-none" />trendsetters. Step into our virtual store and immerse yourself in a <br className="d-lg-block d-none" />world of home decoration.</p>
          </div>
        </section>
        <section className="section-box mt-90">
          <div className="container mt-60">
            <div className="row">
              <div className="col-12">
                <h2 className="text-heading-1 color-gray-900">
                  Shopping By Category
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We offer a carefully curated collection of furniture, and more, designed to help you express your unique personality and elevate your home.
                </p>
              </div>
              <div className="col-lg-3 text-lg-end text-md-start">
                <Link to="/page-signup" className="btn btn-default hover-up icon-arrow-right mt-10" >
                  Browse All
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              {Categories && Categories.map(category =>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12" key={category.id}>
                  <div className="category-grid-3 hover-up category-block">
                    <div className="category-img">
                      <Link to="#">
                        {category.img}
                      </Link>
                    </div>
                    <h4 className="text-heading-5 mb-5">{category.title}</h4>
                    <p className="text-body-text color-gray-500">{category.productCount} products</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <h2 className="text-heading-1 color-gray-900">Latest products</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Don&rsquo;t miss world trending
            </p>
          </div>
          <div className="container mt-70">
            <div className="filters-products d-flex">
              <div className="number-info">
                <strong className="text-body-lead color-gray-500">
                  There are <span className="color-green-900">1853</span>{" "}
                  products in this category
                </strong>
              </div>
              <div className="fitler-info">
                <div className="icon-layout text-body-text color-gray-500">
                  Show:
                  <div className="color-green-900 d-inline">
                    <div className="dropdown dropdown-sort">
                      <button
                        className="btn dropdown-toggle"
                        id="dropdownPage"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static">
                        <span className="ml-5">50</span>
                        <i className="fi-rr-angle-small-down"></i>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownPage">
                        <li>
                          <Link to="#" className="dropdown-item active">
                            50
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            100
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            150
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-lg-inline-block d-md-inline-block d-none px-1"></div>
                <div className="icon-sort text-body-text color-gray-500">
                  Sort by:
                  <div className="color-green-900 d-inline">
                    <div className="dropdown dropdown-sort">
                      <button
                        className="btn dropdown-toggle"
                        id="dropdownSort"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static">
                        <span className="ml-5">Featured</span>
                        <i className="fi-rr-angle-small-down"></i>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-light"
                        aria-labelledby="dropdownSort">
                        <li>
                          <Link to="#" className="dropdown-item active">
                            Featured
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Rating
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Low Price
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductCategory data={ShopData} />
            <div className="paginations">
              <ul className="pager">
                <li>
                  <Link to="#" className="prev-page"></Link>
                </li>
                <li>
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#" className="page-dotted"></Link>
                </li>
                <li>
                  <Link to="#" className="next-page"></Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <ViewedProduct title="Viewed Products" description="Take it to your cart" data={ViewedProductData} />
        <Posts bigTitle="Latest Blog Posts" description="From Our blog and Event fanpage" postsData={postsData1} />
        <Newsletter newsletterImgUrl="/assets/imgs/template/img-newsteller-2.png" chartImgUrl="/assets/imgs/template/chart.png" />
      </Layout>
    </>
  );
}

export default Shop;