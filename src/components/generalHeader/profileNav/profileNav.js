import { NavLink } from "react-router-dom";
import { profileLinks } from "utils/data";

const ProfileNavigation = () => {
    return ( 
        <div>
            <div className='flex flex-row my-3'>
                {profileLinks.map((item) =>(
                    <div className='flex items-center'>
                        <NavLink key={item.id} to={item.link} className={({isActive}) => isActive ? 'text-sm font-bold text-black bg-[#D0D5DD4D] rounded-md py-2 px-2' : 'text-sm font-medium text-[#6C757D] py-2 px-2'}>
                            {item.title} 
                        </NavLink>
                        <p className='px-1 text-[#6C757D]'> --&gt; </p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ProfileNavigation;