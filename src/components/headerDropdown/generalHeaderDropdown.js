import { BsSave, BsBriefcase } from "react-icons/bs";
import {MdOutlineNotificationsActive } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";




const GeneralHeaderDropdown = () => {
    return ( 
        <div className='hidden sm:flex flex-col bg-white rounded-md shadow-md absolute z-20 right-10 px-4 py-4 my-2 text-[#475467] font-medium text-sm'>
            
            <div className='flex gap-3 items-center mb-2 hover:text-black cursor-pointer '>
                <BsSave size={14} className='' />
                <p>Saved Jobs</p>
            </div>
            <div className='flex gap-3 items-center mb-2 hover:text-black cursor-pointer '>
                <MdOutlineNotificationsActive  size={18}/>
                <p>Job Alerts</p>
            </div>
            <div className='flex gap-3 items-center mb-2 hover:text-black cursor-pointer '>
                <BiBookAlt  size={16} />
                <p>Skill assessments</p>
            </div>

            <div className='flex gap-3 items-center mb-2 hover:text-black cursor-pointer '>
                <BsBriefcase  size={16} />
                <p>Manage job applications</p>
            </div>

            <div className='flex gap-3 items-center '>
                <IoSettingsOutline  size={16} />
                <p>Change preferences</p>
            </div>
        </div>
     );
}
 
export default GeneralHeaderDropdown;