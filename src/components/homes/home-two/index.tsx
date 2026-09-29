import Banner from "./Banner"
import About from "./About"
import HelpForm from "./HelpForm"
import Service from "./Service"
import ChooseArea from "./ChooseArea"
import Project from "./Project"
import Brand from "./Brand"
import Faq from "./Faq"
import Blog from "./Blog"
import FooterTwo from "../../../layouts/footers/FooterTwo"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <main>
            <Banner />
            <About />
            <HelpForm />
            <Service />
            <ChooseArea />
            <Project />
            <Brand />
            <Faq />
            <Blog />
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeTwo
