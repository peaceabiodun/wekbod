import DisplayPicture from 'assets/images/Dp.jpg';
import { useState } from 'react';
import { menuTab, skills } from 'utils/data';
import ProjectTab from './tabs/projectTab';
import ExperienceTab from './tabs/experienceTab';
import AwardTab from './tabs/awardsTab';


const ProfileBody = () => {

    const [tabs, setTabs] = useState(menuTab[0].heading);

    return ( 
        <div className='h-[100%]'>
            <div className=''>
            <div className='w-full h-[200px] bg-[#F0F3BD]'></div>

            <div className='flex flex-col sm:grid sm:grid-cols-2 h-full'>

                <div className='px-6'>
                    <div className='mt-[-70px]'>
                        <img src={DisplayPicture} alt='DP' className=' rounded-full' />
                    </div>
                    
                    <div className='flex justify-between py-4'>
                        <h1 className='text-2xl font-bold'>Dubem Izuorah</h1>
                        <button className='border text-[#6C757D] w-[80px] h-[30px] text-sm font-medium shadow-sm'>Edit</button>
                    </div>

                    <div>
                        <h2 className='text-[#6C757D] text-lg font-semibold'>ABOUT ME</h2>
                        <p className='text-sm my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis vestibulum turpis,
                            ut commodo neque gravida id. Suspendisse ultrices ex sit amet pellentesque blandit. 
                            Sed vitae eros nec odio ultricies tempor ac varius justo. Fusce semper sodales neque a maximus. Nunc mattis, 
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between my-6 text-lg'>

                        <h2 className='text-[#6C757D] font-medium mr-2'>SKILLS</h2>
                        <div className='flex gap-3 '>
                            {skills.map((item) =>(
                                <div key={item.id} className='bg-[#F0F3BDBF] rounded-md p-1 text-xs md:text-sm font-medium'>{item.skill}</div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className='bg-[#bdc0c2] p-4'>
                    <div className='flex flex-row gap-4 text-[#6C757D] text-sm font-semibold'>
                    {menuTab.map((item)=>(
                        <h2 
                            key={item.id}
                            onClick={() =>{setTabs(item.heading)}}
                            className={`hover:bg-white p-1 rounded-md hover:text-[#212529] cursor-pointer ${item.heading === tabs ? 'bg-white p-1 rounded-md text-[#212529] cursor-pointer': ''}`}
                        >
                        {item.heading}
                        </h2>
                    ))}
                    </div>

                    {tabs === menuTab[0].heading &&
                        <div className='my-8 '>
                            <ProjectTab />
                        </div>
                    }

                    {tabs === menuTab[1].heading &&
                        <div className='my-8 '>
                            <ExperienceTab />
                        </div>
                    }

                    {tabs === menuTab[1].heading &&
                        <div className='my-8 '>
                            <AwardTab />
                        </div>
                    }
                </div>

                

            

            </div>
            </div>
        </div>
     );
}
 
export default ProfileBody;