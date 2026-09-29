import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ProjectDetails from '../components/pages/projects/project-details';

const ProjectDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Project Details'} />
         <ProjectDetails />
      </Wrapper>
   );
};

export default ProjectDetailsMain;