import { Link } from "react-router-dom";
import React from "react";

interface DataType {
  image: string;
  sub_title: string;
  title: string;
  feature_list: {
    id: number;
    icon: string;
    title: string;
  }[];
}

const choose_data: DataType[] = [
  {
    image: "/assets/imgs/service/service-1.jpg",
    sub_title: "Drywall Installation & Finishing",
    title:
      "Expert sheetrock hanging, precision taping, and multi-coat mudding delivering perfectly smooth, paint-ready walls and ceilings for any interior space.",
    feature_list: [
      { id: 1, icon: "icon-team-1", title: "Residential & Commercial Sheetrock Hanging" },
      { id: 2, icon: "icon-target", title: "Professional Taping, Mudding & Sanding" },
      { id: 3, icon: "icon-help", title: "Soundproofing & Moisture-Resistant Drywall Options" },
      { id: 4, icon: "icon-help", title: "Flawless, Seamless, Paint-Ready Finishes" },
    ],
  },
  {
    image: "/assets/imgs/service/service-2.JPEG",
    sub_title: "Custom Wood & Metal Working",
    title:
      "Professional metal stud framing, structural wood framing, architectural woodwork, and custom carpentry built strictly to code for residential and commercial projects.",
    feature_list: [
      { id: 1, icon: "icon-round-check", title: "Metal Stud & Wood Framing Layouts" },
      { id: 2, icon: "icon-round-check", title: "Structural Support & Partition Walls" },
      { id: 3, icon: "icon-round-check", title: "Custom Carpentry & Architectural Woodwork" },
      { id: 4, icon: "icon-round-check", title: "Precision Execution Built Strictly to Code" },
    ],
  },
  {
    image: "/assets/imgs/service/service-3.jpg",
    sub_title: "Drop Ceiling Services",
    title:
      "Professional suspended and acoustic ceiling installations designed for commercial offices, retail environments, and modern residential spaces.",
    feature_list: [
      { id: 1, icon: "icon-round-check", title: "Suspended & Acoustic Ceiling Systems" },
      { id: 2, icon: "icon-round-check", title: "Perfect Utility & Lighting Integration" },
      { id: 3, icon: "icon-round-check", title: "Commercial Offices & Retail Fit-Outs" },
      { id: 4, icon: "icon-round-check", title: "Sound Absorption & Modern Aesthetics" },
    ],
  },
  {
    image: "/assets/imgs/service/service-4.jpg",
    sub_title: "Precision Tile Work Services",
    title:
      "Expert tile installation for floors, walls, backsplashes, and bathrooms, combining precise alignment with long-lasting durability.",
    feature_list: [
      { id: 1, icon: "icon-round-check", title: "Floor & Wall Tile Installation" },
      { id: 2, icon: "icon-round-check", title: "Custom Kitchen Backsplashes" },
      { id: 3, icon: "icon-round-check", title: "Bathroom & Shower Tiling" },
      { id: 4, icon: "icon-round-check", title: "Precise Leveling & Grouting" },
    ],
  },
  {
    image: "/assets/imgs/service/service-5.jpg",
    sub_title: "Professional Painting Services",
    title:
      "High-end interior painting services that add the perfect finishing touch, utilizing premium paints for clean lines and vibrant, lasting results.",
    feature_list: [
      { id: 1, icon: "icon-round-check", title: "Premium Interior Wall & Ceiling Painting" },
      { id: 2, icon: "icon-round-check", title: "Trim, Baseboard & Molding Painting" },
      { id: 3, icon: "icon-round-check", title: "Meticulous Surface Prep & Priming" },
      { id: 4, icon: "icon-round-check", title: "Clean Lines & Flawless Coats" },
    ],
  },
];

const ServiceNew = () => {
  return (
    <>
      {choose_data.map(({ image, sub_title, title, feature_list }, index) => (
        <section key={sub_title} className="choose-section bg-color-1 section-space-top p-relative">
          <div className="bg-image"></div>
          <div
            className="shape-image"
            style={{ backgroundImage: `url(/assets/imgs/shapes/shape-15.png)` }}
          ></div>
          <div className="small-container">
            <div className={`row g-4 ${index % 2 === 1 ? "flex-lg-row-reverse" : ""}`}>
              <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
                <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">{sub_title}</span>
                  <h4 className="text-white text-sm! mt-10">{title}</h4>
                </div>
                {feature_list.map((item) => (
                  <React.Fragment key={item.id}>
                    <div
                      className="choose-area-icon-box mb-15 mt-10! wow items-center fadeInRight"
                      data-wow-delay=".5s"
                    >
                      <div className="content">
                        <h5>
                          <Link to="/services">• {item.title}</Link>
                        </h5>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="1.2s">
                <figure className="image m-img" style={{ display: "block", padding: 0 }}>
                  <img
                    src={image}
                    alt={sub_title}
                    style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceNew;
