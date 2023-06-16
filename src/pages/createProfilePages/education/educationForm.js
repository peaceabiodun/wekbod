import ProfileNavigation from "components/profileNav/profileNav";
import { useNavigate } from 'react-router';
import { FaBackward } from "react-icons/fa";






const EducationForm = () => {

    let navigate = useNavigate();

    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            
            <div className='text-[#05668D] my-2'>
                <button onClick={() => {navigate("/projectdetails");}} className='flex justify-center items-center w-[80px] h-[35px] border border-[#05668D] '>
                    <FaBackward size={12} className='mr-1'/>
                    Back 
                </button>
            </div>

            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl text-center'>Setup your Profile</h2>
                <ProfileNavigation />
            </div>

            <form className='mt-6 w-[90%]' >
                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="school" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Name of School
                        <input  
                            type="text"
                            name="school"
                            id="school"
                            placeholder="Enter School Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="course" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Course of Study
                        <input  
                            type="text"
                            name="course"
                            id="course"
                            placeholder="Enter Course of Study"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                    <label htmlFor="degree" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Degree type
                        <input  
                            type="text"
                            name="degree"
                            id="degree"
                            placeholder="Select Degree Type"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="grade" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Grade(optional)
                        <input  
                            type="text"
                            name="grade"
                            id="grade"
                            placeholder="Enter Grade level"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                    <label htmlFor="startDate" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >Start Date
                        <input  
                            type="date"
                            name="startDate"
                            id="startDate"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="endDate" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' >End Date
                        <input  
                            type="date"
                            name="endDate"
                            id="endDate"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='mt-4'>
                    <label htmlFor='summary' className='flex flex-col text-[16px] mt-2 '> Summary
                        <textarea 
                            name='summary'
                            id='summary'
                            type='text'
                            placeholder='Give a description of school work and topics/concepts learnt'
                            className='h-[120px] outline-none border px-3 py-1 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>
                
                <div className='flex justify-end my-6 gap-2'>

                    <button 
                       onClick={() => {navigate("/preview-cv");}}  
                        className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                        Save
                    </button>

                    <button
                        onClick={() => {navigate("/preview-cv");}}  
                        className='bg-[white] text-[#05668D] w-[100px] h-[35px] border border-[#05668D]'>
                        Skip
                    </button>
                </div>

            </form>
        </div>
     );
}
 
export default EducationForm 