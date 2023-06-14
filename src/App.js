import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from "pages/HomePage";
import Signup from "pages/loginPage/signup";
import Login from "pages/loginPage/login";
import ProfileSetup from "components/profileSetup/profileState";
import ContactDetails from "pages/createProfilePages/contactDetails";
import ExperienceDetails from "pages/createProfilePages/experience";
import ProjectDetails from "pages/createProfilePages/projects";
import EducationDetails from "pages/createProfilePages/education";
import PreviewCv from "pages/createProfilePages/previewCv";
import A4Preview from "pages/createProfilePages/previewCv/a4Preview";
import UserProfile from "pages/profile";
import Dashboard from "pages/dashboard";
import JobBoard from "pages/jobBoard";



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profilesetup" element={<ProfileSetup />} />
        <Route path="/contactdetails" element={<ContactDetails />} />
        <Route path="/experiencedetails" element={<ExperienceDetails />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/educationdetails" element={<EducationDetails />} />
        <Route path="/preview-cv" element={<PreviewCv />} />
        <Route path="/cv" element={<A4Preview />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/jobboard"  element={<JobBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
