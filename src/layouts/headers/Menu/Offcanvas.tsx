import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
  offCanvas: boolean;
  setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
  return (
    <>
      <div className="fix">
        <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      src="/assets/imgs/logo/logo.png"
                      alt="Header Logo"
                      style={{ width: "95px" }}
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvas(false)}>
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu mobile-menu-wrapper fix mb-40 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    <MobileMenu />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}
      ></div>
      <div
        onClick={() => setOffCanvas(false)}
        className="offcanvas__overlay-white"
      ></div>
    </>
  );
};

export default Offcanvas;
