import Footer from "../../../../layouts/footers/Footer"
import HeaderThree from "../../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../../common/BreadCrumb"
import ProjectArea from "./ProjectArea"

const Project = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Projects" title="Projects" />
            <ProjectArea />
         </main>
         <Footer />
      </>
   )
}

export default Project
