import Footer from "../../../layouts/footers/Footer"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb sub_title="Blog Details" title="Blog Details" />
            <BlogDetailsArea />
         </main>
         <Footer />
      </>
   )
}

export default BlogDetails
