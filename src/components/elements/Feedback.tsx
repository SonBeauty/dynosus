import React from "react";
import { Link } from "react-router-dom";

interface FeedbackProp {
  username: String;
  avatarUrl: String;
  job: string;
  title: String;
  content: string;
}

interface FeedbackProps {
  feedbackStyle: String;
  feedbackData?: FeedbackProp[];
}

const Feedback: React.FC<FeedbackProps> = ({ feedbackStyle, feedbackData }) => {
  return (
    <section className={`section-box pb-20 mt-100 ${feedbackStyle}`}>
      <div className="container mt-60">
        <div className="row">
          <div className="col-lg-5 mb-30"><span className="tag-1 color-gray-900">What Our Clients Say</span>
            <h3 className="text-heading-1 mt-30">Don&apos;t Take Our Word For It. See What Our Customers Say.</h3>
            <p className="text-body-lead-large mt-30" style={{ color: "#000" }}>Delivering the highest quality items is our commitment, and ensuring exceptional customer experiences is always our top priority.</p>
            <div className="mt-40">
              <Link to="#" className="btn btn-black icon-arrow-right-white">Learn More</Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
              {feedbackData && feedbackData.map((fb, i: number) =>
                <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                  <div className="card-grid-style-2 card-square hover-up mb-20">
                    <p className="text-body-text color-gray-600 text-comment">
                      {fb.content}
                    </p>
                    <div className="box-img-user">
                      <div className="img-user img-user-round">
                        <img src={`/assets/imgs/page/homepage2/${fb.avatarUrl}.png`} alt="Dionysus" />
                      </div>
                      <h4 className="text-body-lead color-gray-900 mb-5">{fb.username}</h4>
                      <p className="text-body-text-md">{fb.job}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Feedback;