import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import Experience from "./experience";
import ExperienceForm from "./experienceForm";
import MobileNavigation from "components/mobileNav/mobileNav";

const ExperienceDetails = () => {
    return (  
        <div>
            <Header />
            <div className='flex flex-row' >
                <SideBar />
               <ExperienceForm />
            </div>
            <MobileNavigation />
        </div>
    );
}
 
export default ExperienceDetails;