import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div className='bg-white py-5 px-11 '>

            <div className='flex flex-row sm:justify-between justify-center border-b py-5 '>
                <div>
                    <Logo />
                    <div className='py-4'>
                        <p className='text-[#6C757D] text-xs'>abiodunpeace8@gmail.com</p>
                        <div className='flex gap-3 my-2'>
                            <a href='/'><BsFacebook size={20} className=' text-[#2850a0]'  /></a>
                            <a href='/'><BsTwitter size={20} className=' text-[#4179e7]' /></a>
                            <a href='/'><BsLinkedin size={20} className=' text-[#1f3b74]' /></a>
                            <a href='/'><BsYoutube size={20} className=' text-[#f85151]' /></a>
                        </div>
                    </div>
                </div>

                <div className='hidden sm:flex flex-col text-[#6C757D] text-sm md:text-[16px] gap-1'>
                    <h2 className='text-[#02C39A] font-semibold'>APPLY</h2>
                    <Link to='/'>Jobs</Link>
                    <Link to='/'>Skills</Link>
                    <Link to='/'>Technologies</Link>
                    <Link to='/'>Company</Link>
                    <Link to='/'>Location</Link>
                </div>

                <div className='hidden sm:flex flex-col text-[#6C757D] text-sm md:text-[16px] gap-1' >
                    <h2 className='text-[#02C39A] font-semibold'>PRODUCT</h2>
                    <Link to='/'>Integrations</Link>
                    <Link to='/'>Features</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Community</Link>
                    <Link to='/'>Podcast</Link>
                </div>

                <div className='hidden sm:flex flex-col text-[#6C757D] text-sm md:text-[16px] gap-1' >
                    <h2 className='text-[#02C39A] font-semibold'>ABOUT</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Contact Us</Link>
                    <Link to='/'>FAQs</Link>
                </div>

                <div className='hidden sm:flex flex-col text-[#6C757D] text-sm md:text-[16px] gap-1' >
                    <h2 className='text-[#02C39A] font-semibold'>DOCS</h2>
                    <Link to='/'>Terms</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>Security</Link>
                    
                </div>
            </div>

            <div className='flex justify-center py-6 px-4 text-[10px]'>
                <p>2023 Wekbod Team | All Rights Reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;