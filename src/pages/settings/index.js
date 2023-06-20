import Header from "components/generalHeader/header";
import UserSidebar from "components/generalSidebar/userSidebar";
import MobileNavigation from "components/mobileNav/mobileNav";


const Settings = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <UserSidebar />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default Settings;