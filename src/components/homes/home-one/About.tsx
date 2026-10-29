import { businessContact } from "../../../data/BusinessContact";

import { Link } from "react-router-dom";
import Count from "../../common/Count";

interface DataType {
  sub_title: string;
  title: string;
  desc: string;
  feature_list: {
    id: number;
    list: string[];
  }[];
}

const about_data: DataType = {
  sub_title: "About Us",
  title: "Devoted to Delivering Top Notch Drywall & Renovation Solutions",
  desc: " With over 15 years of combined experience, MB Universal Home provides expert drywall installation, metal framing, smooth taping, and complete interior finishes. We serve residential and commercial clients across NY, NJ and PA with unmatched precision and reliability.",
  feature_list: [
    {
      id: 1,
      list: [
        "Precision Drywall Installation",
        "100% Satisfaction Guarantee",
        "Professional & Skilled Crew",
      ],
    },
    {
      id: 2,
      list: [
        "200+ Completed Projects",
        "Expert Framing & Finishing",
        "Clean & Reliable Work",
      ],
    },
  ],
};

const { sub_title, title, desc, feature_list } = about_data;

interface PropType {
  style: boolean;
}

const About = ({ style }: PropType) => {
  return (
    <section
      className={`about-2-section p-relative fix section-space ${style ? "bg-color-3 is-dark" : ""}`}
    >
      <div
        className="bg-shape-1"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-30.png)` }}
      ></div>
      <div
        className="bg-shape-2"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-31.png)` }}
      ></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div
              className="about-2-image-area p-relative wow fadeInLeft"
              data-wow-delay="500ms"
            >
              <figure className="main-image m-img">
                <img
                  src="/assets/imgs/about/about-3.jpg"
                  width={452}
                  height={548}
                  style={{
                    width: "452px",
                    maxWidth: "100%",
                    height: "548px",
                    objectFit: "cover",
                    display: "block",
                  }}
                  alt=""
                />
              </figure>
              {/* <div className="small-image">
                {/* <img src="/assets/imgs/about/about-4.jpeg" alt="" /> 
              </div> */}
              <div className="icon-box">
                <div className="icon">
                  <i className="icon-prize-1"></i>
                </div>
                <div className="content">
                  <h3 className="mb-10">
                    <span className="counter">
                      <Count number={10} />
                    </span>
                    +
                  </h3>
                  <p>World Best Drywalling Award Got</p>
                </div>
              </div>
              <div
                className="shape-1"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-29.png)`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="about-2-content-area pl-50">
              <div
                className="title-box mb-35 wow fadeInRight"
                data-wow-delay=".5s"
              >
                <span className="section-sub-title">{sub_title}</span>
                <h3 className="section-title mt-10">{title}</h3>
              </div>
              <p className="mb-35">{desc}</p>
              <div className="row mb-45">
                {feature_list.map((item) => (
                  <div key={item.id} className="col-lg-6">
                    <ul className="list-area">
                      {item.list.map((list, i) => (
                        <li key={i} className="mb-10">
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="about-2-btn-area">
                <Link className="primary-btn-1 btn-hover" to="/about">
                  about us &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
                </Link>
                <div className="call-us">
                  <div className="icon-1">
                    <i className="fal fa-phone-volume"></i>
                  </div>
                  <div className="content p-relative">
                    <span>Call Us Now</span>
                    <h5>
                      <Link to={businessContact.phoneHref}>
                        {businessContact.phoneDisplay}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
