import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    handleOpen: () => void;
    headerStyle: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    });
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <a href="/" className="d-flex">
                                    {headerStyle ? <img alt="Dionysus" src={`/assets/imgs/template/${headerStyle.includes("normal-logo") ? "logo" : "logo-white"}.svg`} /> : <img alt="Dionysus" src="/assets/imgs/template/logo.svg" />}
                                </a>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <Link to="#" className="active">Home</Link>
                                            <ul className="sub-menu two-col">
                                                <li>
                                                    <Link to="/"><i className="fi fi-rr-home" />Homepage - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-2"><i className="fi fi-rr-home" />Homepage - 2</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Service</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Product</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link to="/page-signup" className="btn btn-default hover-up icon-arrow-right">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderComponent;