import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import MobileNavigation from "components/mobileNav/mobileNav";
import EducationForm from "./educationForm";



const EducationDetails = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <EducationForm />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default EducationDetails;