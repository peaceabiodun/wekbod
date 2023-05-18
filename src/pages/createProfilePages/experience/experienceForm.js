import ProfileNavigation from "components/profileNav/profileNav";
import { MdAddCircleOutline } from "react-icons/md";



const ExperienceForm = () => {
    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'> Profile</h2>
                <ProfileNavigation />
            </div>

            <form className='mt-6 w-[90%]'>
                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="OrganizationName" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Organization Name
                        <input  
                            type="text"
                            id="OrganizationName"
                            placeholder="Enter Organization Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor="JobRole" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Job Role
                        <input  
                            type="text"
                            id="JobRole"
                            placeholder="Enter Job Role"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                    <label htmlFor="JobType" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Job Type
                        <input  
                            type="text"
                            id="JobType"
                            placeholder="Select Job Type"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label> 
                    <label htmlFor="Location" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Location
                        <input  
                            type="text"
                            id="Location"
                            placeholder="Select Location"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label> 
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                    <label htmlFor="StartDate" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Start Date
                        <input  
                            type="date"
                            id="StartDate"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label> 
                    <label htmlFor="EndDate" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >End Date
                        <input  
                            type="date"
                            id="EndDate"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label> 
                </div>

                <div className='flex mt-4 text-[16px]'>
                    <p>I am currently working in this role</p>
                    <input  
                        type="checkbox"
                        className='accent-[#05668D] ml-2'
                    />
                </div>

                <div className='mt-4'>
                    <label htmlFor='summary' className='flex flex-col text-[16px] mt-2 '> Summary of work done
                        <textarea 
                            name='summary'
                            id='summary'
                            type='text'
                            placeholder='Write a summary of work done'
                            className='h-[120px] outline-none border px-3 py-1 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='mt-4'>
                    <p className='mt-2'>Add Skills</p>
                    <button type="button" className='flex flex-row border border-[#05668D] text-[#05668D] rounded-sm text-sm w-[100px] justify-center items-center h-[35px] mt-1'>
                        <MdAddCircleOutline size={24} className='mr-1' />
                        Add New
                    </button>
                    {/* put the skills added in a conatiner like the one in add service lamore */}
                </div>

                <div className='flex justify-end my-6'>
                    <button 
                        type='submit'  
                        className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                        Save
                    </button>
                </div>
            </form>

        </div>
     );
}
 
export default ExperienceForm;