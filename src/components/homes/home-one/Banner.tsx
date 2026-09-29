import { businessSocials } from "../../../data/BusinessContact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { JSX } from "react";

interface DataType {
  id: number;
  thumb: string;
  sub_title: string;
  title: string;
  desc: JSX.Element;
}

const banner_data: DataType[] = [
  {
    id: 1,
    thumb: "assets/imgs/banner/banner-3.jpg",
    sub_title: "PROVIDE THE BEST SERVICES",
    title: "Expert Drywall Installation & Framing",
    desc: (
      <>
        Professional sheetrock hanging, metal and wood framing, and structural
        solutions for residential and commercial spaces across NY, NJ, CT, and
        PA.
      </>
    ),
  },
  {
    id: 2,
    thumb: "assets/imgs/banner/banner-3.jpg",
    sub_title: "PROFESSIONAL CRAFTSMANSHIP",
    title: "Flawless Taping, Mudding & Painting",
    desc: (
      <>
        Multi-coat joint compound finishing, smooth sanding, and premium
        interior painting for a seamless, paint-ready surface.
      </>
    ),
  },
  {
    id: 3,
    thumb: "assets/imgs/banner/banner-3.jpg",
    sub_title: "COMPLETE INTERIOR SOLUTIONS",
    title: "Tile Work, Flooring & Full Remodeling",
    desc: (
      <>
        {" "}
        From custom tile installations to complete interior renovations, our
        experienced team delivers top-quality results on time and on budget.
      </>
    ),
  },
];

const setting = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".banner-dot",
    clickable: true,
  },
  navigation: false,
};

const Banner = () => {
  return (
    <section className="banner-section-2 p-relative fix">
      <Swiper
        {...setting}
        modules={[Autoplay, Pagination, EffectFade]}
        className="swiper banner-active"
      >
        {banner_data.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <div
              className="banner-main-2"
              style={{ backgroundImage: `url(${item.thumb})` }}
            >
              <div className="large-container">
                <div
                  className="banner-area-2 p-relative z-3 wow img-custom-anim-left animated"
                  data-wow-delay="1000ms"
                >
                  <span className="p-relative banner-sub-title">
                    {item.sub_title}
                  </span>
                  <h1 className="banner-title">{item.title}</h1>
                  <p className="banner-text">{item.desc}</p>
                  <div className="banner-btn-area-2">
                    <Link className="primary-btn-1 btn-hover" to="/services">
                      VIEW SERVICES &nbsp; |{" "}
                      <i className="icon-right-arrow"></i>
                      <span
                        style={{ top: "147.172px", left: "108.5px" }}
                      ></span>
                    </Link>
                  </div>
                </div>
                <div className="socials-area">
                  <ul>
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
                  <span>FOLLOW US</span>
                </div>
              </div>
            </div>
            <div className="shape-area-2">
              <div
                className="shape-1"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-18.png)`,
                }}
              ></div>
              <div
                className="shape-2"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-19.png)`,
                }}
              ></div>
              <div
                className="shape-3"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-20.png)`,
                }}
              ></div>
              <div
                className="shape-4"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-21.png)`,
                }}
              ></div>
              <div
                className="shape-5"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-22.png)`,
                }}
              ></div>
              <div
                className="shape-6"
                style={{
                  backgroundImage: `url(/assets/imgs/shapes/shape-23.png)`,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="banner-dot-inner">
        <div className="banner-dot"></div>
      </div>
    </section>
  );
};

export default Banner;
