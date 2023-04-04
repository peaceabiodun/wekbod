import { ReactComponent as Logo } from 'assets/icons/mainLogo.svg';
import { MdOutlineAccountCircle} from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const Header = () => {

    let navigate = useNavigate();

    return ( 
        <div className='h-full'>
            <div className='bg-[#101323] flex flex-row py-4 px-[60px] justify-between'>
                <div className='flex'>
                    <Logo />
                    <h2 className='text-lg text-white ml-3 cursor-pointer '>Home</h2>
                    <h2 className='text-lg text-white ml-3 cursor-pointer '>Jobs</h2>
                </div>
                <div className='flex text-white text-lg pr-5'>
                    <MdOutlineAccountCircle size={30} className=' cursor-pointer' />
                    <h2 onClick={() => {navigate("/login")}} className='mx-4 cursor-pointer'>Log out</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Header;