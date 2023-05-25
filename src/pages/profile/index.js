import UserSidebar from "components/generalSidebar/userSidebar";
import ProfileBody from "./profileBoby";


const UserProfile = () => {
    return ( 
        <div className='flex flex-row'>
            <UserSidebar />
            <ProfileBody />
        </div>
     );
}
 
export default UserProfile;