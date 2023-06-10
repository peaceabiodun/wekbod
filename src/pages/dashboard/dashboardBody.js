import { BsPeopleFill, BsStar } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
import { HiArrowUpRight, HiOutlineArrowDownRight} from "react-icons/hi2";


const DashboardBody = () => {
    return ( 
        <div className=' bg-[#ECFDF3] py-6 px-6 w-full' >

            <div className=''>
                <h2 className='text-2xl font-semibold mt-[40px]'>Welcome back, Dubem.</h2>
                <p className='text-sm font-medium text-[#6C757D]'>It’s another day, another chance to get your dream job with ease.</p>
            </div>

            <div className='bg-white p-5 w-[60%] my-6'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Current stats</h2>
                    <button className=' border h-[32px] w-[70px] rounded-md'>
                        All-time
                    </button>
                </div>

                <div className='flex flex-row justify-between my-4'>
                    <div className="bg-[#ECFDF3] py-2 px-4 rounded-md border">
                        <div className='flex'>
                            <BsPeopleFill size={20} />
                            <p className='text-sm font-medium ml-3'>Saved Jobs</p>
                        </div>
                        <p className='text-2xl font-semibold'>150</p>
                        <div className='flex'>
                            <HiArrowUpRight size={12} className='text-green-600 mr-1 mt-1' />
                            <p className='text-[#6C757D] text-xs'>+18 this week</p>
                        </div>
                        
                    </div>

                    <div className="bg-[#ECFDF3] py-2 px-4 rounded-md border">
                        <div className='flex'>
                            <BsStar />
                            <p>Completed</p>
                        </div>
                        <p>150</p>
                        <div className='flex'>
                            <HiArrowUpRight />
                            <p>+18 this week</p>
                        </div>
                    </div>

                    <div className="bg-[#ECFDF3] py-2 px-4 rounded-md border">
                        <div className='flex'>
                            <MdOutlinePending />
                            <p>pending</p>
                        </div>
                        <p>150</p>
                        <div className='flex'>
                            <HiOutlineArrowDownRight />
                            <p>+18 this week</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default DashboardBody;