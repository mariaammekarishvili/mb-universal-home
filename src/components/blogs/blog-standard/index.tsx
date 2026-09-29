import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"

const BlogStandard = () => {
  return (
    <>
      <HeaderThree />
      <main>
         <BreadCrumb sub_title="Blog Standard" title="Blog Standard" />
         <BlogArea />
      </main>
      <FooterThree />
    </>
  )
}

export default BlogStandard
