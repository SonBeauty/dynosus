import React from "react";
import OurStrenghts1Component from "./ourStrenghts1Component";
import './ourStrenghts.css';

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

export const OurStrenghts1: React.FC<OurStrenghtsProps> = ({ data }) => {
  return <OurStrenghts1Component data={data} />
};