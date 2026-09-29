import FooterThree from "../../../../layouts/footers/FooterThree"
import HeaderThree from "../../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Team" title="Team" />
            <TeamArea />
         </main>
         <FooterThree />
      </>
   )
}

export default Team
