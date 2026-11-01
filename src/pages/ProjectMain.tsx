import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Project from '../components/pages/projects/project';

const ProjectMain = () => {
   return (
      <Wrapper>
         <SEO />
         <Project />
      </Wrapper>
   );
};

export default ProjectMain;