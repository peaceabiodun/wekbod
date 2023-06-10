import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { settingsLink, userSidebarLinks } from 'utils/data';
import { MdOutlinePeople, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useState } from 'react';



const UserSidebar = () => {

    const [openSettings, setOpenSettings] = useState(false);

    return (
        <div className='bg-[#FFFFFF] w-[28%] lg:w-[20%] h-full hidden md:flex flex-col py-6 px-6 shadow-xl text-sm '>

            <div className='mt-[40px]'>
                <button className=' text-sm text-[#6C757D] border w-[100px] h-[30px]  rounded-2xl'>
                    Quick actions
                </button>

                <div className='flex my-4'>
                    <BsSearch size={16} className='text-[#6C757D] mt-1 mr-2' />
                    <input 
                        type="text" 
                        placeholder='Search' />
                </div>

                <div className='my-10'>
                    {userSidebarLinks.map((items) =>(
                        <NavLink  to={items.link}  key={items.id}  className={({isActive}) => isActive ?'flex flex-row text-[black] font-semibold py-2 text-sm' : 'flex flex-row text-[#6C757D] font-medium py-2 hover:text-black text-sm'}>
                        <div className='mr-3 text-[#6C757D]'>{items.icon}</div>
                        <p className=''>{items.title}</p>  
                        </NavLink>
                    ))}
                </div>

                <div className='text-[#6C757D]'>
                    <h2 className=' font-semibold mb-2'>TOOLS</h2>

                    <NavLink to='/' className='flex my-2'>
                        <div className='mr-3 text-[#6C757D]'><MdOutlinePeople size={22} /></div>
                        <p className=''>Invite friend</p>
                    </NavLink>
                    <div className='flex '>
                        <div className='mr-3 text-[#6C757D]'><CiSettings size={22} /></div>
                        <p className=''>Settings</p>
                        <MdOutlineKeyboardArrowDown size={22} className='' onClick={() => setOpenSettings(!openSettings)} />
                    </div>
                </div>

                {openSettings &&
                <div className='ml-8'>
                    {settingsLink.map((items) =>(
                        <NavLink key={items.id} to={items.link} className='text-[#6C757D]' >
                            <p className='my-2'>{items.title}</p>
                        </NavLink>
                    ))}
                </div>
                }


            </div>
        </div>
      );
}
 
export default UserSidebar;