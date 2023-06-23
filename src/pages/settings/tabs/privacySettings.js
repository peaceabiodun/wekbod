


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
                    <button  className='bg-white text-[#05668D] p-2 border w-full sm:w-auto '>
                        Set New Password
                    </button>
                </div>

                <div  className='mt-8 mb-2 gap-4' >
                    <div>
                        <h2 className=' text-lg font-semibold'>Delete Account</h2>
                        <p className='text-[#667085] text-sm'>Wekbod makes it easy to delete your account and all data associated with it.</p>
                    </div>
                   
                   <div className='flex justify-end my-6'>
                        <button className='bg-[#f32121e7] text-white border whitespace-nowrap w-full sm:w-[147px] h-[42px]' >
                            Delete Account
                        </button>
                    </div>
                </div>

                <div className='mt-8 mb-2' >
                    <div className='py-4'>
                        <h2 className=' text-lg font-semibold'>Active sessions</h2>
                        <p className='text-[#667085] text-sm'>See your logged in sessions from different devices and delete unrecognized or unnecessary sessions</p>
                    </div>

                    <div className='flex gap-8'>
                        <div>
                            <h2 className=' text-sm font-semibold'>Current session</h2>
                            <p className='text-[#667085] text-sm'>Yes</p>
                        </div>

                        <div>
                            <h2 className=' text-sm font-semibold'>Device details</h2>
                            <p className='text-[#667085] text-sm'>PC / Linux / Chrome 113.0.0</p>
                        </div>
                    </div>

                    <div className='flex gap-8 py-4'>
                        <div className=''>
                            <h2 className=' text-sm font-semibold'>IP address</h2>
                            <p className='text-[#667085] text-sm'>133.122.25.145</p>
                        </div>

                        <div className=''>
                            <h2 className=' text-sm font-semibold'>Last activity</h2>
                            <p className='text-[#667085] text-sm'>Lagos - Nigeria, June 20th 2023, 9:41:51 pm</p>
                        </div>
                    </div>

                    <div className='flex justify-end my-6'>
                        <button  className='bg-white text-[#05668D] p-2 border w-full sm:w-auto '>
                            Log out of session
                        </button>
                    </div>
                </div>
               
            </form>


        </div>
     );
}
 
export default PrivacySettings;