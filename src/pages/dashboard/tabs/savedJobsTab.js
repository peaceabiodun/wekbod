import JobFrame from 'assets/images/jobFrame.png';
import { jobsData } from 'utils/data';


const SavedJobsTab = () => {
    return ( 
        <div>
            <div>
                <h2 className='text-xl font-semibold'>Saved Jobs</h2>
            </div>

            <div className='w-full my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

                {jobsData.map((item) => (
                <div key={item.id} className='flex flex-col border rounded-md p-2 my-3 mr-3 overflow-hidden text-ellipsis whitespace-nowrap'>
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
     );
}
 
export default SavedJobsTab;