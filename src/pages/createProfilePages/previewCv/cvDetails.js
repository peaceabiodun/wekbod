import ProfileNavigation from "components/profileNav/profileNav";
import { educationData, experienceData, projectData, skills } from "utils/data";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";



const CvDetails = () => {
    let navigate = useNavigate();

    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            
            <div className='text-[#05668D] my-2'>
                <button onClick={() => {navigate("/educationdetails");}} className='flex justify-center items-center w-[80px] h-[35px] border border-[#05668D] '>
                    <FaBackward size={12} className='mr-1'/>
                    Back 
                </button>
            </div>

            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl text-center'>Setup your Profile</h2>
                <ProfileNavigation />
            </div>

            <div className='mt-3 w-[90%]'>

                <h1 className='text-xl sm:text-2xl font-semibold'>Dubem Izuorah</h1>
                <div className='flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 text-xs sm:text-sm my-2 '>
                    <p>dubem.design@gmail.com</p>
                    <p>+2348022845629</p>
                    <p>www.wekbod.com/dubemizuorah</p>
                </div>
                
                <div className='my-6'>
                    <h2 className='text-lg sm:text-xl font-semibold'>Brief Summary</h2>
                    <p className='text-[#344054] text-xs sm:text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc sollicitudin velit a egestas faucibus. Mauris congue magna sed venenatis egestas.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse viverra non augue at convallis. Integer non sem laoreet, 
                        sollicitudin purus vitae, sodales justo. Suspendisse lectus est, volutpat vel justo vel, vulputate tincidunt leo. Nulla facilisi.
                    </p>
                </div>

                <div className='mb-6 flex mdLg:flex-row flex-col justify-between gap-4 w-[100%] '>
                    <div className='mdLg:w-50%'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Experience</h2>

                        {experienceData.map((items) =>(
                            <div key={items.id} className='flex flex-row mt-6 ' >
                                <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>
        
                                <div className='ml-3'>
                                    <h2 className='text-xs xs:text-sm sm:text-lg mdLg:text-sm lg:text-lg  font-semibold'>{items.title}</h2>
                                    <div className='flex flex-row gap-4 text-[10px] xs:text-xs font-semibold text-[#05668D]'>
                                        <p>{items.company}</p>
                                        <p>{items.type}</p>
                                    </div>
                                    <div className='flex flex-col gap-1 sm:gap-2 sm:flex-row text-[#6C757D] text-[10px] xs:text-xs my-1'>
                                        <p>{items.date}</p>
                                        <p>{items.months}</p>
                                    </div>
                                    <p className='text-[10px] xs:text-xs text-[#6C757D]'>{items.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                   
                   <div className='mdLg:w-[50%]'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Projects</h2>

                        {projectData.map((items) => (
                            <div key={items.id} className='flex flex-row mt-6  ' >
                                <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>

                                <div className='ml-3'>
                                    <h2 className='text-xs xs:text-sm sm:text-lg mdLg:text-sm lg:text-lg font-semibold'>{items.title}</h2>
                                    <p className='text-[10px] xs:text-xs text-[#05668D] font-medium '>{items.description}</p>
                                    <p className='text-[10px] xs:text-xs mdLg:text-[10px] lg:text-xs font-semibold text-[#6C757D] my-1'>{items.skills}</p>
                                    <p className='text-[10px] xs:text-xs mdLg:text-[10px] lg:text-xs  text-[#6C757D]'>{items.date}</p>
                                    <p className='text-[10px] xs:text-xs mdLg:text-[10px] lg:text-xs  text-[#6C757D]'>{items.link}</p>
                                </div>
                            </div>
                        ))}
                   </div>
                </div>

                <div className='mb-6 flex mdLg:flex-row flex-col justify-between gap-4 w-[100%] '>

                    <div>
                        <h2 className='text-lg sm:text-xl font-semibold'>Education</h2>

                        {educationData.map((item) =>(
                            <div key={item.id} className='flex flex-row mt-6  '>

                                <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>

                                <div className='ml-3'>
                                    <h2 className='text-xs xs:text-sm sm:text-lg mdLg:text-sm lg:text-lg font-semibold'>{item.course}</h2>
                                    <p className='text-[10px] xs:text-xs text-[#05668D] font-medium mt-1'>{item.school}</p>
                                    <div className='text-[10px] xs:text-xs text-[#6C757D] my-1 flex flex-row'>
                                        <p className=' '>{item.startDate}-</p>
                                        <p className='ml-1'>{item.endDate}</p>
                                    </div>
                                    <p className='text-[10px] xs:text-xs text-[#6C757D]'>{item.duration}</p>
                                    <p className='text-[10px] xs:text-xs text-[#6C757D]'>{item.location}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className=' w-[50%] ml-4 '>
                        <h2 className='text-lg sm:text-xl font-semibold'>Skills</h2>

                        <div className='my-6 ml-6'>
                            {skills.map((item)=>(
                            <ul key={item.id} className='list-disc'>
                                <li className='text-xs sm:text-sm'>{item.skill}</li>
                            </ul>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex justify-end my-6'>
                    <button 
                        onClick={()=>{navigate("/cv")}}
                        className='bg-[#05668D] text-white w-[200px] h-[35px] border '>
                       Check out One-Page CV
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default CvDetails;