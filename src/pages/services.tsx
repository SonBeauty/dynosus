import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Propose1Data, Propose2Data, stages } from "../Data/ServicesPageData";
import { ProposeInfo } from "../components/elements/ProposeInfo";
import { PriceTable } from "../components/elements/PriceTable";
import { PricingData2 } from "../Data/pricingData";

function Services(): JSX.Element {
  return (
    <>
      <Layout>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <h2 className="text-heading-1 color-olive">DESIGN SERVICES</h2>
                <p className="text-body-lead-large color-gray-600 mt-50">
                  The Dionysus’s decoration consulting service consists of teams of interior decorators and 3D experts available to bring your decoration projects to life.
                  They put their design expertise and know how at your service to support you at every stage of the process.
                </p>
                <div className="row services-proj-info">
                  <div className="col-lg-6 col-sm-12 d-flex mb-20">
                    <img src="/assets/imgs/page/services/draw-icon.svg" alt="Dionysus" className="icon-img-80" />
                    <div className="ml-10 my-auto">
                      <h3 className="text-heading-4 color-gray-900 mb-10">
                        +<span className="count">10</span>k
                      </h3>
                      <p className="text-body-text-md color-gray-500">Decoration Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex mb-20">
                    <img src="/assets/imgs/page/services/heart-icon.svg" alt="Dionysus" className="icon-img-80" />
                    <div className="ml-10 my-auto">
                      <h3 className="text-heading-4 color-gray-900 mb-10">
                        +<span className="count">12</span>k
                      </h3>
                      <p className="text-body-text-md color-gray-500">Customers Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <img src="/assets/imgs/page/services/banner-image.png" alt="Dionysus" className="img-responsive d-block mx-auto" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-lg-12 col-12">
                <ProposeInfo data={Propose1Data} />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-xl-5 col-lg-12 col-md-12 pb-30">
                <img src="/assets/imgs/page/services/img-1.png" className="mx-auto d-block" alt="Dionysus" />
              </div>
              <div className="col-xl-7 col-lg-12 col-md-12 my-auto">
                <ProposeInfo data={Propose2Data} />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-mb-12 pb-30">
                <h2 className="text-heading-1 text-center text-sm-start color-olive">The Stages Of Your Project</h2>
                {stages.map((stage, i) =>
                  <>
                    <h4 className="text-heading-3 color-olive mt-20" key={i}>{`${i + 1}- ${stage.title}`}</h4>
                    <p className="text-body-text mt-20">{stage.description}</p>
                  </>
                )}
                <div className="text-center mt-50">
                  <Link to="#" className="btn btn-olive">Make an appointment</Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-md-12">
                <img src="/assets/imgs/page/services/img-2.png" className="mx-auto d-block" alt="Dionysus" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container mt-60">
            <h2 className="text-heading-1 text-center">Multiple Design Services <br className="d-lg-block d-none" /> Options To Suit Your Needs</h2>
          </div>
          <PriceTable priceData={PricingData2} priceItemStyle="price-style-3" />
        </section>
      </Layout>
    </>
  );
};

export default Services;