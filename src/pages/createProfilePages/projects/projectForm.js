import ProfileNavigation from "components/profileNav/profileNav";
import { useNavigate } from 'react-router';
import { FaBackward } from "react-icons/fa";



const ProjectForm = () => {

    let navigate = useNavigate();

    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            
            <div className='text-[#05668D] my-2'>
                <button onClick={() => {navigate("/experiencedetails");}} className='flex justify-center items-center w-[80px] h-[35px] border border-[#05668D] '>
                    <FaBackward size={12} className='mr-1'/>
                    Back 
                </button>
            </div>

            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl text-center'> Setup your Profile</h2>
                <ProfileNavigation />
            </div>

            <form className='mt-6 w-[90%]'>
                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="projectName" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Name of Project
                        <input  
                            type="text"
                            name="projectName"
                            id="projectName"
                            placeholder="Enter Project Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="Role" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Enter Role
                        <input  
                            type="text"
                            id="Role"
                            placeholder="Enter Job Role"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                    <label htmlFor="Type" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Type
                        <input  
                            type="text"
                            id="Type"
                            placeholder="Select Project Type"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="Duration" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Duration
                        <input  
                            type="text"
                            id="Duration"
                            placeholder="Enter Duration"
                            className='h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label> 
                </div>

                <div className='mt-4'>
                    <label htmlFor='summary' className='flex flex-col text-[16px] mt-2 '> Summary
                        <textarea 
                            name='summary'
                            id='summary'
                            type='text'
                            placeholder='Give a description of work done'
                            className='h-[120px] outline-none border px-3 py-1 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex justify-end my-6 gap-2'>
                    <button 
                         onClick={() => {navigate("/educationdetails");}}
                        className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                        Proceed
                    </button>

                    <button 
                        onClick={() => {navigate("/educationdetails");}} 
                        className='bg-[white] text-[#05668D] w-[100px] h-[35px] border border-[#05668D]'>
                        Skip
                    </button>
                </div>
            </form>

        </div>
     );
}
 
export default ProjectForm;