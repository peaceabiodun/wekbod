import UserSidebar from "components/generalSidebar/userSidebar";
import ProfileBody from "./profileBoby";
import MobileNavigation from "components/mobileNav/mobileNav";
import Header from "components/generalHeader/header";


const UserProfile = () => {
    return ( 
        <div className='w-full'>
            <Header />
            <div className='flex flex-row  '>
                <UserSidebar />
                <ProfileBody /> 
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default UserProfile;