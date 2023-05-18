import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import ProjectForm from "./projectForm";
import MobileNavigation from "components/mobileNav/mobileNav";




const ProjectDetails = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <ProjectForm />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default ProjectDetails;