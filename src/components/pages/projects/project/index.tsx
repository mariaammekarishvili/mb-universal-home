import FooterThree from "../../../../layouts/footers/FooterThree"
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
         <FooterThree />
      </>
   )
}

export default Project
