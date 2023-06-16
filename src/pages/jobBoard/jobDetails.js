import { MdArrowBackIos } from "react-icons/md";
import JobFrame from 'assets/images/jobFrame.png';


const JobDetails = ({onCancel, item, jobListings}) => {
    
    function removeHtmlTags(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

      
    const clickedJob = jobListings.find((job)=> job.slug === item.slug);

    const cleanDescription = removeHtmlTags(clickedJob.description);

    return ( 
        <div id="scroll-image"  className='bg-white p-4 shadow-md absolute top-0 right-0 w-[280px] md:w-[428px] h-[550px] xs:h-[610px] overflow-auto '>
            <div>
                
                <div>
                    <MdArrowBackIos onClick={onCancel} />
                    <div className='flex flex-row justify-between my-1'>
                        <div className='flex items-center'>
                            <img src={JobFrame} alt="/" className='w-[70px]' /> 
                            <div >
                                <p className='text-xs xs:text-sm font-bold'>{clickedJob.title}</p>
                                <p className='text-xs xs:text-sm font-medium'>{clickedJob.company_name}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className='bg-[#6941C6] text-white text-xs xs:text-sm h-[30px] w-[60px] xs:w-[70px] rounded-sm'>
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className='flex text-xs gap-3'>
                        <div className='flex'>
                            <p className='text-[#6C757D]'>Type:</p>
                            <p className='ml-1 whitespace-nowrap'>full-time</p>
                        </div>
                        <div className='flex'>
                            <p className='text-[#6C757D]'>Location:</p>
                            <p className='ml-1'>{clickedJob.location}</p>
                        </div>
                    </div>

                    <div className='border p-2 my-4 rounded-md'>
                        <p className='text-sm font-semibold'>Description</p>
                        <p className='my-2 text-xs'>{cleanDescription}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JobDetails;