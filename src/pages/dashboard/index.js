import UserSidebar from "components/generalSidebar/userSidebar";
import DashboardBody from "./dashboardBody";
import MobileNavigation from "components/mobileNav/mobileNav";
import Header from "components/generalHeader/header";


const Dashboard = () => {
    return ( 
        <div className='w-full '>
            <Header />
            <div className='flex flex-row'>
                <UserSidebar />
                <DashboardBody />
            </div>
            <MobileNavigation />
        </div>
     );
}

export default Dashboard;