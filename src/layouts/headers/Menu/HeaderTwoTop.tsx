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
          <span className="time p-relative">Mon - Sat: 7:00 AM - 6:00 PM</span>
          <span className="location p-relative">
            <svg
              className="location-pin"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            109 MILLTOWN RD EAST BRUNSWICK NJ 08816
          </span>
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
