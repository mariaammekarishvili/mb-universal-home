import "./TextSlider.css";

const partner_images = [
  "/assets/imgs/partners/1.png",
  "/assets/imgs/partners/2.png",
  "/assets/imgs/partners/3.png",
  "/assets/imgs/partners/4.png",
  "/assets/imgs/partners/5.png",
  "/assets/imgs/partners/6.png",
  "/assets/imgs/partners/7.png",
  "/assets/imgs/partners/8.png",
];

interface PropType {
  style: boolean;
}

const TextSlider = ({ style }: PropType) => {
  return (
    <section
      aria-label="Our partners"
      className={`text-slider-section section-space fix ${style ? "bg-color-1 is-dark" : ""}`}
    >
      <div className="container-fluid">
        <div className="partner-slider-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="partner-slider-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {partner_images.map((src, index) => (
                <div key={src} className="partner-slider-logo">
                  <img
                    src={src}
                    width={200}
                    height={96}
                    alt={copy === 0 ? `Partner ${index + 1} logo` : ""}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSlider;
