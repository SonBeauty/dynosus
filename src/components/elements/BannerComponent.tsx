import Style from '../../css/Home2.module.css'
import { Link } from "react-router-dom";

const bannersData = [
  {
    title: "ROCKING <br/> CHAIR",
    link: "/#",
    style: Style.banner1,
  },
  {
    title: "PENDANT <br/> LIGHT",
    link: "/#",
    style: Style.banner2,
  },
  {
    title: "SIDEBOARD <br/> TABLE",
    link: "/#",
    style: Style.banner3,
  },
];

const BannerComponent = () => {
  return (
    <div className="row">
      {bannersData.map((banner, index) => (
        <div key={index} className={`col-lg-4`}>
          <div className={`px-10 mb-30 ${banner.style}`}>
            <div className="pl-20">
              <div className="pt-40">
                <p className={`${Style.textTitle} mb-20`}>COLLECTION</p>
              </div>
              <p className={`${Style.textContent} mb-20`} dangerouslySetInnerHTML={{ __html: banner.title }}></p>
              <Link to={banner.link} className="btn btn-black icon-arrow-right-white">
                View more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BannerComponent
