import {
  businessContact,
  businessSocials,
} from "../../../data/BusinessContact";
import { Link } from "react-router-dom";

const HeaderTwoTop = () => {
  return (
    <div className="container-fluid bg-color-1">
      <div className="header-top">
        <div className="header-top-contact-info">
          <span className="email p-relative">
            <Link to={businessContact.emailHref}>{businessContact.email}</Link>
          </span>
          <span className="time p-relative">Hours: 24 hours / 7 days</span>
        </div>
        <div className="header-top-socials">
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
      </div>
    </div>
  );
};

export default HeaderTwoTop;
