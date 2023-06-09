import UserSidebar from "components/generalSidebar/userSidebar";
import ProfileBody from "./profileBoby";
import MobileNavigation from "components/mobileNav/mobileNav";


const UserProfile = () => {
    return ( 
        <div className=''>
            <div className='flex flex-row h-[100vh]  '>
                <UserSidebar />
                <ProfileBody /> 
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default UserProfile;