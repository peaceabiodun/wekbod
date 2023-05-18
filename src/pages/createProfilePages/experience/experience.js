import ProfileNavigation from "components/profileNav/profileNav";
import { MdAddCircleOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { experienceData } from "utils/data";



const Experience = ({setProfileState}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();

        setProfileState((prev)=>{
            return {
                ...prev, projects: true,
                experience: false,    
            }
        })
    }

    return ( 
        <div className='bg-[#F9FAFB] w-full h-screen py-5 px-11'>  
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'> Profile</h2>
                <ProfileNavigation/>
            </div>

            <div className='flex justify-end pr-7'>
                <button className='flex flex-row border border-[#05668D] text-[#05668D] rounded-sm text-sm w-[100px] justify-center items-center h-[35px]'>
                    <MdAddCircleOutline size={24} className='mr-1' />
                    Add New
                </button>
            </div>

            <form className='mx-[60px] mt-7'>
                {experienceData.map((items) =>(
                    <div key={items.id} className='flex flex-row justify-between mt-5'>

                     <div className='flex flex-row ' >
                         <div className='bg-[#D9D9D9] w-[90px] h-[90px]'> </div>
 
                         <div className='ml-3'>
                             <h2 className='text-lg font-semibold'>{items.title}</h2>
                             <div className='flex flex-row gap-4 text-xs font-semibold'>
                                 <p>{items.company}</p>
                                 <p>{items.type}</p>
                             </div>
                             <div className='flex flex-row text-[#6C757D] text-xs my-1'>
                                 <p>{items.date}</p>
                                 <p>{items.months}</p>
                             </div>
                             <p className='text-sm text-[#6C757D]'>{items.location}</p>
                         </div>
                     </div>
 
                     <div>
                         <FaPen size={24} className='text-[#6C757D] cursor-pointer' />
                     </div>
                    </div>
                ))}
               
                
                <div className='flex justify-end mt-6'>
                <button type='submit'  className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                    Proceed
                </button>
                </div>

            </form>
        </div>
     );
}
 
export default Experience;
