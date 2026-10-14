import Footer from "../../../layouts/footers/Footer"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Service Details" title="Service Details" />
            <ServiceDetailsArea />
         </main>
         <Footer />
      </>
   )
}

export default ServiceDetails
