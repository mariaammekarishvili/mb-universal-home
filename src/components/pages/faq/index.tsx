import Footer from "../../../layouts/footers/Footer"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import FaqArea from "./FaqArea"

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Faq" title="Faq" />
         <FaqArea />
      </main>
      <Footer />
    </>
  )
}

export default Faq
