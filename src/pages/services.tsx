import Layout from "../components/layout/Layout";

function Services(): JSX.Element {
  return (
    <>
      <Layout>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h2 className="text-heading-1 color-olive">DESIGN SERVICES</h2>
                <p className="text-body-lead-large color-gray-600 mt-50">
                  The Dionysus’s decoration consulting service consists of teams of interior decorators and 3D experts available to bring your decoration projects to life.
                  They put their design expertise and know how at your service to support you at every stage of the process.
                </p>
                <div className="row mt-lg-100">
                  <div className="col-lg-6 col-sm-12 d-flex mb-20">
                    <img src="/assets/imgs/page/services/draw-icon.svg" alt="Dionysus" className="icon-img-80" />
                    <div className="ml-10">
                      <h3 className="text-heading-4 color-gray-900 mb-15">
                        +<span className="count">10</span>k
                      </h3>
                      <p className="text-body-text-md color-gray-500">Decoration Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex mb-20">
                    <img src="/assets/imgs/page/services/heart-icon.svg" alt="Dionysus" className="icon-img-80" />
                    <div className="ml-10">
                      <h3 className="text-heading-4 color-gray-900 mb-15">
                        +<span className="count">12</span>k
                      </h3>
                      <p className="text-body-text-md color-gray-500">Customers Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <img src="/assets/imgs/page/services/banner-image.png" alt="Dionysus" className="img-responsive"/>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box-mt-100">
          <div className="container mt-60">
            <div className="row">
              <div className="col-12">
                <h2 className="text-heading-1 w-full text-center">Take Advantage Of Exceptional Digital Tools</h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;