import Header from "components/generalHeader/header";
import BioForm from "./bioForm";
import SideBar from "components/generalSidebar/sidebar";

const CreateBio = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <BioForm />
            </div>
           
        </div>
     );
}
 
export default CreateBio;