import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  handleOpen: () => void;
  headerStyle: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(false);
  const { pathname } = useLocation();

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
                      <Link to="#">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/" className={`${pathname === '/' && 'active'}`}><i className="fi fi-rr-home" />Homepage - 1</Link>
                        </li>
                        <li>
                          <Link to="/index-2" className={`${pathname === '/index-2' && 'active'}`}><i className="fi fi-rr-home" />Homepage - 2</Link>
                        </li>
                        <li>
                          <Link to="/index-3" className={`${pathname === '/index-3' && 'active'}`}><i className="fi fi-rr-home" />Homepage - 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about" className={`${pathname === '/about' && 'active'}`}>About Us</Link>
                    </li>
                    <li className="has-children">
                      <Link to="#">Service</Link>
                      <ul className="sub-menu">
                        <li><Link to="/service" className={`${pathname === '/service' && 'active'}`}><i className="fi fi-rr-gem" />Service</Link></li>
                        <li><Link to="/faqs" className={`${pathname === '/faqs' && 'active'}`}><i className="fi fi-rr-headset" />FAQs</Link></li>
                        <li><Link to="/pricing" className={`${pathname === '/pricing' && 'active'}`}><i className="fi fi-rr-headset" />Pricing</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/shop" className={`${pathname === '/shop' && 'active'}`}>Product</Link>
                    </li>
                    <li>
                      <Link to="/blog" className={`${pathname === '/blog' && 'active'}`}>Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact" className={`${pathname === '/contact' && 'active'}`}>Contact</Link>
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