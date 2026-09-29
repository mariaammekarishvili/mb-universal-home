import FooterThree from "../../../layouts/footers/FooterThree"
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
      <FooterThree />
    </>
  )
}

export default BlogGrid
