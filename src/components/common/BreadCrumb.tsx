import { Link } from "react-router-dom";

interface DataType {
  sub_title: string;
  title: string;
}
const BreadCrumb = ({ sub_title, title }: DataType) => {
  return (
    <div className="breadcrumb__area theme-bg-1 p-relative pt-50 pb-50">
      <div
        className="breadcrumb__thumb"
        style={
          title == "Services"
            ? {
                backgroundImage: `url(/assets/imgs/resources/service-bg.jpg)`,
                backgroundPosition: "top",
              }
            : title === "Contact"
              ? {
                  backgroundImage: `url(/assets/imgs/resources/contact-bg.jpg)`,
                  backgroundPosition: "center",
                }
              : title === "Projects"
                ? {
                    backgroundImage: `url(/assets/imgs/resources/project-bg.jpg)`,
                    backgroundPosition: "center",
                  }
                : {
                    backgroundImage: `url(/assets/imgs/resources/about-bg.jpg)`,
                    backgroundPosition: "center",
                  }
        }
      ></div>

      {/* <div
        className="breadcrumb__thumb_3"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-53.png)` }}
      ></div> */}
      <div className="small-container">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="breadcrumb__wrapper p-relative">
              <h2 className="breadcrumb__title">{sub_title}</h2>
              <div className="breadcrumb__menu">
                <nav>
                  <ul>
                    <li>
                      <span>
                        <Link className={"text-black"} to="/">Home</Link>
                      </span>
                    </li>
                    <li>
                      <span>{title}</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
