import { useState, useEffect } from "react";
import { photos } from "utils/data";




const Body = () => {

   

    // useEffect(() => {
    //     const fetchImages= async() =>{
    //         const response = await fetch(
    //             `https://api.unsplash.com/photos/?client_id=8e44b26f31d94d81b2162134bff0c30d`)
    //         const data = await response.json()
    //         setPhotos(data)
    //         console.log(data)
    //     }
    //     fetchImages()
    // },[])

    return ( 
        <div className='bg-[#F6FEF9] h-screen'>
            <div className='grid grid-cols-2 h-[100%]'>

                <div className='flex flex-col justify-center px-[60px]'>
                    <h1 className='text-3xl text-black font-semibold'>We are trying to solve <br /> technical unemployment</h1>
                    <p className='text-sm text-[#6C757D]'> We curates jobs from tech companies,<br />
                        to help people who can do the job find it.<br />
                        You can also discover what it takes to do a Job.
                    </p>
                    <div className='flex gap-3 mt-3'>
                        <button className='bg-[#5925DC] w-[85px] h-[35px] text-white'> Sign Up</button>
                        <button className=' bg-white w-[120px] h-[35px] border text-[#05668D] '>Explore Jobs</button>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4 py-2 '> 
                    {photos.map((item) =>
                        <div key={item.id}  className='w-[50px] h-[50px] bg-[#D0D5DD4D] rounded-sm flex items-center justify-center' >
                           <img  src={item.userImg} alt='/' className='w-[30px] h-[30px] rounded-2xl' />
                        </div>
                    )}
                     
                </div>
              
            </div>
        </div>
     );
}
 
export default Body;