import React from "react";

interface Strenght {
  id: number;
  icon: string;
  pointName: string;
  text: string;
}

interface OurStrenghtsData {
  title: string;
  decription?: string;
  content: Strenght[];
}

interface OurStrenghtsProps {
  data: OurStrenghtsData;
}

const OurStrenghts1Component: React.FC<OurStrenghtsProps> = ({ data }) => {
  return (
    <section className="section-box mt-100">
      <div className="container mt-60">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              {data.title}
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              {data.decription}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-60">
        <div className="row">
          {data.content.map(content =>
            <div className="col-lg-4 col-md-12 col-sm-12" key={content.id}>
              <div className="list-icons">
                <div className="item-icon">
                  <span className="icon-left"><img src={content.icon} className="icon-img-64" alt="Dionysus" /></span>
                  <h4 className="text-heading-4">
                    {content.pointName}
                  </h4>
                  <p className="text-body-text color-gray-600 mt-15">
                    {content.text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStrenghts1Component;