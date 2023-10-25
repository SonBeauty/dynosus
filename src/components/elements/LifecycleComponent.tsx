import React from "react";
import Style from '../../css/Pricing1.module.css'
type lifecycleData = {
  title: string;
  description: string;
  img: string
}

interface Props {
  data: lifecycleData[]
}

const LifecycleComponent: React.FC<Props> = ({ data }) => {
  return (
    <section className="section-box mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
            <h2 className={`text-heading-1 ${Style.textTitle} color-gray-900 mb-30`}>Customer Lifecycle</h2>
            <p className="text-body-excerpt color-gray-600">We understand that the relationship with our customers extends beyond a single transaction, which is why we focus on nurturing and supporting them throughout the entire customer lifecycle.</p>
          </div>
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-12 col-sm-12 mt-50" key={index}>
              <div>
                <div className=" pl-0">
                  <div className="mb-15">
                    <img width={80} height={80} src={item.img} alt={item.title} />
                  </div>
                  <h4 className="text-heading-4">{item.title}</h4>
                  <p className="text-body-text color-gray-600 mt-15">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleComponent;