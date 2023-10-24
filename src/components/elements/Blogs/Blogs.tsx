import { Link } from 'react-router-dom';
import React from 'react';

interface BlogData {
  tag: string;
  title: string;
  imageUrl: string;
  link: string;
  bgColor: string;
}
interface BlogsProps {
  title?: string;
  description?: string;
  blogsData?: BlogData[]
}

const BlogsComponent: React.FC<BlogsProps> = ({ title, description, blogsData }) => {
  return (
    <section className="section-box">
      {
        title &&
        <div className="container mt-60">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="text-heading-1 mb-10">{title}</h3>
              {description && <p className="text-body-lead-large color-gray-600">{description}</p>}
            </div>
            <div className="col-lg-4 text-lg-end text-start pt-30">
              <Link to="/#" className="btn btn-black icon-arrow-right-white">
                View More
              </Link>
            </div>
          </div>
        </div>
      }
      <div className="container mt-60">
        <div className="row">
          {
            blogsData && blogsData?.map((blog, i) =>
              <div className="col-lg-4 col-md-6 col-sm-12 pr-30 mb-20" key={i}>
                <div className="card-grid-style-4">
                  <span className="tag-dot mb-2">{blog.tag}</span>
                  <Link to={blog.link}><a className="text-heading-5 color-gray-900 blog-header">
                    {blog.title}</a>
                  </Link>
                  <div className={`grid-4-img mt-3 ${blog.bgColor}`}>
                    <Link to={blog.link}>
                      <a>
                        <img
                          src={blog.imageUrl}
                          alt="Dionysus"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section >
  );
};

export default BlogsComponent;