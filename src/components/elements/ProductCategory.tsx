import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button/Button";


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

const ProductCategory: React.FC<{ data: Product[] }> = ({ data }) => {
  return (
    <div className="row mt-40">
      {data.map((item, i) => (
        <div
          className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
          key={i}>
          <div className="product-item-2 hover-up">
            <Link to={`/shop/${item.id}`}>
              <div className="product-image">
                <img
                  className="img-fluid"
                  src={`/assets/imgs/page/homepage1/${item.img}`}
                  alt=""
                />
              </div>
            </Link>
            <div className="box-quick-view">
              <div className="quick-view">
                <Link to="#" className="like-product"></Link>
                <Link to="#" className="shuffle-product"></Link>
                <Link to="#" className="view-product"></Link>
              </div>
            </div>
            <div className="product-info">
              <span className="text-body-small color-gray-500 font-bold">
                {item.brand}
              </span>
              <Link to={`/shop/${item.id}`}>
                <h3 className="text-body-lead color-gray-900">
                  {item.title}
                </h3>
              </Link>
              <div className="rating mt-10">
                <div className="box-rating">
                  <span>
                    <img
                      width={12}
                      height={12}
                      src="/assets/imgs/page/homepage5/star-active.svg"
                      alt="agon"
                    />
                  </span>
                  <span>
                    <img
                      width={12}
                      height={12}
                      src="/assets/imgs/page/homepage5/star-active.svg"
                      alt="agon"
                    />
                  </span>
                  <span>
                    <img
                      width={12}
                      height={12}
                      src="/assets/imgs/page/homepage5/star-active.svg"
                      alt="agon"
                    />
                  </span>
                  <span>
                    <img
                      width={12}
                      height={12}
                      src="/assets/imgs/page/homepage5/star-active.svg"
                      alt="agon"
                    />
                  </span>
                  <span>
                    <img
                      width={12}
                      height={12}
                      src="/assets/imgs/page/homepage5/star.svg"
                      alt="agon"
                    />
                  </span>
                </div>
                <span className="text-semibold">
                  <span>(</span>
                  <span>{item.rating}</span>
                  <span>&nbsp;rates )</span>
                </span>
              </div>
              <div className="d-flex mt-20">
                <div className="box-prices">
                  <span className="price-regular mr-5">
                    ${item.oldPrice}
                  </span>
                  <span className="price-regular price-line">
                    ${item.newPrice}
                  </span>
                </div>
                <div className="button-add text-end-1">
                  <Link to="#" className="btn btn-cart">
                    Add
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button content="Go to shop" />
      </div>
    </div>
  )
}

export default ProductCategory