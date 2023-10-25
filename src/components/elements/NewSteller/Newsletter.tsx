import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsletterProps {
  newsletterStyle?: string;
  newsletterImgUrl: string;
  chartImgUrl: string;
}
interface StyleProps {
  tag: string;
  title: string;
  content: string;
  terms: string;
  button: string;
  bgColor: string;
}

const NewsletterComponent: React.FC<NewsletterProps> = ({ newsletterImgUrl, chartImgUrl, newsletterStyle }) => {
  const [styles, setStyle] = useState<StyleProps>({
    tag: 'color-gray-500',
    title: '',
    content: 'color-gray-500',
    terms: '',
    button: 'btn-send',
    bgColor: 'bg-6'
  });

  return (
    <section className="section-box overflow-visible mt-100 mb-50">
      <div className="container mt-70">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className={`box-newsletter position-relative ${styles.bgColor}`}>
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <span className={`text-body-capitalized text-uppercase ${styles.tag}`}>
                    newsletter
                  </span>
                  <h4 className={`text-heading-2 mb-10 mt-10 ${styles.title}`}>
                    Contact for selling overview
                  </h4>
                  <p className={`text-body-text ${styles.content}`}>
                    By clicking the button, you are agreeing with our <Link to="/page-terms" className={styles.terms}>Term &amp; Conditions
                    </Link>
                  </p>

                  <div className="box-form-newsletter mt-30">
                    <form className="form-newsletter">
                      <input
                        className="input-newsletter"
                        placeholder="Enter you mail .."
                      />
                      <button className={`btn ${styles.button}`} />
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                  <div className="block-chart shape-1">
                    <img
                    width={255} height={193}
                      src={chartImgUrl}
                      alt="Dionysus"
                    />
                  </div>
                  <div className="img-responsive img-newsletter">
                    <img
                      src={newsletterImgUrl}
                      alt="Dionysus"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterComponent;
