import Header from "components/generalHeader/header";
import UserSidebar from "components/generalSidebar/userSidebar";
import MobileNavigation from "components/mobileNav/mobileNav";
import SettingsBody from "./settingsBody";


const Settings = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <UserSidebar />
                <SettingsBody />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default Settings;