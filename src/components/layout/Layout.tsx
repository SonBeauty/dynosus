import { useState } from 'react';
import Footer from "./Footer";
import Footer3 from "./Footer3";
import Footer7 from "./Footer7";
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";
import Header7 from "./Header7";
import Header8 from "./Header8";
import Sidebar from "./Sidebar";
import BackToTop from "../elements/BackToTop";
import BackToTop3 from "../elements/BackToTop3";
import BackToTop7 from "../elements/BackToTop7";
import { useLocation } from 'react-router-dom';
import Header6 from './Header6';

interface LayoutProps {
    children?: React.ReactNode;
    headTitle?: string;
    pageTitle?: string;
    pageTitleSub?: string;
    parent?: string;
    child?: string;
    pageClass?: string;
    headerStyle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, headerStyle }) => {
    const [openClass, setOpenClass] = useState('');
    const location = useLocation();

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    let headerConponent = <Header handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />;
    let footerConponent = <Footer />;
    let backToTopBtnComponent = <BackToTop />;

    switch (location.pathname) {
        case '/index-2':
            headerConponent = <Header2 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/index-3':
            headerConponent = <Header3 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            footerConponent = <Footer3 />
            backToTopBtnComponent = <BackToTop3 />
            break;
        case '/index-4':
            headerConponent = <Header4 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/index-5':
            headerConponent = <Header5 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/index-7':
            headerConponent = <Header7 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            footerConponent = <Footer7 />
            backToTopBtnComponent = <BackToTop7 />
            break;
        case '/index-8':
            headerConponent = <Header8 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/page-service-1':
            headerConponent = <Header6 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/page-service-2':
            headerConponent = <Header6 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        case '/page-about-2':
            headerConponent = <Header6 handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            break;
        default:
            headerConponent = <Header handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
            footerConponent = <Footer />
            backToTopBtnComponent = <BackToTop />
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <div className={openClass && "body-overlay-1"} onClick={handleRemove} />
            {headerConponent}
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            {footerConponent}
            {backToTopBtnComponent}
        </>
    );
};

export default Layout;