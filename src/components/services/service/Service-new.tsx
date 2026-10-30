import { useState } from "react";
import "./Service-new.css";

const services = [
  {
    title: "Drop Ceilings",
    description:
      "Suspended ceiling installation for commercial and residential properties.",
    details:
      "Transform your interior space with custom drop ceiling solutions engineered for acoustic control and clean design. We specialize in suspended grid systems, acoustic panel installation, and seamless utility integration for commercial and residential properties across New Jersey.",
  },
  {
    title: "Drywall Services",
    description:
      "Precision drywall hanging, seamless taping, and Level 5 smooth finishes.",
    details:
      "Achieve flawless interior walls with our expert sheetrock hanging, seamless taping, and Level 5 smooth finishes. We deliver code-compliant drywall solutions and meticulous surface preparation for residential and commercial properties across New Jersey.",
  },
  {
    title: "Custom Carpentry",
    description:
      "Custom cabinetry, premium countertops, and high-end finish trim work.",
    details:
      "Enhance your interiors with tailored architectural woodwork, custom cabinetry, and precision trim installation. From kitchen countertops to high-end finish carpentry, we craft durable, elegant solutions designed for lasting quality.",
  },
  {
    title: "Tile Installation",
    description:
      "Flawless tile setting for kitchens, bathrooms, walk-in showers, and floors.",
    details:
      "Transform your kitchens, bathrooms, and floors with high-precision tile setting and custom layout designs. From waterproof walk-in showers to stylish backsplashes, we deliver durable, flawless finishes built to handle daily wear.",
  },
  {
    title: "Professional Painting",
    description:
      "Clean interior and exterior painting with thorough prep work and lasting finishes.",
    details:
      "Protect and refresh your property with full-service interior and exterior painting solutions. We provide meticulous surface preparation, crisp lines, and premium finishes designed for long-lasting color and durability.",
  },
];

const ServiceNew = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((current) =>
      current.includes(index)
        ? current.filter((card) => card !== index)
        : [...current, index],
    );
  };

  return (
    <section className="service-cards-section" aria-label="Our services">
      <p  style={{ textAlign: "center",fontSize: "20px", marginBottom: "50px", maxWidth: "80%", marginLeft: "auto", marginRight: "auto"  }}>
        We specialize in professional drop ceiling installation, drywall
        services, custom carpentry, tile installation, and interior painting for
        residential and commercial properties throughout New Jersey. We deliver
        quality installation and renovation services with a focus on
        craftsmanship, reliability, and attention to detail.
      </p>
      <div className="service-cards-grid">
        {services.map(({ title, description, details }, index) => {
          const expanded = expandedCards.includes(index);
          const detailsId = `service-details-${index + 1}`;

          return (
            <article className="service-card" key={title}>
              <img
                className="service-card-image"
                src={`/assets/imgs/service/service-n-${index + 1}.jpg`}
                alt={title}
                loading="lazy"
                width={480}
                height={360}
              />
              <div className="service-card-content">
                <h2 className="service-card-title">{title}</h2>
                <p className="service-card-description">{description}</p>
                <p
                  className="service-card-details"
                  id={detailsId}
                  hidden={!expanded}
                >
                  {details}
                </p>
                <button
                  className="service-card-toggle"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  aria-label={`${expanded ? "Show less" : "Show more"} about ${title}`}
                  onClick={() => toggleCard(index)}
                >
                  {expanded ? "Show less" : "Show more"}
                  <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceNew;
