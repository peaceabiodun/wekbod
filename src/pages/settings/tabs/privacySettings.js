


const PrivacySettings = () => {
    return ( 
        <div className='py-6'>
            <h2 className='my-2 text-lg font-semibold'>Change Password</h2>

            <form>

                <div>
                    <label htmlFor="currentpassword" className='flex flex-col text-sm mt-2 sm:w-[50%]' >Current Password
                        <input  
                            type="password"
                            id="currentpassword"
                            placeholder="Enter Your First Name"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div  className='flex flex-col sm:flex-row w-[100%] gap-4'>
                    <label htmlFor="newpassword" className='flex flex-col text-sm mt-2 sm:w-[50%]' >New Password
                        <input  
                            type="password"
                            id="newpassword"
                            placeholder="Enter Your New Password"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>

                    <label htmlFor="confirmpassword" className='flex flex-col text-sm mt-2 sm:w-[50%]' >Confirm Password
                        <input  
                            type="password"
                            id="password"
                            placeholder="confirm Your password"
                            className=' h-[40px] outline-none border px-3 text-sm text-[#6C757D] mt-1'
                        />
                    </label>
                </div>

                <div className='flex justify-end my-6'>
                    <button  className='bg-[#05668D] text-white p-2 border '>
                        Set New Password
                    </button>
                </div>

                <div  className='mt-8 mb-2 gap-4' >
                    <div>
                        <h2 className=' text-lg font-semibold'>Delete Account</h2>
                        <p className='text-[#667085] text-sm'>Wekbod makes it easy to delete your account and all data associated with it.</p>
                    </div>
                   
                   <div className='flex justify-end my-6'>
                        <button className='bg-[#f32121e7] text-white border whitespace-nowrap w-[147px] h-[42px]' >
                            Delete Account
                        </button>
                    </div>
                </div>
               
            </form>


        </div>
     );
}
 
export default PrivacySettings;