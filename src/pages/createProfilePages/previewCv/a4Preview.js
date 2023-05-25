import { educationData, experienceData, projectData, skills } from "utils/data";
import { useNavigate } from "react-router-dom";


const A4Preview = () => {

    let navigate = useNavigate();

    return (  
        <div id="A4-view" className='bg-[#EAECF0] w-screen h-screen flex justify-center '>
            <div className='bg-white w-[100%] xs:w-[90%] border overflow-y-auto px-4 sm:px-8 py-8'>

                <div className='flex flex-row justify-between text-sm text-[#05668D]'>
                    <button 
                        onClick={()=>{navigate("/preview-cv")}} 
                        className='border border-[#05668D] w-[55px] xs:w-[90px] h-[30px] xs:h-[35px] text-xs sm:text-sm'>
                        Return
                    </button>
                    <button className='border border-[#05668D] w-[160px] md:w-[200px] h-[30px] sm:h-[35px] text-xs sm:text-sm' >Download One-Page CV</button>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl sm:text-2xl font-semibold'>Dubem Izuorah</h1>
                    <div className='flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 text-xs sm:text-sm my-2 '>
                        <p>dubem.design@gmail.com</p>
                        <p>+2348022845629</p>
                        <p>www.wekbod.com/dubemizuorah</p>
                    </div>
                </div>

                <div className='py-6 border-b-2'>
                    <h2 className='text-lg sm:text-xl font-semibold'>Brief Summary</h2>
                    <p className='text-[#344054] text-xs md:text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc sollicitudin velit a egestas faucibus. Mauris congue magna sed venenatis egestas.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse viverra non augue at convallis. Integer non sem laoreet, 
                        sollicitudin purus vitae, sodales justo. Suspendisse lectus est, volutpat vel justo vel, vulputate tincidunt leo. Nulla facilisi.
                    </p>
                </div>

                <div className='py-6 flex flex-col sm:grid sm:grid-cols-2 gap-4 w-[100%] border-b-2  '>

                    <div className='md:w-50%'>
                        <h2 className='text-lg sm:text-xl  font-semibold'>Experience</h2>

                        {experienceData.map((items) =>(
                            <div key={items.id} className='flex flex-row mt-6 ' >
                                <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>
        
                                <div className='ml-3'>
                                    <h2 className='text-sm sm:text-xs mdLg:text-lg font-semibold'>{items.title}</h2>
                                    <div className='flex flex-row gap-4 text-[10px] md:text-xs font-semibold text-[#05668D]'>
                                        <p>{items.company}</p>
                                        <p>{items.type}</p>
                                    </div>
                                    <div className='flex flex-col mdLg:flex-row gap-2 text-[#6C757D] text-[10px] md:text-xs my-[2px]'>
                                        <p>{items.date}</p>
                                        <p>{items.months}</p>
                                    </div>
                                    <p className='text-[10px] md:text-xs text-[#6C757D]'>{items.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='md:w-50%'>
                        <h2 className='text-lg sm:text-xl  font-semibold'>Projects</h2>

                        {projectData.map((items) => (
                            <div key={items.id} className='flex flex-row mt-6  ' >
                                <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>

                                <div className='ml-3'>
                                    <h2 className='text-sm sm:text-xs mdLg:text-lg font-semibold'>{items.title}</h2>
                                    <p className='text-[10px] md:text-xs text-[#05668D] font-medium mt-1'>{items.description}</p>
                                    <p className='text-[10px] md:text-xs text-[#6C757D] my-[2px]'>{items.skills}</p>
                                    <p className='text-[10px] md:text-xs text-[#6C757D]'>{items.date}</p>
                                    <p className='text-[10px] md:text-xs text-[#6C757D]'>{items.link}</p>
                                </div>
                            </div>
                        ))}
                   </div>

                </div>

                <div className='py-6 flex flex-col sm:grid sm:grid-cols-2 justify-between gap-4 w-[100%] '>

                    <div>
                        <h2 className='text-l sm:text-xl  font-semibold'>Education</h2>

                            {educationData.map((item) =>(
                                <div key={item.id} className='flex flex-row mt-6  '>

                                    <div className='bg-[#D9D9D9] min-w-[100px] h-[100px]'> </div>

                                    <div className='ml-3'>
                                        <h2 className='text-sm sm:text-xs mdLg:text-lg font-semibold'>{item.course}</h2>
                                        <p className='text-xs text-[#05668D] font-medium mt-1'>{item.school}</p>
                                        <div className='text-xs text-[#6C757D] my-1 flex flex-row'>
                                            <p className=' '>{item.startDate}-</p>
                                            <p className='ml-1'>{item.endDate}</p>
                                        </div>
                                        <p className='text-xs text-[#6C757D]'>{item.duration}</p>
                                        <p className='text-xs text-[#6C757D]'>{item.location}</p>
                                    </div>

                                </div>
                            ))}
                    </div>

                    <div className=' md:w-50% ml-4 '>
                        <h2 className='text-lg sm:text-xl  font-semibold'>Skills</h2>

                            <div className='my-6 ml-6'>
                                {skills.map((item)=>(
                                <ul key={item.id} className='list-disc'>
                                    <li className='text-sm'>{item.skill}</li>
                                </ul>
                                ))}
                            </div>
                    </div>

                        
                </div>
                <div className='flex justify-end my-6'>
                    <button 
                        onClick={()=>{navigate("/profile")}}
                        className='bg-[#05668D] text-white w-[200px] h-[35px] border '>
                       View Profile
                    </button>
                </div>
            </div>
            
        </div>
    );
}
 
export default A4Preview;