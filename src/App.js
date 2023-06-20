import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from "pages/HomePage";
import Signup from "pages/auth/signup";
import Login from "pages/auth/login";
import ContactDetails from "pages/createProfilePages/contactDetails";
import ExperienceDetails from "pages/createProfilePages/experience";
import ProjectDetails from "pages/createProfilePages/projects";
import EducationDetails from "pages/createProfilePages/education";
import PreviewCv from "pages/createProfilePages/previewCv";
import A4Preview from "pages/createProfilePages/previewCv/a4Preview";
import UserProfile from "pages/profile";
import Dashboard from "pages/dashboard";
import JobBoard from "pages/jobBoard";
import JobListProvider from "components/contextApi/jobListContext";
import NotificationsPage from "pages/notifications";
import Settings from "pages/settings";
import CreateBio from "pages/createProfilePages/bio";



function App() {
  return (
    <JobListProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bio" element={<CreateBio />} />
          <Route path="/contactdetails" element={<ContactDetails />} />
          <Route path="/experiencedetails" element={<ExperienceDetails />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/educationdetails" element={<EducationDetails />} />
          <Route path="/preview-cv" element={<PreviewCv />} />
          <Route path="/cv" element={<A4Preview />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard"  element={<Dashboard />} />
          <Route path="/jobboard"  element={<JobBoard />} />
          <Route path="/notification"  element={<NotificationsPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      </JobListProvider>
  );
}

export default App;
