import { notificationData } from "utils/data";
import { ReactComponent as Notify } from 'assets/icons/notify.svg';


const Notification = () => {
    return (
        
        <div className='my-4'>
            <p className='text-[#667085] font-medium text-sm'>16th of June, 2023</p>

            {notificationData.map((item) =>(
            <div className=' bg-white border p-3'>

                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-[#6941C6] rounded-full'></div>
                        <h2 className='xs:font-semibold font-bold text-sm xs:text-lg'>{item.title}</h2>
                    </div>
                    <div className='text-[#475467] text-sm font-medium'>
                        <p>{item.time}</p>
                    </div>
                </div>

                <div className='flex my-1 text-xs xs:text-sm font-medium items-center gap-2'>
                    <div>
                        <Notify className='w-10' />
                    </div>
                    <p>{item.description}</p>
                </div>

            </div>
            ))}
        </div>
     );
}
 
export default Notification;