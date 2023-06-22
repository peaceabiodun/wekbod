import { useNavigate } from "react-router";



const AccountSettings = () => {
    
    let navigate = useNavigate();
    return ( 
        <div className='py-6'>
            <h2 className='my-2 text-lg font-semibold'>Account Info</h2>

            <form>
                <div  className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="firstname" className='flex flex-col text-sm mt-2 sm:w-[50%]' > First Name
                        <input  
                            type="text"
                            id="firstname"
                            placeholder="Enter Your First Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor="lastname" className='flex flex-col text-sm mt-2 sm:w-[50%]' > Last Name
                        <input  
                            type="text"
                            id="lastname"
                            placeholder="Enter Your last Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>
                
                <div  className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="email" className='flex flex-col text-sm mt-2 sm:w-[50%]' > Email Address
                        <input  
                            type="email"
                            id="email"
                            placeholder="Enter Email Address"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor="mobile" className='flex flex-col text-sm mt-2 sm:w-[50%]' > Mobile Number
                        <input  
                            type="text"
                            id="mobile"
                            placeholder="Enter Your Mobile Number"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <h2 className='mt-8 mb-2 text-lg font-semibold'>Location</h2>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="country" className='flex flex-col text-sm mt-2 sm:w-[50%]' >Country
                        <input  
                            type="text"
                            id="country"
                            placeholder="Enter your Country"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="state" className='flex flex-col text-sm mt-2 sm:w-[50%]' > State/Province
                        <input  
                            type="text"
                            id="state"
                            placeholder="Enter your State/Province"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="address" className='flex flex-col text-sm mt-2 ' > Address
                        <input  
                            type="text"
                            id="address"
                            placeholder="Enter your Address"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="city" className='flex flex-col text-sm mt-2 sm:w-[50%]' >City
                        <input  
                            type="text"
                            id="city"
                            placeholder="Enter your City"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                    <label htmlFor="zip" className='flex flex-col text-sm mt-2 sm:w-[50%]' > Zip/Postal Code
                        <input  
                            type="text"
                            id="zip"
                            placeholder="Enter your Zip/Postal Code"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex justify-end my-6'>
                    <button onClick={() => {navigate("/dashboard");}}  className='bg-[#05668D] text-white w-[100px] h-[35px] border '>
                        Save
                    </button>
                </div>
                
            </form>
        </div>
     );
}
 
export default AccountSettings;