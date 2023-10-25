import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  img: string;
  brand: string;
  title: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  type: string
}
interface ViewedProductProps {
  title: string;
  description: string;
  data: Product[];
}
const ViewedProductComponent: React.FC<ViewedProductProps> = ({ title, description, data }) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <h2 className="text-heading-1 color-gray-900">{title}</h2>
        <p className="text-body-lead-large color-gray-600 mt-20">
          {description}
        </p>
      </div>
      <div className="container mt-70">
        <div className="row">
          {data && data.map(item =>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12" key={item.id}>
              <div className="product-item-1 hover-up">
                <Link to="#">
                  <div className="product-image">
                    <img
                      width={121}
                      height={150}
                      src={item.img}
                      alt="Dionysus"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="text-body-lead color-gray-900">
                      {item.title}
                    </h3>
                    <div className="price">
                      <span className="price-regular mr-15">${item.oldPrice}</span>
                      <span className="price-regular price-line">${item.newPrice}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewedProductComponent;