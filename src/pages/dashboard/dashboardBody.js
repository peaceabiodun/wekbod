import { BsPeopleFill, BsStar } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
import { HiArrowUpRight, HiOutlineArrowDownRight} from "react-icons/hi2";
import JobFrame from 'assets/images/jobFrame.png';


const DashboardBody = () => {
    return ( 
        <div className=' bg-[#ECFDF3] py-6 px-6 w-full' >

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
                    <div className="bg-[#ECFDF3] py-2 px-4  rounded-md border w-full">
                        <div className='flex'>
                            <div>
                                <BsPeopleFill size={20} />
                            </div>
                            <p className='text-sm font-medium ml-3'>SavedJobs</p>
                        </div>
                        <p className='text-2xl font-semibold my-2 '>150</p>
                        <div className='flex'>
                            <HiArrowUpRight size={12} className='text-green-600 mr-1 mt-1' />
                            <p className='text-[#6C757D] text-xs'>+18 this week</p>
                        </div>
                        
                    </div>

                    <div className="bg-[#ECFDF3] py-2 px-4 rounded-md border w-full">
                        <div className='flex'>
                            <div>
                                <BsStar size={20} />
                            </div>
                            <p className='text-sm font-medium ml-3'>Completed</p>
                        </div>
                        <p className='text-2xl font-semibold my-2'>50</p>
                        <div className='flex'>
                            <HiArrowUpRight size={12} className='text-green-600 mr-1 mt-1' />
                            <p className='text-[#6C757D] text-xs'>+18 this week</p>
                        </div>
                    </div>

                    <div className="bg-[#ECFDF3] py-2 px-4  rounded-md border w-full">
                        <div className='flex'>
                            <div>
                                <MdOutlinePending size={20}/>
                            </div> 
                            <p className='text-sm font-medium ml-3'>pending</p>
                        </div>
                        <p className='text-2xl font-semibold my-2'>20</p>
                        <div className='flex'>
                            <HiOutlineArrowDownRight size={12} className='text-red-600 mr-1 mt-1' />
                            <p className='text-[#6C757D] text-xs'>+18 this week</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-white rounded-sm w-full p-5 border'>
                <div>
                    <h2 className='text-xl font-semibold'>Saved Jobs</h2>
                </div>

                <div className='w-full my-5'>

                    <div className='flex flex-col border rounded-md p-2'>
                        <div className='flex flex-row' >
                            <img src={JobFrame} alt="/" className='w-[60px]' />
                            <div className='flex flex-col justify-center' >
                                <p className='text-xs sm:text-sm font-semibold'>Frontend web developer</p>
                                <div className='flex gap-2 text-[10px] sm:text-xs'>
                                    <p>Delliote</p>
                                    <p>Full-time</p>
                                    <p>Remote</p>
                                </div>
                            </div>
                        </div>

                        <p className='text-[#6C757D] text-xs'>5 days ago</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default DashboardBody;