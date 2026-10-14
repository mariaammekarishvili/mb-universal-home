import AboutHome from "./About";
import BreadCrumb from "../common/BreadCrumb";
import Choose from "./Choose";
import Process from "../homes/home-one/Process";
import HeaderThree from "../../layouts/headers/HeaderThree";
import Footer from "../../layouts/footers/Footer";

const About = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="About" title="About" />
        <AboutHome />
        <Choose />
        <Process style={false} />
      </main>
      <Footer />
    </>
  );
};

export default About;
