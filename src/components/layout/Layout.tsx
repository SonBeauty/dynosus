import { useState } from 'react';
import Sidebar from "./Sidebar";
import BackToTop from "../elements/BackToTop";
import { Header } from './Header';
import { Footer } from './Footer';

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

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible")
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
      <Header handleOpen={handleOpen} headerStyle={headerStyle ?? ""} />
      <Sidebar openClass={openClass} />
      <main className="main">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;