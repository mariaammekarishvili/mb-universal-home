import { Link } from "react-router-dom";
import React from "react";

interface DataType {
  sub_title: string;
  title: string;
  feature_list: {
    id: number;
    icon: string;
    title: string;
    desc: string;
  }[];
}

const choose_data: DataType = {
  sub_title: "why choose us",
  title: "What Makes Us Different",
  feature_list: [
    {
      id: 1,
      icon: "icon-team-1",
      title: "Quality Workmanship",
      desc: "We provide professional drywall, drop ceiling, carpentry, tile installation, and painting services for residential and commercial properties throughout New Jersey. Every project is approached with care, precision, and attention to detail.",
    },
    {
      id: 2,
      icon: "icon-target",
      title: "Clear Communication & Dependable Service",
      desc: "We believe every successful project starts with clear communication and realistic expectations. From the initial consultation to the final cleanup, we keep our clients informed and work hard to meet agreed-upon deadlines.",
    },
    {
      id: 3,
      icon: "icon-help",
      title: "Quality Materials & Professional Standards",
      desc: "We focus on quality materials, proper installation techniques, and safe work practices to deliver durable, dependable results that stand the test of time.",
    },
  ],
};

const { sub_title, title, feature_list } = choose_data;

const Choose = () => {
  return (
    <section className="choose-section bg-color-1 section-space-top p-relative">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(/assets/imgs/bg/choose-bg.jpg)` }}
      ></div>
      <div
        className="shape-image"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-15.png)` }}
      ></div>
      <div className="small-container">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
            <div
              className="title-box mb-50 wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <span className="section-sub-title">{sub_title}</span>
              <h3 className="section-title mt-10">{title}</h3>
            </div>
            {feature_list.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  className="choose-area-icon-box mb-15 wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="icon-box p-relative">
                    <i className={item.icon}></i>
                  </div>
                  <div className="content">
                    <h5>
                      <Link to="/services">{item.title}</Link>
                    </h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
          <div
            className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft"
            data-wow-delay="1.2s"
          >
            <figure className="image m-img">
              <img
                src="/assets/imgs/bg/10.jpg"
                width="600"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
