import Placeholder from 'assets/images/placeholder-img.png';
import ProfileNavigation from 'components/profileNav/profileNav';
import { useNavigate } from 'react-router';
import { FaBackward } from "react-icons/fa";
import { MdEdit } from "react-icons/md";




const BioForm = ({setProfileState}) => {

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        setProfileState((prev)=>{
            return {
                ...prev, contact: true,
                bio: false,     
            }
        })
    }

    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-full py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto '>
            <div className='text-[#05668D] my-2'>
                <button onClick={() => {navigate("/login");}} className='flex justify-center items-center w-[80px] h-[35px] border border-[#05668D] '>
                    <FaBackward size={12} className='mr-1'/>
                    Back 
                </button>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl text-center'> Setup your Profile</h2>
                <ProfileNavigation />
            </div>

            <div className='bg-[#34A751] w-[90%] h-[180px]'>
                <MdEdit size={20} className='float-right text-white cursor-pointer m-2' />
                <img src={Placeholder}  alt="/" className='absolute rounded-full mx-7 mt-[60px] w-[170px] h-[170px] cursor-pointer'/>
            </div>

            <form className='mt-[60px] w-[90%]'>
                <label htmlFor='title' className='flex flex-col text-[16px]'> Professional Title
                    <input 
                        name='title'
                        id='title'
                        type='text'
                        placeholder='Enter Professional Title'
                        className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 '>
                    <label htmlFor='firstname' className='flex flex-col text-[16px] mt-2 sm:w-[50%]'> First Name
                        <input 
                            name='firstname'
                            id='firstname'
                            type='text'
                            placeholder='Enter First Name'
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor='lastname' className='flex flex-col text-[16px] mt-2  sm:w-[50%]'> Last Name
                        <input 
                            name='lastname'
                            id='lastname'
                            type='text'
                            placeholder='Enter Last Name'
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>
                <label htmlFor='bio' className='flex flex-col text-[16px] mt-2 '> Bio
                    <textarea 
                        name='bio'
                        id='bio'
                        type='text'
                        placeholder='Say something about yourself'
                        className='h-[120px] outline-none border px-3 py-1 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <div className='flex justify-end mb-4'>
                    <button onClick={() => {navigate("/contactdetails");}} className='bg-[#05668D] text-white w-[100px] h-[35px] border mt-3 '>
                        Proceed
                    </button>
                </div>
            </form>
        </div>
     );
}
 //onClick={() => {navigate("/contactdetails");}}
export default BioForm;