import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain'
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ProjectMain from '../pages/ProjectMain';
import ContactMain from '../pages/ContactMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/projects" element={<ProjectMain />} />
        <Route path="/projects/:projectPage" element={<ProjectMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
