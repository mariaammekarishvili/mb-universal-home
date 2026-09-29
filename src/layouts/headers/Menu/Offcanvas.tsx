import { businessContact, businessSocials } from "../../../data/BusinessContact";
import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
   style: boolean;
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ style, offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div className="fix">
            <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
               <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                     <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                           <Link to="/dashboard">
                              <img src="/assets/imgs/logo/logo-white.svg" alt="Header Logo" />
                           </Link>
                        </div>
                        <div className="offcanvas__close">
                           <button onClick={() => setOffCanvas(false)}>
                              <i className="fal fa-times"></i>
                           </button>
                        </div>
                     </div>
                     {style && <div className="offcanvas__search mb-25">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime accusamus corrupti natus obcaecati vitae dignissimos, id officiis similique eos.</p>
                     </div>}
                     <div className="mobile-menu mobile-menu-wrapper fix mb-40 mean-container">
                        <div className="mean-bar">
                           <nav className="mean-nav">
                              <MobileMenu />
                           </nav>
                        </div>
                     </div>
                     {style &&
                        <>
                           <div className="offcanvas__contact mt-30 mb-20">
                              <h4>Contact Info</h4>
                              <ul>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <a href={businessContact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {businessContact.phoneDisplay}</a>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <Link to={businessContact.phoneHref}>{businessContact.phoneDisplay}</Link>
                                    </div>
                                 </li>
                                 <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                       <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                       <Link to={businessContact.emailHref}>{businessContact.email}</Link>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="offcanvas__social">
                              <ul>
                                 {businessSocials.map((social) => (
                                    <li key={social.name}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a></li>
                                 ))}
                              </ul>
                           </div>
                        </>
                     }
                  </div>
               </div>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}></div>
         <div onClick={() => setOffCanvas(false)} className="offcanvas__overlay-white"></div>
      </>
   )
}

export default Offcanvas
