import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { MdOutlineAccountCircle} from "react-icons/md";
import {RiMenu3Fill} from "react-icons/ri";
import HomeMobileMenu from '../../components/mobileMenu/homeMobileMenu';
import GeneralHeaderDropdown from 'components/headerDropdown/generalHeaderDropdown';



const Header = () => {
    let navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    
    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
    };

    return ( 
        <div className='h-full'>
            <div className='bg-[#101323] flex flex-row py-4 px-4 sm:px-[60px] justify-between'>
                <div className='flex'>
                    <Logo />
                    <Link to={'/general-jobs'} className='hidden sm:flex text-lg text-white ml-5 cursor-pointer '>Jobs</Link>
                </div>
                <div className='hidden sm:flex text-white text-lg pr-5'>
                    <MdOutlineAccountCircle size={30} onClick={() => setOpenDropdown(!openDropdown)} className='cursor-pointer' />
                    <h2 onClick={() => {navigate("/login")}} className='mx-4 cursor-pointer'>Log in</h2>
                    <h2 onClick={() => {navigate("/signup")}} className='cursor-pointer'>Sign up</h2>
                </div>
                <div className='sm:hidden'>
                    <RiMenu3Fill onClick={handleMenuOpen} className='text-white cursor-pointer' size={30} />
                </div>
            </div>
            {openMenu&&
                <HomeMobileMenu onClose={handleMenuClose} />
            }
            {openDropdown && <>
                <GeneralHeaderDropdown onClick={() => setOpenDropdown(openDropdown)}/>
            </>}
        </div>
     );
}
 
export default Header;