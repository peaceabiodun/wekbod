import Header from "components/generalHeader/header";
import UserSidebar from "components/generalSidebar/userSidebar";
import MobileNavigation from "components/mobileNav/mobileNav";
import BoardBody from "./boardBody";


const JobBoard = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <UserSidebar />
                <BoardBody />
            </div>
            <MobileNavigation />
        </div>
     );
}
 
export default JobBoard;