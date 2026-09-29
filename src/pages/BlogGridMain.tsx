import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogGrid from '../components/blogs/blog-grid';

const BlogGridMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Grid'} />
         <BlogGrid />
      </Wrapper>
   );
};

export default BlogGridMain;