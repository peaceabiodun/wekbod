import JobFrame from 'assets/images/jobFrame.png';


const SavedJobsTab = () => {
    return ( 
        <div>
            <div>
                <h2 className='text-xl font-semibold'>Saved Jobs</h2>
            </div>

            <div className='w-full my-5'>

                <div className='flex flex-col border rounded-md p-2'>
                    <div className='flex flex-row' >
                        <img src={JobFrame} alt="/" className='w-[60px]' />
                        <div className='flex flex-col justify-center' >
                            <p className='text-xs sm:text-sm font-semibold'>Frontend web developer</p>
                            <div className='flex gap-2 text-[10px] sm:text-xs'>
                                <p>Delliote</p>
                                <p>Full-time</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-[#6C757D] text-xs'>5 days ago</p>
                </div>
            </div>
        </div>
     );
}
 
export default SavedJobsTab;