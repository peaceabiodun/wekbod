import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { MdOutlineAccountCircle} from "react-icons/md";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {RiMenu3Fill} from "react-icons/ri";
import PageMobileMenu from 'components/mobileMenu/pageMobileMenu';
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
        <div className=''>
            <div className='bg-[#101323] flex flex-row py-4 px-6 justify-between'>
                <div className='flex'>
                    <Logo />
                    <NavLink to='/' className='hidden sm:flex text-lg text-white mx-5 cursor-pointer '>Home</NavLink>
                    <NavLink to='/jobboard' className='hidden sm:flex text-lg text-white mr-3 cursor-pointer '>Jobs</NavLink>
                </div>
                <div className='hidden sm:flex text-white text-lg pr-5'>
                    <MdOutlineAccountCircle size={30} onClick={() => setOpenDropdown(!openDropdown)} className=' cursor-pointer' />
                    <Link to='/'  className='ml-4 cursor-pointer'>Log out</Link>
                </div>
                <div className='sm:hidden'>
                    <RiMenu3Fill onClick={handleMenuOpen} className='text-white' size={30} />
                </div>
            </div>

            {openMenu&& <>
                <PageMobileMenu onClose={handleMenuClose} />
            </>}

            {openDropdown && <>
                <GeneralHeaderDropdown onClick={() => setOpenDropdown(openDropdown)}/>
            </>}
        </div>
     );
}
 
export default Header;