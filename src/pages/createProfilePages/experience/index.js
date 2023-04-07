import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import Experience from "./experience";

const ExperienceDetails = () => {
    return (  
        <div>
            <Header />
            <div className='flex flex-row' >
                <SideBar />
                <Experience />
            </div>
        </div>
    );
}
 
export default ExperienceDetails;