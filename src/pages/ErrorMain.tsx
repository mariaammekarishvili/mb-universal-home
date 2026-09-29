import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import NotFound from '../components/pages/error';

const ErrorMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'404 ||'} />
         <NotFound />
      </Wrapper>
   );
};

export default ErrorMain;