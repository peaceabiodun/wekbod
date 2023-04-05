import DisplayPicture from 'assets/images/Dp.jpg';
import ProfileNavigation from 'components/generalHeader/profileNav/profileNav';
import { useNavigate } from 'react-router';



const BioForm = () => {

    let navigate = useNavigate();
    return ( 
        <div className='bg-[#F9FAFB] w-full py-5 px-11 '>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'> Profile</h2>
                <ProfileNavigation />
            </div>

            <div className='bg-[#34A751] w-[90%] h-[180px]'>
                <img src={DisplayPicture}  alt="/" className='absolute rounded-full mx-7 mt-[70px]'/>
            </div>
            <form className='mt-[60px] w-[90%]'>
                <label htmlFor='title' className='flex flex-col text-[16px]'> Professional Title
                    <input 
                        name='title'
                        id='title'
                        type='text'
                        placeholder='Enter Professional Title'
                        className=' w-[50%] h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <div className='flex flex-row w-[100%] gap-4 '>
                    <label htmlFor='firstname' className='flex flex-col text-[16px] mt-2 w-[50%]'> First Name
                        <input 
                            name='firstname'
                            id='firstname'
                            type='text'
                            placeholder='Enter First Name'
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor='lastname' className='flex flex-col text-[16px] mt-2  w-[50%]'> Last Name
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
                        className=' h-[120px] outline-none border px-3 py-1 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <div className='flex justify-end'>
                <button onClick={() => {navigate("/contactdetails");}} className='bg-[#05668D] text-white w-[100px] h-[35px] border mt-3 '>
                    Proceed
                </button>
                </div>
            </form>
        </div>
     );
}
 
export default BioForm;