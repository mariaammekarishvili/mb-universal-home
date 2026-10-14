import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import Footer from "../../../layouts/footers/Footer"
import Counter from "../../homes/home-one/Counter"
import ServiceNew from "./Service-new"

const Service = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Services" title="Services" />
            <ServiceNew />
            <Counter style={false} />
         </main>
         <Footer />
      </>
   )
}

export default Service
