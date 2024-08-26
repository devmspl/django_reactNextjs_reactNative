"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menus from "./component/menus";
import logo from "@/assets/dashboard/images/besoin-high-resolution-logo-transparent.png";
import CategoryDropdown from "./component/category-dropdown";
import LoginModal from "@/app/components/common/popup/login-modal";
import useSticky from "@/hooks/use-sticky";
import avatar from "@/assets/dashboard/defaultg.png";
import LogoutModal from "@/app/components/common/popup/logout-modal";

const Header = () => {
  const { sticky } = useSticky();
  const [forgetPasswordPageOpen, setForgetPasswordPageOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // Add userType state

  const abcd =
    typeof window !== "undefined" ? localStorage.getItem("IsLoginData") : null;
  const loginData = abcd ? JSON.parse(abcd) : null;

  useEffect(() => {
    if (loginData) {
      setIsLoggedIn(true);
      setUserType(loginData.type); // Set userType based on loginData type
    } else {
      setIsLoggedIn(false);
      setUserType(null);
    }
  }, [loginData]);

  const toggleLogin = () => {
    if (loginData) {
      localStorage.removeItem("IsLoginData");
      setIsLoggedIn(false);
      setUserType(null); // Clear userType on logout
      window.location.reload();
    }
  };

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${sticky ? "fixed" : ""
          }`}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    height={40}
                    width={150}
                    priority
                  />
                </Link>
              </div>
              <div className="right-widget ms-auto order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  {!isLoggedIn && (
                    <li className="d-none d-md-block">
                      <Link href="/register" className="job-post-btn tran3s">
                        Post Jobs/Find Jobs
                      </Link>
                    </li>
                  )}

                  <li className="d-none d-md-block">
                    {isLoggedIn ? (
                      <a
                        href="/"
                        className="login-btn-one"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        onClick={() => toggleLogin()}
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="login-btn-one"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        Login
                      </a>
                    )}
                  </li>

                  {isLoggedIn && userType === "employee" ? null : (
                    <li className="d-none d-md-block ms-4">
                      <Link href="/employee-view" className="btn-one">
                        Hire Top Talents
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 ms-3 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav align-items-lg-center">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" width={100} priority />
                        </Link>
                      </div>
                    </li>
                    {!forgetPasswordPageOpen && (
                      <>
                        <li className="nav-item dropdown category-btn mega-dropdown-sm">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                          >
                            <i className="bi bi-grid-fill"></i> Category
                          </a>
                          {/* CategoryDropdown start */}
                          <CategoryDropdown />
                          {/* CategoryDropdown end */}
                        </li>
                        {/* menus start */}
                        <Menus />
                        {/* menus end */}
                      </>
                    )}
                    {!isLoggedIn && (
                      <>
                        <li className="d-md-none">
                          <Link href="/register" className="job-post-btn tran3s">
                            Post Jobs/Find Jobs
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal onlogin={toggleLogin} />
      {/* <LogoutModal  /> */}
      {/* login modal end */}
    </>
  );
};

export default Header;
