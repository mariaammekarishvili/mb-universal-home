import { businessSocials } from "../../data/BusinessContact";
import menu_data from "../../data/MenuData";
import project_data from "../../data/ProjectData";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

const gallery_data = project_data.map((project) => ({
  src: project.images[0] ?? project.thumb,
  title: project.title,
}));

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const slides = gallery_data.map((image) => ({
    src: image.src,
  }));

  return (
    <>
      <footer>
        <div className="footer-main bg-color-1 p-relative">
          <div
            className="footer-shape-1"
            style={{
              backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)`,
            }}
          ></div>
          <div
            className="footer-shape-2"
            style={{
              backgroundImage: `url(/assets/imgs/footer/shape-f-2.png)`,
            }}
          ></div>
          <div className="footer-top section-space-medium">
            <div className="small-container">
              <div className="row g-4 justify-between" style={{ justifyContent: "space-between" }}>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-1">
                    <figure className="image">
                      <img
                        src="/assets/imgs/logo/logo-white.png"
                        style={{ height: "95px" }}
                        alt=""
                      />
                    </figure>
                    <p className="mt-20 mb-10">
                      Expert Drywall Installation & Framing
                    </p>
                    <p>
                      {" "}
                      Building Excellence, Crafting Interiors, and Delivering
                      Perfection Across NJ
                    </p>
                    <div className="working-hours">
                      <h6 className="text-white mb-20">Working Hours:</h6>
                      <ul className="text-white">
                        <li>
                          Mon - Sat:{" "}
                          <span className="fw-lighter">07:00AM - 6:00PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-2 pl-50">
                    <h4 className="mb-30 footer-title">Quick Links</h4>
                    <ul className="service-list">
                      {menu_data.map((item) => (
                        <li key={item.id}>
                          <Link to={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-2">
                    <h4 className="mb-30 footer-title">Our Projects</h4>
                    <ul className="service-list">
                      {project_data.map((project) => (
                        <li key={project.id}>
                          <Link to={`/projects/${project.page}`}>
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget-4 pr-30">
                    <h4 className="mb-20 footer-title mb-30">Our Gallery</h4>
                    <div className="footer-gallery p-relative">
                      {gallery_data.map((gallery, i) => (
                        <a
                          key={i}
                          onClick={() => handleOpen(i)}
                          className="popup-image"
                          style={{
                            padding: 0,
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={gallery.src}
                            alt={gallery.title}
                            width={130}
                            height={100}
                            loading="lazy"
                            style={{
                              display: "block",
                              width: "130px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="small-container">
            <div className="footer-bottom pt-30 pb-30">
              <div className="left-area p-relative">
                <span>© MB Universal Home</span>
              </div>
              <div className="footer-socials p-relative">
                {businessSocials.map((social) => (
                  <span key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  </span>
                ))}
              </div>
              <div className="right-area p-relative">
                <span>
                  <Link to="#">Terms & Condition</Link>
                </span>
                <span>
                  <Link to="#">Privacy Policy</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </>
  );
};

export default Footer;
