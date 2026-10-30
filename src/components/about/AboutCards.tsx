import { businessSocials } from "../../data/BusinessContact";

interface DataType {
  title: string;
  image: string;
  sub_title: string;
  desc_1: string;
  items?: {
    title: string;
    desc: string;
  }[];
}

const about_data: DataType[] = [
  {
    title: "ABOUT MB UNIVERSAL HOME",
    image: "/assets/imgs/about/about-3.jpg",
    sub_title: "Quality Craftsmanship. Exceptional Interiors. Built to Last.",
    desc_1: "Welcome to MB Universal Home Remodeling LLC, your trusted partner for drywall installation, drop ceilings, custom carpentry, tile installation, and professional painting. Serving residential and commercial clients throughout New Jersey, we focus on quality workmanship, attention to detail, and dependable service. Whether you're updating a single room or renovating an entire property, we work to bring your vision to life with care and precision.",
  },
  {
    title: "OUR CORE EXPERTISE",
    image: "/assets/imgs/resources/about-2.jpg",
    sub_title: "Quality Workmanship in Every Detail",
    desc_1: "",
    items: [
      {
        title: "Drywall Installation & Finishing",
        desc: "Professional drywall installation, taping, mudding, and smooth finishing for clean, paint-ready walls and ceilings.",
      },
      {
        title: "Drop Ceiling Installation",
        desc: "Suspended and acoustic ceiling systems for residential and commercial spaces, installed with attention to detail and a clean, professional finish.",
      },
      {
        title: "Custom Carpentry",
        desc: "Custom cabinetry, trim work, and other carpentry solutions tailored to your space and design preferences.",
      },
      {
        title: "Tile Installation",
        desc: "Tile installation for kitchen backsplashes, bathroom walls, walk-in showers, and floors, with a focus on precise placement and clean finishes.",
      },
      {
        title: "Interior & Exterior Painting",
        desc: "Professional painting services with thorough surface preparation and careful application for a clean, lasting finish.",
      },
    ],
  },
  {
    title: "WHY HOMEOWNERS & BUSINESSES CHOOSE US",
    image: "/assets/imgs/resources/about-3-n.jpg",
    sub_title: "What Makes Us Different",
    desc_1: "",
    items: [
      {
        title: "Residential & Commercial Services",
        desc: "We provide drywall, drop ceiling, carpentry, tile, and painting services for a variety of residential and commercial projects throughout New Jersey.",
      },
      {
        title: "Quality Workmanship",
        desc: "We pay close attention to preparation, installation, and finishing details to deliver results that meet the needs of each project.",
      },
      {
        title: "Clear Communication",
        desc: "We discuss project requirements, provide detailed estimates, and keep you informed throughout the process.",
      },
      {
        title: "A Customer-Focused Approach",
        desc: "From the initial consultation to the final cleanup, we strive to make the renovation process straightforward, organized, and convenient for our clients.",
      },
    ],
  },
  {
    title: "OUR MISSION & VISION",
    image: "/assets/imgs/resources/about-4.jpeg",
    sub_title: "Building Better Spaces Through Quality Work",
    desc_1: "",
    items: [
      {
        title: "Our Mission",
        desc: "Our mission is to provide dependable interior renovation services through quality workmanship, clear communication, and attention to detail. We strive to help homeowners and businesses throughout New Jersey improve their spaces with practical solutions tailored to their needs.",
      },
      {
        title: "Our Vision",
        desc: "Our vision is to build lasting relationships with our clients by consistently delivering professional service and quality results. We aim to be a trusted choice for drywall, drop ceilings, custom carpentry, tile installation, and painting throughout the communities we serve.",
      },
    ],
  },
];

const AboutCards = () => {
  return (
    <section className="team-details-page section-space-top">
      <div className="small-container">
        {about_data.map(({ title, image, sub_title, desc_1, items }, index) => (
          <div key={title} className="team-member-info mb-80">
            <div
              className={`row g-4${index % 2 === 1 ? " flex-lg-row-reverse" : ""}`}
            >
              <div className="col-lg-5">
                <div
                  className="team-member-info-image-area p-relative"
                  style={{ width: 402, maxWidth: "100%" }}
                >
                  <figure className="w-img">
                    <img
                      src={image}
                      alt={title}
                      width={402}
                      height={511}
                      loading="lazy"
                      style={{
                        aspectRatio: "402 / 511",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </figure>
                  <ul className="team-member-socials-icon">
                    {businessSocials.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-20 text-m">{title}</h3>
                <h5 className="mb-25 mt-20 sub_title">{sub_title}</h5>
                <hr />
                {desc_1 && <p className="mt-40 mb-40">{desc_1}</p>}
                {items && (
                  <ul
                    className="mt-40 mb-40"
                    style={{ listStyleType: "disc", paddingLeft: "20px" }}
                  >
                    {items.map((item) => (
                      <li key={item.title} className="mb-20">
                        <strong>{item.title}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
