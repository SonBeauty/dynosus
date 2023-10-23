import React from 'react'
import { Link } from 'react-router-dom';
import Style from '../../css/Home2.module.css';
import IconFurnitureSVG from '../svg/IconFurnitureSVG';
import IconShowerSVG from '../svg/IconShowerSVG';
import IconTableSVG from '../svg/IconTableSVG';
import IconRefrigeratorSVG from '../svg/IconRefrigeratorSVG';
import IconSofaSVG from '../svg/IconSofaSVG';
import IconLightSVG from '../svg/IconLightSVG';
const items = [
  { icon: <IconShowerSVG />, text: "BATH TUB" },
  { icon: <IconTableSVG />, text: "DESK TABLE" },
  { icon: <IconFurnitureSVG />, text: "FURNITURE" },
  { icon: <IconRefrigeratorSVG />, text: "REFRIGERATOR" },
  { icon: <IconSofaSVG />, text: "SOFA" },
  { icon: <IconLightSVG />, text: "LIGHT" }
];


const IconComponent = () => {
  return (
    <div className="row justify-content-md-center">
      {items.map((item, index) => (
        <div key={index} className={`col-lg-2 col-md-3 col-sm-4 col-6 text-center ${Style.p0}`}>
          <Link to="/#" className={`item-logo box-hover-shadow hover-up ${Style.p0}`}>
            {item.icon}
          </Link>
          <p className={Style.textIcon}>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default IconComponent