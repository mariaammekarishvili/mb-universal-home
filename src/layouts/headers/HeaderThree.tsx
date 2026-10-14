import { businessContact } from "../../data/BusinessContact";
import NavMenu from "./Menu/NavMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import HeaderTwoTop from "./Menu/HeaderTwoTop";
import UseSticky from "../../hooks/UseSticky";

const HeaderThree = () => {
  const { sticky } = UseSticky();
  const [offCanvas, setOffCanvas] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <header>
        <HeaderTwoTop />
        <div
          id="header-sticky"
          className={`header-area ${sticky ? "sticky" : ""}`}
        >
          <div className="large-container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="/assets/imgs/logo/logo.png" style={{ height: "87px" }} alt="header logo" />
                    </Link>
                  </div>
                </div>
                <div
                  className="header-right d-flex justify-content-end w-full"
                  style={{ width: "100%" }}
                >
                  <div
                    className="mean__menu-wrapper d-none d-lg-block !m-auto"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="main-menu">
                      <nav id="mobile-menu mr-auto">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-action">
                    <div className="header-link-1">
                      <div className="icon">
                        <i className="fal fa-phone-volume"></i>
                      </div>
                      <div className="content">
                        <span>Call Us Now</span>
                        <h6>
                          <Link to={businessContact.phoneHref}>
                            {businessContact.phoneDisplay}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <a
                        className="bar-icon"
                        onClick={() => setOffCanvas(true)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-light fa-bars-sort"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas
        style={false}
        offCanvas={offCanvas}
        setOffCanvas={setOffCanvas}
      />
      <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
    </>
  );
};

export default HeaderThree;
