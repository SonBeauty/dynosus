import React from 'react'
import { Link } from 'react-router-dom';
import Style from '../../css/Home2.module.css';

const IconComponent: React.FC<{ items: any[] }> = ({ items }) => {
  return (
    <div className="row justify-content-lg-between justify-content-md-between">
      {items.map((item, index) =>
        item.icon ? (
          <div key={index} className={`col-lg-2 col-md-4 col-sm-4 col-6 text-center ${Style.p0}`}>
            <Link to="/#" className={`item-logo box-hover-shadow hover-up ${Style.p0}`}>
              {item.icon}
            </Link>
            < p className={Style.textIcon} > {item.text}</p>
          </div>
        ) : (
          <div key={index} className={`col-lg-2 col-md-4 col-sm-4 col-6 text-center`}>
            <img src={item.imgSrc} alt={item.text} className=" h-full" />
          </div>
        )
      )}
    </div>
  )
}

export default IconComponent