import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from "pages/HomePage";
import Signup from "pages/loginPage/signup";
import Login from "pages/loginPage/login";
import ProfileSetup from "components/profileSetup/profileState";
import ContactDetails from "pages/createProfilePages/contactDetails";
import ExperienceDetails from "pages/createProfilePages/experience";
import ProjectDetails from "pages/createProfilePages/projects";



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
      </Routes>
    </Router>
  );
}

export default App;
