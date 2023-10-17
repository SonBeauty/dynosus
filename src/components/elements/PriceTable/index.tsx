import React from "react";
import PriceTableComponent from "./PricingTable";
import './priceTable.css';

interface PricingData {
  title: string;
  decription: string;
  features: string[];
  pricing?: number;
  pricingMonth?: number;
  pricingYear?: number;
}

interface PriceTableProps {
  priceItemStyle?: string;
  priceData: PricingData[];
}

export const PriceTable: React.FC<PriceTableProps> = ({priceData, priceItemStyle}) => {
  return <PriceTableComponent priceData={priceData} priceItemStyle={priceItemStyle} />
};