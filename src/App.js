import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import HomePage from "pages/HomePage";
import Signup from "pages/loginPage/signup";
import Login from "pages/loginPage/login";
import CreateBio from "pages/createProfilePages/bio";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createprofilebio" element={<CreateBio />} />
      </Routes>
    </Router>
  );
}

export default App;
