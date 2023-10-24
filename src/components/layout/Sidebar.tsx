// import Image from "next/image";
import { Link } from "react-router-dom";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface SidebarProps {
  openClass?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key: string) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="user-account">
              <img
                width={50}
                height={50}
                src="/assets/imgs/template/ava_1.png"
                alt="Dionysus"
              />
              <div className="content ml-10">
                <h6 className="user-name">
                  Hi <span className="text-brand">Steven !</span>
                </h6>
                <p className="font-xs text-muted">You have 5 new messages</p>
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key === "1"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("1")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>
                      <Link to="/">
                        <a className="active">Home</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "1"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="/">
                            <a>Homepage - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-2">
                            <a>Homepage - 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-3">
                            <a>Homepage - 3</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-4">
                            <a>Homepage - 4</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-5">
                            <a>Homepage - 5</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-6">
                            <a>Homepage - 6</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-7">
                            <a>Homepage - 7</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-8">
                            <a>Homepage - 8</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key === "2"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("2")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link to="/#">
                        <a>About</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "2"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="/#">
                            <a>About Us - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a>About Us - 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a>About Us - 3</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key === "3"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("3")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>
                      <Link to="/#">
                        <a>Service</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "3"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="/#">
                            <a className="closer">Services - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Services - 2</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Pricing - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Pricing - 2</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">FAQs - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">FAQs - 2</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Career</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Career Detail</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key === "4"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("4")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>
                      <Link to="/#">
                        <a>Pages</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "4"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="#">
                            <a>Contact</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-signup">
                            <a>Sign Up</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-login">
                            <a>Log In</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-reset">
                            <a>Reset Password</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/404">
                            <a>Error 404</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key === "5"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("5")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>
                      <Link to="/#">
                        <a>Blog</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "5"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="/#">
                            <a className="closer">Blog 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Blog 2</a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link to="/#">
                            <a>Blog Single</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key === "6"
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle("6")}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>
                      <Link to="/#">
                        <a>Product</a>
                      </Link>
                      <ul
                        className={
                          isActive.key === "6"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link to="/#">
                            <a className="closer">Shop Grid - 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a className="closer">Shop Grid - 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/#">
                            <a>Product Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link to="/#">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>Work Preferences</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>My Boosted Shots</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>My Collections</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>Account Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <a>Go Pro</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/page-login">
                      <a>Sign Out</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="site-copyright color-gray-400 ">
                Copyright 2023 © Moirai - Agency Template.
                <br />
                Designed by &nbsp;VZenLabs Team
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
