import { NavLink } from "react-router-dom";
import { userSidebarLinks } from "utils/data";



const MobileNavigation = () => {
    return ( 
        <div className='bg-[#F2F4F7] md:hidden bottom-0 fixed w-full '>
            <div className='flex flex-row justify-evenly py-3 px-2 '>
            {userSidebarLinks.map((item) => (
                <NavLink to={item.link} key={item.id} className={({isActive}) => isActive? 'bg-[#e3e8ee] text-[#05668D] p-2 rounded-3xl': 'text-[#6C757D] p-2' }>
                <div className='rounded-3xl hover:bg-[#F6FBF6]' >{item.icon}</div>
                </NavLink>
            ))}
            </div>

        </div>
     );
}
 
export default MobileNavigation;