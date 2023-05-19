import ProfileNavigation from "components/profileNav/profileNav";
import { experienceData, projectData } from "utils/data";



const CvDetails = () => {
    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'> Profile</h2>
                <ProfileNavigation />
            </div>

            <div className='mt-3 w-[90%]'>

                <h1 className='text-2xl font-semibold'>Dubem Izuorah</h1>
                <div className='flex flex-col sm:flex-row justify-between gap-1 sm:gap-4 text-xs sm:text-sm my-2 '>
                    <p>dubem.design@gmail.com</p>
                    <p>+2348022845629</p>
                    <p>www.wekbod.com/dubemizuorah</p>
                </div>
                
                <div className='my-6'>
                    <h2 className='text-xl font-semibold'>Brief Summary</h2>
                    <p className='text-[#344054] text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc sollicitudin velit a egestas faucibus. Mauris congue magna sed venenatis egestas.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse viverra non augue at convallis. Integer non sem laoreet, 
                        sollicitudin purus vitae, sodales justo. Suspendisse lectus est, volutpat vel justo vel, vulputate tincidunt leo. Nulla facilisi.
                    </p>
                </div>

                <div className='mb-6 flex mdLg:flex-row flex-col justify-between gap-4 '>
                    <div>
                        <h2 className='text-xl font-semibold'>Experience</h2>

                        {experienceData.map((items) =>(
                            <div key={items.id} className='flex flex-row mt-6 ' >
                                <div className='bg-[#D9D9D9] w-[90px] h-[90px]'> </div>
        
                                <div className='ml-3'>
                                    <h2 className='text-lg font-semibold'>{items.title}</h2>
                                    <div className='flex flex-row gap-4 text-xs font-semibold text-[#05668D]'>
                                        <p>{items.company}</p>
                                        <p>{items.type}</p>
                                    </div>
                                    <div className='flex flex-row text-[#6C757D] text-xs my-1'>
                                        <p>{items.date}</p>
                                        <p>{items.months}</p>
                                    </div>
                                    <p className='text-xs text-[#6C757D]'>{items.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                   
                   <div>
                        <h2 className='text-xl font-semibold'>Projects</h2>

                        {projectData.map((items) => (
                            <div key={items.id} className='flex flex-row mt-3  ' >
                                <div className='bg-[#D9D9D9] w-[90px] h-[90px]'> </div>

                                <div className='ml-3'>
                                    <h2 className='text-lg font-semibold'>{items.title}</h2>
                                    <p className='text-xs text-[#05668D] font-medium mt-1'>{items.description}</p>
                                    <p className='text-xs text-[#6C757D] my-1'>{items.skills}</p>
                                    <p className='text-xs text-[#6C757D]'>{items.date}</p>
                                    <p className='text-xs text-[#6C757D]'>{items.link}</p>
                                </div>
                            </div>
                        ))}
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default CvDetails;