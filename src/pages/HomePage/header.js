import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { MdOutlineAccountCircle} from "react-icons/md";

const Header = () => {
    return ( 
        <div className='h-full'>
            <div className='bg-[#101323] flex flex-row py-4 px-[60px] justify-between'>
                <div className='flex'>
                    <Logo />
                    <h2 className='text-lg text-white ml-3 cursor-pointer '>Jobs</h2>
                </div>
                <div className='flex text-white text-lg'>
                    <MdOutlineAccountCircle size={30} />
                    <h2 className='mx-4 cursor-pointer'>Log in</h2>
                    <h2 className='cursor-pointer'>Sign up</h2>
                </div>
            </div>

        </div>
     );
}
 
export default Header;