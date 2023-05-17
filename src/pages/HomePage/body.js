import { useState, useEffect } from "react";
import { photos } from "utils/data";
import { useNavigate } from 'react-router-dom';




const Body = () => {

    let navigate = useNavigate();
   

    return ( 
        <div className='bg-[#F6FEF9] h-screen'>
            <div className='flex sm:grid sm:grid-cols-2 h-[100%] '>

                <div className='flex flex-col justify-center px-4 sm:px-[60px]'>
                    <h1 className='text-3xl text-black font-semibold'>We are trying to solve <br /> technical unemployment</h1>
                    <p className='text-sm text-[#6C757D]'> We curates jobs from tech companies,<br />
                        to help people who can do the job find it.<br />
                        You can also discover what it takes to do a Job.
                    </p>
                    <div className='flex gap-3 mt-3'>
                        <button onClick={() => {navigate("/signup")}} className='bg-[#5925DC] w-[85px] h-[35px] text-white'> Sign Up</button>
                        <button className=' bg-white w-[120px] h-[35px] border text-[#05668D] '>Explore Jobs</button>
                    </div>
                </div>


                <div id="scroll-image" className='hidden sm:flex sm:flex-col items-center gap-4 py-2 overflow-y-auto scroll-smooth relative z-30 '> 
                    {photos.map((item) =>
                        <div key={item.id}  className='min-w-[50px] min-h-[50px] bg-[#D0D5DD4D] rounded-sm flex items-center justify-center' >
                           <img  src={item.userImg} alt='/' className='w-[30px] h-[30px] rounded-2xl' />
                        </div>
                    )}
                     
                </div>
               
              
            </div>
        </div>
     );
}
 
export default Body;