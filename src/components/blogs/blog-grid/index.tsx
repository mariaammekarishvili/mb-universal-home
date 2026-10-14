import Footer from "../../../layouts/footers/Footer"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"

const BlogGrid = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Blog Grid" title="Blog Grid" />
         <BlogArea />
      </main>
      <Footer />
    </>
  )
}

export default BlogGrid
