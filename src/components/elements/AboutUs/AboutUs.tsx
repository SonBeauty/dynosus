import React from "react";
import { Link } from "react-router-dom";

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

const AboutUsComponent: React.FC<AboutUsProps> = ({ AUData, bigTitle, decription, tag }) => {
  return (
    <section className="section-box mt-100">
      <div className="container mt-60">
        {tag && <div className="text-center mb-20"><span className="tag-1 bg-6 color-green-900">{tag}</span></div>}
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900" dangerouslySetInnerHTML={{ __html: bigTitle }} />
            <p className="text-body-lead-large color-gray-600 mt-20" dangerouslySetInnerHTML={{ __html: decription }} />
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-60">
        <div className="row">
          {AUData && AUData.map((item, i) =>
            <div className="col-lg-4 col-sm-12 mb-30" key={i}>
            <div className={`card-grid-style-3 hover-up h-full pb-40 mb-30 ${item.bdBGColor}`}>
                <div className="card-about">
                    <div className="h-full">
                        <div className="grid-1-img">
                          <img width={80} height={80} src={item.image} alt="Dionysus" />
                        </div>
                        <h3 className="text-heading-4 mt-20">{item.title}</h3>
                        <p className="text-body-excerpt mt-20">{item.content}</p>
                    </div>
                    <div className="mt-30">
                        <Link to="/about"className="btn btn-default icon-arrow-right">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutUsComponent;