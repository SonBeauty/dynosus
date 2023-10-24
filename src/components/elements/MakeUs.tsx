import React from 'react'

const items = [
  {
    iconSrc: "/assets/imgs/page/homepage2/icon-quality.svg",
    title: "1.   Quality",
    description:
      "We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality.",
  },
  {
    iconSrc: "/assets/imgs/page/homepage2/icon-trendsetting.svg",
    title: "2.  Aesthetic",
    description:
      "Our team of experienced experts keeps a pulse on the latest trends and emerging styles.",
  },
  {
    iconSrc: "/assets/imgs/page/homepage2/icon-community.svg",
    title: "3. Community ",
    description:
      "We actively engage with our community through various initiatives.",
  },
];

const MakeUs = () => {
  return (
    <section className="section-box mt-100">
      <div className="container mt-60">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              What Makes Us Outstanding
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              At our furniture shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience. Here are a few factors that set us apart
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-60">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons">
                <div className="item-icon">
                  <span className="icon-left">
                    <img src={item.iconSrc} alt="Moirai" />
                  </span>
                  <div className="career-category">
                    <h4 className="text-heading-4">{item.title}</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MakeUs