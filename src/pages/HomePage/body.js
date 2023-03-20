const Body = () => {
    return ( 
        <div className='bg-[#F6FEF9] h-screen'>
            <div className='grid grid-cols-2 h-[100%]'>

                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl text-black font-semibold'>We are trying to solve <br /> technical unemployment</h1>
                    <p className='text-sm text-[#6C757D]'> We curates jobs from tech companies,<br />
                        to help people who can do the job find it.<br />
                        You can also discover what it takes to do a Job.
                    </p>
                    <div>
                        <button className='bg-[#5925DC] w-[85px] h-[35px] text-white'> Sign Up</button>
                        <button className=' bg-white w-[100px] h-[35px] border text-[#05668D] '>Explore Jobs</button>
                    </div>
                </div>

                <div>

                </div>
              
            </div>
        </div>
     );
}
 
export default Body;