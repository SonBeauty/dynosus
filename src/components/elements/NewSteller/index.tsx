import React from "react";
import NewsletterComponent from "./Newsletter";
import './newsletter.css';

interface NewsletterProps {
  newsletterStyle?: string;
  newsletterImgUrl: string;
  chartImgUrl: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({newsletterImgUrl, chartImgUrl, newsletterStyle}) => {
  return <NewsletterComponent newsletterImgUrl={newsletterImgUrl} chartImgUrl={chartImgUrl} newsletterStyle={newsletterStyle} />
}