import { Link } from "react-router-dom";

interface AboutUS {
    title: string,
    backgroundImage: string,
    content: string,
    link: string
    className: string
}

const AboutUsItem: React.FC<AboutUS> = ({ title, backgroundImage, content, link, className }) => {
    return (
        <>
            <div className="col-lg-4 col-sm-12 about-us_item">
                <div className={`card-grid-1 ${className} hover-up`}>
                    <div className="card-about">
                        <div className="h-full">
                            <div className="grid-1-img">
                                <img
                                    src={backgroundImage}
                                    alt="Moirai"
                                />
                            </div>
                            <h3 className="text-heading-3 mt-20">{title}</h3>
                            <p className="text-body-excerpt mt-20">{content}</p>
                        </div>
                        <div className="mt-30">
                            <Link to={link} className="btn btn-default btn-white icon-arrow-right">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default AboutUsItem


