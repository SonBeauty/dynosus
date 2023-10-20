import React from "react";
import AboutUsComponent from "./AboutUs";

interface AboutUsData {
  title: string;
  content: string;
  image: string;
  bdBGColor: string;
}
interface AboutUsProps {
  AUData?: AboutUsData[];
  bigTitle: string;
  decription: string;
  tag?: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({ AUData, bigTitle, decription, tag }) => {
  return <AboutUsComponent AUData={AUData} bigTitle={bigTitle} decription={decription} tag={tag}/>
};