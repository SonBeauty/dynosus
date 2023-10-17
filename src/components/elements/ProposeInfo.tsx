import React from "react";
import { Link } from "react-router-dom";

interface Propose {
  title: string;
  description: string;
}

interface ProposeInfoProps {
  data: Propose;
}
export const ProposeInfo: React.FC<ProposeInfoProps> = ({data}) => {
  return (
    <>
      <h2 className="text-heading-1 w-full text-center color-olive">{data.title}</h2>
      <p className="text-body-lead-large text-center mt-40">{data.description}</p>
      <div className="group-res-btns text-center mt-50">
        <Link to="#" className="btn btn-olive mb-20">Discover the video</Link>
        <div className="d-lg-inline-block d-md-inline-block d-none px-2"></div>
        <Link to="#" className="btn btn-olive mb-20">Make an appointment</Link>
      </div>
    </>
  )
}