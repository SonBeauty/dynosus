import React from "react";
import { faqData } from "../../Data/Faq"

const Faq = () => {
  return (
    <div className="col-lg-12 col-sm-12 col-12">
      <ul className="list-icons-2 row d-flex">
        {faqData.map((item) => (
          <li className="col-lg-6 col-sm-6 col-12">
            <h3 className='text-heading-5 mb-10'>
              {item.title}
            </h3>
            <p className="text-body-text color-gray-500">
              {item?.content}
            </p>
          </li>))}
      </ul>
    </div>
  )

}

export default Faq