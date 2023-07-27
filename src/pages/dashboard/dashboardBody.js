import { useState } from "react";
import { BsPeopleFill, BsStar } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
import { HiArrowUpRight, HiOutlineArrowDownRight} from "react-icons/hi2";
import { statsTab } from "utils/data";
import SavedJobsTab from "./tabs/savedJobsTab";
import CompletedTab from "./tabs/completedTab";
import PendingTab from "./tabs/pendingTab";





const DashboardBody = () => {

    const [tabs, setTabs] = useState(statsTab[0].title);
    const name = localStorage.getItem("userName")

    return ( 
        <div className=' bg-[#ECFDF3] py-6 px-6 w-full h-full' >

            <div className=''>
                <h2 className='text-2xl font-semibold mt-[40px]'>Welcome back, Dubem.</h2>
                <p className='text-sm font-medium text-[#6C757D]'>It’s another day, another chance to get your dream job with ease.</p>
            </div>

            
            <div className='bg-white p-5 w-full mdLg:w-[80%] my-6 border rounded-sm'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Current stats</h2>
                    <button className=' hidden xs:flex justify-center items-center border h-[32px] w-[70px] rounded-md text-sm'>
                        All-time
                    </button>
                </div>

                <div id="scroll-image" className='flex flex-row justify-between my-4 gap-3 overflow-x-auto w-full'>
                    {statsTab.map((item) =>(
                    <div key={item.id}
                        onClick={() =>{setTabs(item.title)}}
                        className="bg-[#ECFDF3] py-2 px-4  rounded-md border w-full cursor-pointer">
                            
                        <div className={`flex whitespace-nowrap ${item.title === tabs ? 'text-black': 'text-[#6C757D]'}`}>
                            {item.id === 1 &&<div>
                                <BsPeopleFill size={20} />
                            </div>}

                            {item.id ===2 && <div>
                                <BsStar size={20} />
                            </div>}

                            {item.id ===3 && <div>
                                <MdOutlinePending size={20} />
                            </div>}

                            <p className='text-sm font-medium ml-3 '>{item.title}</p>
                        </div>
                        
                        <p className={`text-2xl font-semibold my-2 ${item.title === tabs ? 'text-black': 'text-[#6C757D]' }`}>{item.stat}</p>
                        <div className='flex'>
                            {item.id === 3 ? 
                                <HiOutlineArrowDownRight size={12} className='text-red-600 mr-1 mt-1' />
                                : 
                                <HiArrowUpRight size={12} className='text-green-600 mr-1 mt-1' />}
                            <p className='text-[#6C757D] text-xs'>{item.thread} this week</p>
                        </div>
                        
                    </div>
                    ))}
                
                </div>
            </div>

            <div className='bg-white rounded-sm w-full p-3 sm:p-5 border mb-6'>

                {tabs === statsTab[0].title &&      
                    <SavedJobsTab />
                }

                {tabs === statsTab[1].title &&      
                    <CompletedTab />
                }

                {tabs === statsTab[2].title &&      
                    <PendingTab />
                }
            </div>

        </div>
     );
}
 
export default DashboardBody;