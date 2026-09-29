import { businessSocials } from "../../../../data/BusinessContact";
import { Link } from "react-router-dom"
import team_data from "../../../../data/TeamData"

const TeamArea = () => {
   return (
      <section className="team-section p-relative section-space">
         <div className="small-container">
            <div className="row g-4">
               {team_data.filter((items) => items.page === "inner_page").map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15">
                     <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
                        <figure className="image w-img p-relative">
                           <img src={item.thumb} alt="" />
                        </figure>
                        <div className="content">
                           <div className="author-info">
                              <h5 className="mb-5"><Link to="/team-details">{item.name}</Link></h5>
                              <span>{item.designation}</span>
                           </div>
                           <div className="social-links p-relative">
                              <span><i className="icon-share"></i></span>
                              <ul>
                                 {businessSocials.map((social) => (
                                 <li key={social.name}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}><i className={social.icon}></i></a></li>
                              ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default TeamArea
