import { BsSave, BsBriefcase } from "react-icons/bs";
import {MdOutlineNotificationsActive } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";




const GeneralHeaderDropdown = () => {
    return ( 
        <div className='hidden sm:flex flex-col bg-white rounded-md shadow-md absolute z-20 right-10 px-4 py-4 my-2 text-[#475467] font-medium text-sm'>
            
            <Link to={''} className='flex gap-3 items-center mb-2 hover:bg-[#dff2f7] p-1 rounded-md cursor-pointer '>
                <BsSave size={14} className='' />
                <p>Saved Jobs</p>
            </Link>
            <Link to={''} className='flex gap-3 items-center mb-2 hover:bg-[#dff2f7] p-1 rounded-md cursor-pointer '>
                <MdOutlineNotificationsActive  size={18}/>
                <p>Job Alerts</p>
            </Link>
            <Link to={''}className='flex gap-3 items-center mb-2 hover:bg-[#dff2f7] p-1 rounded-md cursor-pointer '>
                <BiBookAlt  size={16} />
                <p>Skill assessments</p>
            </Link>

            <Link to={''} className='flex gap-3 items-center mb-2 hover:bg-[#dff2f7] p-1 rounded-md cursor-pointer '>
                <BsBriefcase  size={16} />
                <p>Manage job applications</p>
            </Link>

            <Link to={''} className='flex gap-3 items-center hover:bg-[#dff2f7] p-1 rounded-md cursor-pointer'>
                <IoSettingsOutline  size={16} />
                <p>Change preferences</p>
            </Link>
        </div>
     );
}
 
export default GeneralHeaderDropdown;