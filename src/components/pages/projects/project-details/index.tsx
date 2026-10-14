import Footer from "../../../../layouts/footers/Footer"
import HeaderThree from "../../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../../common/BreadCrumb"
import ProjectDetailsArea from "./ProjectDetailsArea"

const ProjectDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Project Details" title="Project Details" />
            <ProjectDetailsArea />
         </main>
         <Footer />
      </>
   )
}

export default ProjectDetails
