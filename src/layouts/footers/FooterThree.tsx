import { businessSocials } from "../../data/BusinessContact";
import { Link } from "react-router-dom"
import { JSX } from "react"

interface DataType {
   id: number;
   thumb: string;
   title: JSX.Element;
   date: string;
}

const latest_post_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/blog/blog-s-1.jpg",
      title: (<>Best Repairing <br /> soakage Roof..</>),
      date: "05 Dec, 2024"
   },
   {
      id: 2,
      thumb: "/assets/imgs/blog/blog-s-2.jpg",
      title: (<>Doing Things Currently..</>),
      date: "05 Dec, 2024"
   },
];

const FooterThree = () => {

   return (
      <>
         <footer>
            <div className="footer-main bg-color-1">
               <div className="footer-top section-space-medium">
                  <div className="small-container">
                     <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <img src="/assets/imgs/logo/logo-white.svg" alt="" />
                              </figure>
                              <p className="mt-40 mb-40">Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                              <div className="footer-socials">
                        {businessSocials.map((social) => (
                           <span key={social.name}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a></span>
                        ))}
                     </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className="footer-widget-2 pl-50">
                              <h4 className="mb-20 footer-title">Our Services</h4>
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
                           <div className="footer-widget-3">
                              <h4 className="mb-20 footer-title">Latest Post</h4>
                              <ul className="blog-list">
                                 {latest_post_data.map((item) => (
                                    <li key={item.id}>
                                       <div className="footer-blog-post-box mb-15">
                                          <figure className="thumb">
                                             <img src={item.thumb} alt="" />
                                          </figure>
                                          <div className="content">
                                             <span className="date"><Link to="#">{item.date}</Link></span>
                                             <h6><Link to="/blog-details">{item.title}</Link></h6>
                                          </div>
                                       </div>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className="footer-widget-4 pr-30">
                              <h4 className="mb-20 footer-title">Newsletter</h4>
                              <p>Sign Up For News & Get 30% Off
                                 in New User.</p>
                              <div className="footer-subscribe">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" name="email" placeholder="Your email address" required />
                                    <button type="submit" className="primary-btn-1 btn-hover">
                                       SUBSCRIBE NOW
                                       <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                    </button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="small-container">
                  <div className="footer-bottom pt-30 pb-30">
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
      </>
   )
}

export default FooterThree
