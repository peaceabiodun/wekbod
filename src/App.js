import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from "pages/HomePage";
import Signup from "pages/loginPage/signup";
import Login from "pages/loginPage/login";
import CreateBio from "pages/createProfilePages/bio";
import ContactDetails from "pages/createProfilePages/contactDetails";
import ProfileSetup from "components/profileSetup/profileState";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profilesetup" element={<ProfileSetup />} />
        <Route path="/contactdetails" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
