import React from 'react';

const data = [
  {
    title: 'About the Company',
    icon: '/assets/imgs/page/homepage2/icon-company.svg',
    content:
      'Our company is a leading furniture enterprise dedicated to providing exceptional furniture and accessories.',
  },
  {
    title: 'History of Information',
    icon: '/assets/imgs/page/homepage2/icon-history.svg',
    content:
      "Our company has a rich and inspiring history. It all started [insert specific information about the company's origin, such as the year and circumstances of establishment.",
  },
  {
    title: 'Company Mission',
    icon: '/assets/imgs/page/homepage2/icon-mission.svg',
    content:
      'At our company, our mission is to empower individuals to express their unique personalities through furniture. We believe that furniture goes beyond mere functionality—it is a powerful form of self-expression.',
  },
];

const OverviewComponent = () => {
  return (
    <div className="list-icons mt-50">
      {data.map((section, index) => (
        <div className="item-icon none-bd" key={index}>
          <span className="icon-left">
            <img src={section.icon} alt={section.title} />
          </span>
          <h4 className="text-heading-4">{section.title}</h4>
          <p className="text-body-excerpt color-gray-600 mt-15">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewComponent;
