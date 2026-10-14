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
    image: "/assets/imgs/resources/about-3.jpg",
    sub_title:
      "Building Excellence, Crafting Interiors, and Delivering Perfection Across NY, NJ & PA",
    desc_1:
      "Welcome to MB Universal Home LLC, your trusted partner for high-end drywall, framing, and complete interior renovation services. Based and operating across New York, New Jersey, Connecticut, and Pennsylvania, we combine years of hands-on industry experience with a strict commitment to superior craftsmanship. Whether it’s a residential home upgrade or a large-scale commercial project, our team brings precision, reliability, and attention to detail to every single square foot we touch.",
  },
  {
    title: "Our Core Expertise",
    image: "/assets/imgs/resources/about-2.jpg",
    sub_title: "Master Craftsmanship in Every Detail",
    desc_1: "",
    items: [
      {
        title: "Drywall Installation & Finishing",
        desc: "Expert sheetrock hanging, meticulous metal and wood stud framing, and multi-coat joint compound finishing (taping and mudding) that yields perfectly smooth, paint-ready surfaces.",
      },
      {
        title: "Drop Ceiling Solutions",
        desc: "Professional suspended and acoustic ceiling installations designed for commercial offices, retail spaces, and modern residences, ensuring ideal acoustics and clean utility integration.",
      },
      {
        title: "Wood & Metal Working",
        desc: "Structural and decorative framing, custom carpentry, and architectural woodwork built strictly to code and tailored to your design specifications.",
      },
      {
        title: "Tile & Painting Services",
        desc: "Precision tile setting for floors and walls, alongside high-end interior painting to give your space a flawless final look.",
      },
    ],
  },
  {
    title: "Why Homeowners & Businesses Choose Us",
    image: "/assets/imgs/resources/about-1.jpg",
    sub_title: "The MB Universal Home Advantage",
    desc_1: "",
    items: [
      {
        title: "Unmatched Experience & Skill",
        desc: "Our skilled professionals bring decades of combined construction and renovation expertise, ensuring every project meets the highest industry standards.",
      },
      {
        title: "Strict Adherence to Deadlines",
        desc: "We respect your time. From the initial measurement and scheduling to the final cleanup, we execute projects efficiently and on schedule.",
      },
      {
        title: "Transparent & Honest Communication",
        desc: "No hidden fees or unexpected delays. We provide clear, straightforward estimates and keep you informed at every step of the process.",
      },
      {
        title: "Residential & Commercial Versatility",
        desc: "Equipped to handle everything from custom single-room home remodeling to extensive multi-floor commercial builds.",
      },
    ],
  },
  {
    title: "Our Mission & Vision",
    image: "/assets/imgs/resources/about-4.jpeg",
    sub_title: "Our Mission & Core Values",
    desc_1:
      "Our mission is simple: to exceed client expectations by delivering structural integrity, flawless finishes, and exceptional customer service. We believe that a well-built interior is the foundation of a comfortable home and a productive workspace. By utilizing top-grade materials, advanced techniques, and rigorous safety protocols, we build spaces that stand the test of time.",
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
