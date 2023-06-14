import axios from "axios";
import { useEffect, useState } from "react";
import { jobsData } from "utils/data";
import JobFrame from 'assets/images/jobFrame.png';




const BoardBody = () => {

    const [jobListings, setJobListings] = useState([]);
   


    return ( 
        <div className='bg-[#ECFDF3] p-6 w-full'>
            <div>

                <div>   
                    <p className='text-xl font-semibold'>Recommended Jobs For You</p>
                </div>

                <div className='grid grid-cols-3  '>

                    {jobsData.map((item) => (
                    <div key={item.id} className='flex flex-col bg-white border rounded-md p-2 my-3 mr-3 overflow-hidden text-ellipsis whitespace-nowrap'>
                        <div className='flex flex-row whitespace-nowrap' >
                            <img src={JobFrame} alt="/" className='w-[60px]' />
                            <div className='flex flex-col justify-center' >
                                <p className='text-xs sm:text-sm font-semibold'>{item.title}</p>
                                <div className='flex gap-2 text-xs '>
                                    <p className=''>{item.company}</p>
                                    <p  className=' overflow-hidden '>{item.type}</p>
                                    <div className=' overflow-hidden'>
                                    <p  className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='text-[#6C757D] text-xs'>{item.date}</p>
                    </div>
                    ))}

                </div>

            </div>

        </div>
     );
}
 
export default BoardBody;