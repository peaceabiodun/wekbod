import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { useFormik } from 'formik';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';



const Login = () => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        
        onSubmit:(actions, values)=> {
            const loginDetails= {email: values.email, password: values.password}
            navigate('/dashboard');
        },
        validationSchema: Yup.object({
            email: Yup.string().email("invalid email format").required('email is required'),
            password: Yup.string().min(8, 'must be more than 8 characters').required('password is required'),
        }),
    });



    return ( 
        <div className='w-screen h-screen bg-[#072906] flex items-center justify-center'>
            <div className='bg-white w-full h-full sm:w-[55%] mdLg:w-[40%] sm:h-[80%] flex flex-col justify-center sm:justify-between'>

                <div className='py-4 px-4 '>
                    <div className='flex flex-col items-center sm:items-start'>
                    <Logo />
                    <h2 className='my-4 text-black text-2xl font-bold'>Login</h2>
                    </div>

                    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center pt-4'>
                        <button type='text' className='flex items-center justify-center border border-[#6C757D] w-[250px] xs:w-[300px] h-[35px] text-[#05668D] font-medium text-lg '>
                            <FcGoogle size={25} className='mr-3'/>
                            Sign up with Google
                        </button>

                        <p className='py-4 text-sm text-[#475467]'>Or login with</p>

                        <label htmlFor='email' className='flex flex-col text-sm text-[#475467] mt-2'> Email
                            <input
                                name='email'
                                id='email'
                                type='email' 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Enter work email'   
                                className='border border-[#6C757D] outline-none w-[250px] xs:w-[300px] h-[35px] px-2 text-sm'
                            />
                        </label>
                        {formik.touched.email && formik.errors.email ? (
                            <p className='text-[red] text-sm'>{formik.errors.email}</p>
                        ) : null}

                        <label htmlFor='password' className='flex flex-col text-sm text-[#475467] mt-2'> Password
                            <input
                                name='password'
                                id='password'
                                type='password' 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Enter password'   
                                className='border border-[#6C757D] outline-none w-[250px] xs:w-[300px] h-[35px] px-2 text-sm'
                            />
                        </label>
                        {formik.touched.password && formik.errors.password ? (
                            <p className='text-[red] text-sm'>{formik.errors.password}</p>
                        ) : null}

                        <button 
                            type='submit'
                            disabled={formik.isSubmitting}
                            className='bg-[#5925DC] w-[250px] xs:w-[300px] h-[35px] my-4 text-white'>
                            Login
                        </button>
                        <div className='flex flex-row text-xs font-medium'>
                            <p className='text-[#475467]'>No account yet?</p>
                            <Link to='/signup' className='text-[#027A48]'>Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
     ); 
}
 
export default Login;