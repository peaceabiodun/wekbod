import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { MdOutlineAccountCircle} from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import {RiMenu3Fill} from "react-icons/ri";
import PageMenu from 'components/mobileMenu/pageMenu';



const Header = () => {

    let navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    
    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
    };


    return ( 
        <div className=''>
            <div className='bg-[#101323] flex flex-row py-4 px-4 sm:px-[60px] justify-between'>
                <div className='flex'>
                    <Logo />
                    <NavLink to='/' className='hidden sm:flex text-lg text-white mx-5 cursor-pointer '>Home</NavLink>
                    <NavLink to='/' className='hidden sm:flex text-lg text-white mr-3 cursor-pointer '>Jobs</NavLink>
                </div>
                <div className='hidden sm:flex text-white text-lg pr-5'>
                    <MdOutlineAccountCircle size={30} className=' cursor-pointer' />
                    <h2  className='mx-4 cursor-pointer'>Log out</h2>
                </div>
                <div className='sm:hidden'>
                    <RiMenu3Fill onClick={handleMenuOpen} className='text-white ' size={30} />
                </div>
            </div>
            {openMenu&&
            <PageMenu onClose={handleMenuClose} />}
        </div>
     );
}
 
export default Header;