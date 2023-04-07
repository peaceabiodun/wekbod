import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import Projects from "./projects";




const ProjectDetails = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <Projects />
            </div>

        </div>
     );
}
 
export default ProjectDetails;