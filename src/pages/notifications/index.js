import Header from "components/generalHeader/header";
import UserSidebar from "components/generalSidebar/userSidebar";
import MobileNavigation from "components/mobileNav/mobileNav";
import NotificationBody from "./notificationBody";


const NotificationsPage = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <UserSidebar />
                <NotificationBody />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default NotificationsPage;