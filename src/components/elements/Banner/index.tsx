import React from "react";
import './banner.css';
import { BannerComponent } from "./BannerComponent";

interface BannerProps {
  tag?: string;
  title: string;
  description: string;
  hasButton?: boolean;
  bgImage: string;
  expColor?: string;
}

export const Banner: React.FC<BannerProps> = ({ tag, title, description, hasButton, bgImage, expColor }) => {
  return <BannerComponent tag={tag} title={title} description={description} hasButton={hasButton} bgImage={bgImage} expColor={expColor}/>
}