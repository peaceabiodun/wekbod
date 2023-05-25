import ProfileNavigation from "components/profileNav/profileNav";
import { CiLinkedin } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";



const ContactForm = ({setProfileState}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();

        setProfileState((prev)=>{
            return {
                ...prev, experience: true,
                contact: false,    
            }
        })
    }
    return ( 
        <div id='scroll-image' className='bg-[#F9FAFB] w-full h-screen py-4 sm:py-5 px-4 sm:px-11 overflow-y-auto'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl'> Profile Setup</h2>
                <ProfileNavigation/>
            </div>

            <form onSubmit={handleSubmit} className='mt-6 w-[90%]'>
                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                <label htmlFor="email" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Email Address
                    <input  
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                        className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <label htmlFor="website" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Website (If applicable)
                    <input  
                        type="text"
                        id="website"
                        placeholder="Enter Website url"
                        className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4 mt-4'>
                <label htmlFor="phone-number" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Phone number
                    <input  
                        type="number"
                        id="phone-number"
                        placeholder="Enter Phone Number"
                        className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>

                <label htmlFor="alt-phonenumber" className='flex flex-col text-[16px]  mt-2 sm:w-[50%]' > Alternative Phone number
                    <input  
                        type="number"
                        id="alt-phonenumber"
                        placeholder="Enter Phone Number"
                        className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                    />
                </label>
                </div>

                
                <label htmlFor="linkedin" className='flex flex-row text-[16px]  mt-6' > <CiLinkedin size={26} className='mt-2 mr-2 text-[#6C757D]' />
                    <input  
                        type="text"
                        id="linkedin"
                        placeholder="Paste LinkedIn url"
                        className=' h-[35px] outline-none border px-3 text-sm text-[#6C757D] mt-1 w-[50%]'
                    />
                </label>

                <label htmlFor="url" className='flex flex-row text-[16px]  mt-2 ' > <MdAddCircleOutline size={26} className='mt-2 mr-2 text-[#6C757D]' />
                    <input  
                        type="text"
                        id="url"
                        placeholder="Paste url"
                        className=' h-[35px] outline-none border px-3 text-sm text-[#6C757D] mt-1 w-[50%]'
                    />
                </label>

                <div className='flex justify-end my-6'>
                <button type='submit'  className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                    Proceed
                </button>
                </div>

            </form>

        </div>
     );
}
 
export default ContactForm;