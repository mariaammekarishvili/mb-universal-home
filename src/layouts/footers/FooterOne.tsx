import { businessSocials } from "../../data/BusinessContact";
import { Link } from "react-router-dom"
import Lightbox from "yet-another-react-lightbox"
import { useState } from "react"

const gallery_data: string[] = [
   "/assets/imgs/footer/footer-1.png",
   "/assets/imgs/footer/footer-2.png",
   "/assets/imgs/footer/footer-3.png",
   "/assets/imgs/footer/footer-4.png",
];

const FooterOne = () => {

   const [open, setOpen] = useState(false)
   const [index, setIndex] = useState(0)

   const handleOpen = (i: number) => {
      setIndex(i)
      setOpen(true)
   }

   const slides = gallery_data.map((img) => ({
      src: img,
   }))
   
   return (
      <>
         <footer>
            <div className="footer-main bg-color-1 p-relative">
               <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
               <div className="footer-shape-2" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-2.png)` }}></div>
               <div className="footer-top section-space-medium">
                  <div className="small-container">
                     <div className="row g-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <img src="/assets/imgs/logo/logo-white.svg" alt="" />
                              </figure>
                              <p className="mt-40 mb-30">
                                 Phasellus ultricies aliquam volutpat
                                 ullamcorper laoreet neque, a lacinia
                                 curabitur lacinia mollis
                              </p>
                              <div className="working-hours">
                                 <h6 className="text-white mb-20">Working Hours:</h6>
                                 <ul className="text-white">
                                    <li>Mon - Sat: <span className="fw-lighter">10.00AM - 4.00PM</span></li>
                                    <li>Sunday: <span className="fw-lighter">Close</span></li>
                                 </ul>
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
                           <div className="footer-widget-2 pl-50">
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
                           <div className="footer-widget-4 pr-30">
                              <h4 className="mb-20 footer-title mb-30">Our Gallery</h4>
                              <div className="footer-gallery p-relative">
                                 {gallery_data.map((gallery, i) => (
                                    <a
                                       key={i}
                                       onClick={() => handleOpen(i)}
                                       className="popup-image"
                                       style={{ padding: 0, border: "none", background: "transparent", cursor: "pointer" }}
                                    >
                                       <img src={gallery} alt={`Gallery image ${i + 1}`} />
                                    </a>
                                 ))}
                              </div>
                           </div>
                        </div>
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
                           <span key={social.name}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a></span>
                        ))}
                     </div>
                     <div className="right-area p-relative">
                        <span><Link to="#">Terms & Condition</Link></span>
                        <span><Link to="#">Privacy Policy</Link></span>
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
   )
}

export default FooterOne
