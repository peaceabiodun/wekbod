import { useState, useEffect } from "react";
import axios from "axios";



const Body = () => {

    const [photos, setPhotos] = useState([]);

    // const fetchPhotos = async() =>{
    //     // fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json()).then((json) =>setPhotos(json));
    //     const responsePhotos = await axios.get('https://randomuser.me/api/');
    //     setPhotos(responsePhotos.data);
    // }
    const pics =[
        {id: 1, pic:"https://xsgames.co/randomusers/assets/avatars/male/39.jpg"},
        {id: 2, pic:"https://xsgames.co/randomusers/assets/avatars/male/73.jpg"},
        {id: 3, pic:"https://xsgames.co/randomusers/assets/avatars/female/22.jpg"}
    ];

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

                <div className='flex flex-col items-center bg-[#D0D5DD4D]'>
                    {pics.map((id,pic) =>
                        <div key={id} className='w-[50px] h-[50px]' >
                           <img src={pic} alt='/' className='w-[30px] h-[30px]' />
                        </div>
                    )}
                    
                </div>
              
            </div>
        </div>
     );
}
 
export default Body;