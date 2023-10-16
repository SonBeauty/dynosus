import { Link } from "react-router-dom";

export const LogoComponent: React.FC<{ logo: string }> = ({ logo }) => {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
            <Link to="/#" className="item-logo box-hover-shadow hover-up">
                <img alt="Moirai" className="w-100" src={logo} />
            </Link>
        </div>
    );
};