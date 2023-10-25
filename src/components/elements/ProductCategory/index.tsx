import React from "react";
import './productCategory.css';
import ProductCategoryComponent from "./ProductCategory";
import ViewedProductComponent from "./ViewedProduct";

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
interface ProductCategoryProps {
  data: Product[];
  gotoShopBtn?: boolean;
}
interface ViewedProductProps{
  title: string;
  description: string;
  data: Product[];
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({data, gotoShopBtn}) => {
  return <ProductCategoryComponent data={data} gotoShopBtn={gotoShopBtn} />;
}

export const ViewedProduct: React.FC<ViewedProductProps> = ({title, description, data}) => {
  return<ViewedProductComponent title={title} description={description} data={data} />;
}