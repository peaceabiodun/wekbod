import Placeholder from 'assets/images/placeholder-img.png';
import { useState } from 'react';
import { menuTab } from 'utils/data';
import ProjectTab from './tabs/projectTab';
import ExperienceTab from './tabs/experienceTab';
import AwardTab from './tabs/awardsTab';
import SkillTab from './tabs/skillTab';


const ProfileBody = () => {

    const [tabs, setTabs] = useState(menuTab[0].heading);
    const name = localStorage.getItem("userName")

    return ( 
        <div className='w-full h-full'>
           
            <div className='w-full h-[200px] bg-[#F0F3BD]'></div>

            <div className='flex flex-col'>

                <div className='px-6'>
                    <div className='mt-[-80px]'>
                        <img src={Placeholder} alt='DP' className=' rounded-full w-[180px] h-[180px]' />
                    </div>
                    
                    <div className='flex justify-between py-4 gap-2'>
                        <div>
                            <h1 className='text-2xl font-bold'>Dubem Izuorah</h1>
                            <p className='text-[#6C757D] text-sm font-semibold'>Software Engineer</p>
                            <p className='text-sm '>Nigeria</p>
                        </div>
                        
                        <button className='border text-[#6C757D] w-[80px] h-[30px] text-sm font-medium shadow-sm p-1 whitespace-nowrap'>Edit Profile</button>
                    </div>

                    <div className='max-w-[600px]'>
                        <h2 className='text-[#6C757D] text-lg font-semibold'>ABOUT ME</h2>
                        <p className='text-sm my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis vestibulum turpis,
                            ut commodo neque gravida id. Suspendisse ultrices ex sit amet pellentesque blandit. 
                            Sed vitae eros nec odio ultricies tempor ac varius justo. Fusce semper sodales neque a maximus. Nunc mattis, 
                        </p>
                    </div>


                </div>

                <div className='p-4 mb-6 md:mb-1'>

                    <div className='flex flex-row gap-2 xs:gap-4 text-[#6C757D] text-sm font-semibold'>
                    {menuTab.map((item)=>(
                        <h2 
                            key={item.id}
                            onClick={() =>{setTabs(item.heading)}}
                            className={`hover:bg-[#969899] p-1 rounded-md hover:text-white cursor-pointer ${item.heading === tabs ? 'bg-white p-1 rounded-md text-[#212529] cursor-pointer': ''}`}
                        >
                        {item.heading}
                        </h2>
                    ))}
                    </div>

                    {tabs === menuTab[0].heading &&
                        <div className='my-8  '>
                            <ProjectTab />
                        </div>
                    }

                    {tabs === menuTab[1].heading &&
                        <div className='my-8 '>
                            <ExperienceTab />
                        </div>
                    }

                    {tabs === menuTab[2].heading &&
                        <div className='my-8 '>
                            <AwardTab />
                        </div>
                    }
                    
                    {tabs === menuTab[3].heading &&
                        <div className='my-8 '>
                            <SkillTab />
                        </div>
                    }
                </div>

                

            

            </div>
        </div>
     );
}
 
export default ProfileBody;