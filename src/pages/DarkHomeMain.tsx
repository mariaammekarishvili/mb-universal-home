import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import DarkHome from '../components/homes/dark-home';

const DarkHomeMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Dark Home'} />
         <DarkHome />
      </Wrapper>
   );
};

export default DarkHomeMain;