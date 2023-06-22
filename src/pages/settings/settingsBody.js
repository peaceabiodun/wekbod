import { useState } from "react";
import AccountSettings from "./tabs/accountSettings";
import PrivacySettings from "./tabs/privacySettings";


const settingsTab =[
    {id:1, heading: "Accounts"},
    {id:2, heading: "Privacy & Security"}
];

const SettingsBody = () => {

    const [tab, setTab] = useState(settingsTab[0].heading);

    return ( 
        <div className='bg-[#ECFDF3] p-6 w-full h-[100vh] overflow-auto scroll-smooth'>
            
            <div>
                <h2 className='text-xl font-semibold'>Settings</h2>
                <p className='text-[#6C757D] text-sm my-1 font-medium'>It’s another day, another chance to get your dream job with ease.</p>
            </div>

            <div className='py-6 flex flex-row gap-8'>
                {settingsTab.map((item)=>(
                    <div 
                        key={item.id} 
                        onClick={()=>{setTab(item.heading)}}
                        className={`text-sm font-medium cursor-pointer ${item.heading===tab? 'underline underline-offset-4': ''}`}>
                        <h2>{item.heading}</h2>
                    </div>
                ))}
            </div>

            {tab === settingsTab[0].heading &&
                <div className='  '>
                    <AccountSettings />
                </div>
            }

            {tab === settingsTab[1].heading &&
                <div className=' '>
                    <PrivacySettings />
                </div>
            }
        </div>
     );
}
 
export default SettingsBody;