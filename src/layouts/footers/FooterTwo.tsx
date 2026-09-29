import { businessContact, businessSocials } from "../../data/BusinessContact";
import { Link } from "react-router-dom"
import { JSX } from "react";

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fa-light fa-envelope",
      title: "Email:",
      info: (<><Link to={businessContact.emailHref}>{businessContact.email}</Link></>),
   },
   {
      id: 2,
      icon: "fa-light fa-phone-alt",
      title: "Phone Call:",
      info: (<><Link to={businessContact.phoneHref}>{businessContact.phoneDisplay}</Link></>),
   },
   {
      id: 3,
      icon: "fa-light fa-clock",
      title: "Opening Hours:",
      info: (<><p className="m-0">Mon - Sat: 10.00 AM - 4.00 PM</p></>),
   },
];

const FooterTwo = () => {
   return (
      <footer>
         <div className="footer-main bg-color-1 p-relative">
            <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
            <div className="footer-shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-50.png)` }}></div>
            <div className="footer-top section-space-medium">
               <div className="small-container">
                  <div className="row g-4">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-1">
                           <figure className="image">
                              <img src="/assets/imgs/logo/logo-white.svg" alt="" />
                           </figure>
                           <p className="mt-40 mb-40"> Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                           <div className="footer-socials p-relative">
                        {businessSocials.map((social) => (
                           <span key={social.name}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a></span>
                        ))}
                     </div>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2 pl-50">
                           <h4 className="mb-30 footer-title">Quick Links</h4>
                           <ul className="service-list">
                              <li><Link to="/about">About Us</Link></li>
                              <li><Link to="/team">Our Team</Link></li>
                              <li><Link to="/services">Our Services</Link></li>
                              <li><Link to="/blog-grid">Latest Blog</Link></li>
                              <li><Link to="/contact">Contact Us</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2">
                           <h4 className="mb-30 footer-title">Our Services</h4>
                           <ul className="service-list">
                              <li><Link to="/service-details">Damage Roofing</Link></li>
                              <li><Link to="/service-details">Roof Repair</Link></li>
                              <li><Link to="/service-details">Roof Installation</Link></li>
                              <li><Link to="/service-details">Roof Animation</Link></li>
                              <li><Link to="/service-details">Modified Roofing</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-4">
                           <h4 className="mb-20 footer-title">Contact Info</h4>
                           <ul className="footer-contact-info-widget p-relative">
                              {contact_data.map((item) => (
                                 <li key={item.id}>
                                    <div className="icon">
                                       <i className={item.icon}></i>
                                    </div>
                                    <div className="info-details">
                                       <h6 className="mb-10">{item.title}</h6>
                                       {item.info}
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="small-container">
               <div className="footer-bottom pt-30 pb-30 p-relative">
                  <div className="left-area">
                     <span>© MB Universal Home</span>
                  </div>
                  <div className="right-area">
                     <span><Link to="#">Terms & Condition</Link></span>
                     <span><Link to="#">Privacy Policy</Link></span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
