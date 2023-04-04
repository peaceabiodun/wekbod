import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';



const Signup = () => {
    return ( 
        <div className='w-screen h-screen bg-[#072906] flex items-center justify-center'>
            <div className='bg-white w-full h-full sm:w-[55%] mdLg:w-[40%] sm:h-[80%] flex flex-col justify-center sm:justify-between'>
                <div className='py-4 px-4 '>
                    <div className='flex flex-col items-center sm:items-start'>
                    <Logo />
                    <h2 className='my-4 text-black text-2xl font-bold'>Sign Up</h2>
                    </div>

                    <form className='flex flex-col justify-center items-center pt-4'>
                        <button className='flex items-center justify-center border border-[#6C757D] w-[250px] xs:w-[300px] h-[35px] text-[#05668D] font-medium text-lg '>
                            <FcGoogle size={25} className='mr-3'/>
                            Sign up with Google
                        </button>
                        <p className='py-4 text-sm text-[#475467]'>Or sign up with</p>

                        <label htmlFor='name' className='flex flex-col text-sm text-[#475467]'> Name
                            <input
                                name='name'
                                id='name'
                                type='text' 
                                placeholder='Enter your full name'   
                                className='border border-[#6C757D] outline-none w-[250px] xs:w-[300px] h-[35px] px-2 text-sm'
                            />
                        </label>

                        <label htmlFor='email' className='flex flex-col text-sm text-[#475467] mt-2'> Email
                            <input
                                name='email'
                                id='email'
                                type='email' 
                                placeholder='Enter work email'   
                                className='border border-[#6C757D] outline-none w-[250px] xs:w-[300px] h-[35px] px-2 text-sm'
                            />
                        </label>

                        <label htmlFor='password' className='flex flex-col text-sm text-[#475467] mt-2'> Password
                            <input
                                name='password'
                                id='password'
                                type='password' 
                                placeholder='Enter password'   
                                className='border border-[#6C757D] outline-none w-[250px] xs:w-[300px] h-[35px] px-2 text-sm'
                            />
                        </label>
                        <button className='bg-[#5925DC] w-[250px] xs:w-[300px] h-[35px] my-4 text-white'>Get secure link</button>
                        <div className='flex flex-row text-xs font-medium'>
                            <p className='text-[#475467]'>Already have an account?</p>
                            <Link to='/login' className='text-[#027A48]'>Login</Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
     );
}
 
export default Signup;