import { useState } from "react";
import Notification from "./notification";


const notificationStats = [
    {id:1, title: "Unread", stats: 4},
    {id:2, title: "All", stats: 8},
];


const NotificationBody = () => {
    const [notificationTab, setNotificationTab] = useState(notificationStats[0].title); 

    return ( 
        <div className='bg-[#ECFDF3] p-6 w-full h-[100vh] overflow-auto scroll-smooth'>

            <div>
                <h2 className='text-xl font-semibold'>Notifications</h2>
                <p className='text-[#6C757D] text-sm my-1 font-medium'>It’s another day, another chance to get your dream job with ease.</p>
            </div>

            <div className='bg-white p-3 border flex gap-4 my-4'>

                {notificationStats.map((item) =>(

                <div 
                    key={item.id} 
                    onClick={() =>{setNotificationTab(item.title)}}
                    className={`flex items-center pl-2 text-[#475467] font-bold xs:font-semibold text-sm xs:text-lg gap-2 ${item.title === notificationTab ? ' text-black' : ''} `}>
                    <h2 className=''>{item.title}</h2>
                    <button className='w-7 h-7 border rounded-sm'>
                        {item.stats}
                    </button>
                </div>
                ))}

            </div>

            {notificationTab === notificationStats[0].title &&
                <div className='my-4  '>
                    <Notification />
                </div>
            }
           
            {notificationTab === notificationStats[1].title &&
                <div className='my-4  '>
                    <Notification />
                </div>
            }


        </div>
     );
}
 
export default NotificationBody;