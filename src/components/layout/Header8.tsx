import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface HeaderProps {
    handleOpen: () => void;
    headerStyle: string;
}

const Header8: React.FC<HeaderProps> = ({ handleOpen, headerStyle }) => {
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
            <header className={scroll ? `${headerStyle} header pt-0 sticky-bar stick header-type-2 ` : `${headerStyle} header pt-0 sticky-bar header-type-2`}>
                <div className="w-full bg-green-900">
                    <div className="container">
                        <div className="header-contact-info">
                            <div className="color-white"><span>66 avenue des Champs, 75008, Paris, France</span></div>
                            <div className="color-green-100 pl-10">
                                <span>(+01) - 456 789</span>
                                <br className="visible-phone visible-tablet" />
                                <p>vzenlabs@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-10">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link to="/" className="d-flex">
                                    {headerStyle ? <img width={187} height={50} alt="Moirai" src={`/assets/imgs/template/${headerStyle.includes("normal-logo") ? "logo" : "logo-white"}.svg`} /> : <img width={187} height={50} alt="Moirai" src="/assets/imgs/template/logo.svg" />}
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children">
                                            <Link to="#" className="active">Home</Link>
                                            <ul className="sub-menu two-col">
                                                <li>
                                                    <Link to="/" ><i className="fi fi-rr-home" />Homepage - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-2" ><i className="fi fi-rr-home" />Homepage - 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-3" ><i className="fi fi-rr-home" />Homepage - 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-4" ><i className="fi fi-rr-home" />Homepage - 4</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-5" ><i className="fi fi-rr-home" />Homepage - 5</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-6" ><i className="fi fi-rr-home" />Homepage - 6</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-7" ><i className="fi fi-rr-home" />Homepage - 7</Link>
                                                </li>
                                                <li>
                                                    <Link to="/index-8" ><i className="fi fi-rr-home" />Homepage - 8</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link to="#" >About</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/#" ><i className="fi fi-rr-star" />About Us - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" ><i className="fi fi-rr-star" />About Us - 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" ><i className="fi fi-rr-star" />About Us - 3</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link to="#" >Services</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-gem" />Services - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-gem" />Services - 2</Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-database" />Pricing - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-database" />Pricing - 2</Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-headset" />FAQs - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-headset" />FAQs - 2</Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-briefcase" />Career</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-briefcase" />Career Detail</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link to="#" >Product</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/#" className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 1</Link></li>
                                                <li><Link to="/#" className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 2</Link></li>
                                                <li><Link to="/#" className="closer"><i className="fi fi-rr-edit"></i>Product Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link to="#" >Blog</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-edit" />Blog Archive - 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#" className="closer"><i className="fi fi-rr-edit" />Blog Archive - 2</Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link to="/#" ><i className="fi fi-rr-document-signed" />Blog Single</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#" >Contact</Link>
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
                                <Link to="/page-signup" className="btn btn-black hover-up icon-arrow-right-white-header6">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header8;