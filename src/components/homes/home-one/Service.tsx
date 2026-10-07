import { Link } from "react-router-dom"
import { useState } from "react";

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   {
      icon: "icon-home-1",
      title: "Professional Painting Services",
   },
   {
      icon: "icon-roof-2",
      title: "Drywall Installation",
   },
   {
      icon: "icon-hammer",
      title: "Wood & Metal Working",
   },
   {
      icon: "icon-roof-4",
      title: "Tile Work Services",
   },
];

interface DataType {
   id: number;
   thumb: string;
   title: string;
   desc: string;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Professional Painting Services",
      desc: "Expert interior and exterior painting, priming, and surface preparation. We give your newly renovated spaces a polished, vibrant, and long-lasting finish.",
      list: ["High-End Interior Painting", "Surface Preparation & Priming", "Premium Quality Coatings"],
   },
   {
      id: 2,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Drywall Installation & Framing",
      desc: "Expert sheetrock hanging, metal and wood framing, and multi-coat joint compound finishing. We build sturdy walls and ceilings with smooth, paint-ready surfaces.",
      list: ["Precise Wall & Ceiling Hanging", "Seamless Taping & Mudding", "Professional & Clean Crew"],
   },
   {
      id: 3,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Custom Wood & Metal Working",
      desc: "Professional metal stud framing, structural wood framing, architectural woodwork, and custom carpentry built strictly to code for residential and commercial projects.",
      list: ["Metal & Wood Stud Framing", "Custom Carpentry & Woodwork", "Precision Structural Layout"],
   },
   {
      id: 4,
      thumb: "/assets/imgs/resources/service-tab-1.jpg",
      title: "Professional Tile Work",
      desc: "Exceptional tile installation for floors, walls, kitchens, and bathrooms. We deliver durable, beautiful, and precise tile layouts tailored to your interior design.",
      list: ["Kitchen & Bathroom Tiling", "Floor & Wall Tile Setting", "Clean & Detailed Finish"],
   },
];

interface PropType {
   style: boolean;
}

const Service = ({ style }: PropType) => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   return (
      <section className={`service-tab-section section-space bg-color-1 p-relative ${style ? "is-dark" : ""}`}>
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
         <div className="small-container">
            <div className="service-tab-title-area mb-70">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">WHAT WE DO</span>
                  <h3 className="section-title mt-10 text-white p-relative">Delivering High Quality Interior <br /> & Renovation Services</h3>
               </div>
               <Link className="primary-btn-4 btn-hover mt-20" to="/services">
                  all services &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link>
            </div>

            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                     <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item" role="presentation">
                              <a className={`nav-link ${activeTab === index ? "active" : ""}`} onClick={() => handleTabClick(index)} id="modified-roofing-tab" style={{ cursor: "pointer" }}>
                                 <div className="icon-box">
                                    <i className={tab.icon}></i>
                                 </div>
                                 {tab.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="service-tab-details-area">
                     <div className="tab-content" id="myTabContent">
                        {service_data.map((item, index) => (
                           <div key={item.id} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="modified-roofing-tab-pane">
                              <div className="service-tab-content p-relative">
                                 {!style && <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>}
                                 <figure className="image p-relative">
                                    <img src={item.thumb} alt="" />
                                 </figure>
                                 <div className="content p-relative">
                                    <h4>{item.title}</h4>
                                    <p className="pt-15 pb-10">{item.desc}</p>
                                    <ul className="tab-list-content">
                                       {item.list.map((list, i) => (
                                          <li key={i}>{list}</li>
                                       ))}
                                    </ul>
                                    <Link className="primary-btn-1 btn-hover mt-20" to="/services">
                                       Read more &nbsp; | <i className="icon-right-arrow"></i>
                                       <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Service
