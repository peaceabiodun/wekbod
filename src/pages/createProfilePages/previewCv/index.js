import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import MobileNavigation from "components/mobileNav/mobileNav";
import CvDetails from "./cvDetails";

const PreviewCv = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <CvDetails />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default PreviewCv;