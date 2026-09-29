import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Page Not Found" title="404" />
            <ErrorArea />
         </main>
         <FooterThree />
      </>
   )
}

export default NotFound
