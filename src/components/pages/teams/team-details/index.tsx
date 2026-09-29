import FooterThree from "../../../../layouts/footers/FooterThree"
import HeaderThree from "../../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadCrumb sub_title="Team Details" title="Team Details" />
        <TeamDetailsArea />
      </main>
      <FooterThree />
    </>
  )
}

export default TeamDetails
