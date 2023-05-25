import DisplayPicture from 'assets/images/Dp.jpg';
import { useState } from 'react';
import { menuTab, skills } from 'utils/data';
import ProjectTab from './tabs/projectTab';
import ExperienceTab from './tabs/experienceTab';
import AwardTab from './tabs/awardsTab';


const ProfileBody = () => {

    const [tabs, setTabs] = useState(menuTab[0].heading);

    return ( 
        <div className=' h-screen'>
            <div className=' h-[35%] bg-[#F0F3BD]'></div>

            <div className='flex flex-col sm:grid sm:grid-cols-2 h-full'>

                <div className='px-6'>
                    <div className='mt-[-75px]'>
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

                    <div className='flex justify-between my-6 text-lg'>
                        <h2 className='text-[#6C757D] font-medium'>SKILLS</h2>
                        <div className='flex gap-3 '>
                            {skills.map((item) =>(
                                <div key={item.id} className='bg-[#F0F3BDBF] rounded-md p-1 text-sm font-medium'>{item.skill}</div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className='bg-[#bdc0c2]'>
                    {menuTab.map((item)=>(
                        <h2 
                            key={item.id}
                            onClick={() =>{setTabs(item.heading)}}
                            className=''
                        >
                        {item.heading}
                        </h2>
                    ))}
                    
                </div>

                {tabs === menuTab[0].heading &&
                    <>
                        <ProjectTab />
                    </>
                }

                {tabs === menuTab[1].heading &&
                    <>
                        <ExperienceTab />
                    </>
                }

                {tabs === menuTab[1].heading &&
                    <>
                        <AwardTab />
                    </>
                }

            </div>

        </div>
     );
}
 
export default ProfileBody;