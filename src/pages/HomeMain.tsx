import Wrapper from '../layouts/Wrapper';
import HomeOne from '../components/homes/home-one';
import SEO from '../components/SEO';

const HomeMain = () => {
   return (
      <Wrapper>
         <SEO />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeMain;