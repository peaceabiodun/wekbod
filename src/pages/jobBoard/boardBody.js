import axios from "axios";
import { useContext, useEffect, useState } from "react";
import JobFrame from 'assets/images/jobFrame.png';
import { JobListContext } from "components/contextApi/jobListContext";
import JobDetails from "./jobDetails";




const BoardBody = () => {

    const {jobListings, setJobListings} = useContext(JobListContext);
    const [openJobDetails, setOpenJobDetails] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const API_URL= 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api'

    useEffect(() => {
        const fetchJobs = async () =>{
            try{
                const response = await axios.get(API_URL, {
                    params:{
                        visa_sponsorship: 'true'
                    },
                    headers:{
                        'Content-Type': 'application/json',
                        'X-RapidAPI-Key': '22beb6c275msh4fb0dd37a6291f5p19b2c5jsnf345ff0c443c',
                        'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
                    },
                });
                setJobListings(response.data.data);
                console.log(response.data.data)

            } catch(error){
                console.error('Error fetching jobs:', error)
            }
        };
        fetchJobs();

    })
   


    return ( 
        <div  className='bg-[#ECFDF3] p-4 md:p-6 w-full h-[100vh] overflow-auto scroll-smooth'>
            <div className="">

                <div>   
                    <p className='text-xl font-semibold'>Recommended Jobs For You</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8  w-full'>

                    {jobListings.map((item) => (
                    <div 
                        key={item.slug}
                        onClick={()=>{
                            setOpenJobDetails(true)
                            setSelectedJob(item)
                        }} 
                        className='flex flex-col bg-white hover:bg-[#dae8ff] border rounded-md p-2 my-3 mr-3 cursor-pointer  grow truncate'>
                        
                        <div className='flex ' >
                            <img src={JobFrame} alt="/" className='w-[70px]' />

                            <div className='flex flex-col justify-center text-xs grow truncate' >
                                <p className='text-xs sm:text-sm font-semibold  overflow-hidden whitespace-nowrap text-ellipsis' >{item.title}</p>
                                <p className=' font-medium'>{item.company_name}</p>
                                <p  className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.location}</p>
                                <p  className='text-[10px] text-blue-500 '>full-time</p>
                            </div>
                        </div>

                        <p className='text-[#6C757D] text-[10px]'>2 days ago</p>
                    </div>
                    ))}

                </div>
  
            </div>
            
            {openJobDetails&& <>
                <JobDetails
                    onCancel={()=> setOpenJobDetails(false)}
                    item={selectedJob}
                    jobListings={jobListings}
                    />
            </>}
        </div>
     );
}
 
export default BoardBody;