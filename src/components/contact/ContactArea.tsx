import { businessContact } from "../../data/BusinessContact";
import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import "./ContactArea.css";

interface DataType {
  id: number;
  icon: string;
  title: string;
  info: string;
  link: string;
}

const contact_data: DataType[] = [
  {
    id: 1,
    icon: "fab fa-whatsapp",
    title: "WhatsApp",
    info: businessContact.phoneDisplay,
    link: businessContact.whatsapp,
  },
  {
    id: 2,
    icon: "fat fa-phone-volume",
    title: "Call Us 7/24",
    info: businessContact.phoneDisplay,
    link: businessContact.phoneHref,
  },
  {
    id: 3,
    icon: "fat fa-envelope",
    title: "Make A quote",
    info: businessContact.email,
    link: businessContact.emailHref,
  },
  {
    id: 4,
    icon: "fal fa-map-marker-alt",
    title: "Visit Our Office",
    info: '109 MILLTOWN RD EAST BRUNSWICK NJ 08816',
    link: 'https://maps.app.goo.gl/jyjnpdk5okasUsF4A',
  },
];

const ContactArea = () => {
  return (
    <section className="contact-page-section section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-5 col-xl-5 col-lg-5 pl-10">
            <div className="contact-p-info-area">
              {contact_data.map((item) => (
                <div key={item.id} className="contact-box">
                  <div className="icon-1">
                    <i className={item.icon}></i>
                  </div>
                  <div className="info">
                    <span>{item.title}</span>
                    <h4>
                      <Link to={item.link}>{item.info}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="contact-page-form-area">
              <div
                className="title-box mb-40 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <span className="section-sub-title">LET’S TALK</span>
                <h3 className="section-title mt-10">Let’s Get in Touch</h3>
              </div>
              <div className="contact-page-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
