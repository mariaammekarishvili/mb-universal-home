import Footer from "../../../layouts/footers/Footer"
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
         <Footer />
      </>
   )
}

export default NotFound
