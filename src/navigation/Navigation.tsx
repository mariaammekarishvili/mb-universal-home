import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain'
import HomeTwoMain from '../pages/HomeTwoMain';
import HomeThreeMain from '../pages/HomeThreeMain';
import DarkHomeMain from '../pages/DarkHomeMain';
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import ProjectMain from '../pages/ProjectMain';
import ProjectDetailsMain from '../pages/ProjectDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import FaqMain from '../pages/FaqMain';
import BlogStandardMain from '../pages/BlogStandardMain';
import BlogGridMain from '../pages/BlogGridMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import ContactMain from '../pages/ContactMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home-two" element={<HomeTwoMain />} />
        <Route path="/home-three" element={<HomeThreeMain />} />
        <Route path="/dark-home" element={<DarkHomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services-details" element={<ServiceDetailsMain />} />
        <Route path="/projects" element={<ProjectMain />} />
        <Route path="/project-details" element={<ProjectDetailsMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/blog-standard" element={<BlogStandardMain />} />
        <Route path="/blog-grid" element={<BlogGridMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
