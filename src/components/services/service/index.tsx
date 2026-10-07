import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import FooterThree from "../../../layouts/footers/FooterThree"
import Counter from "../../homes/home-one/Counter"
import ServiceNew from "./Service-new"

const Service = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Services" title="Services" />
            {/* <ServiceArea /> */}
            <ServiceNew />
            <Counter style={false} />
         </main>
         <FooterThree />
      </>
   )
}

export default Service
