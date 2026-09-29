import FooterThree from "../../../../layouts/footers/FooterThree"
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
         <FooterThree />
      </>
   )
}

export default ProjectDetails
