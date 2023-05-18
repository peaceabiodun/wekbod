import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";




const PageMenu = ({onClose}) => {
    return ( 
        <div className='bg-[#F6FEF9] w-full h-full flex flex-col sm:hidden fixed top-0 bottom-0 py-4 px-4 z-30'>
            <div className='text-[#05668D]'>
                <IoClose size={26} onClick={onClose} className='' />
            </div>
            <div className='my-3 mx-3 text-[#05668D] text-xl font-medium flex flex-col'>
                <Link to='/' className='py-3 px-2 hover:bg-[#e6e6f1]'>Home</Link>
                <Link to='' className='py-3 px-2 hover:bg-[#e6e6f1]'>Profile</Link>
                <Link to='' className='py-3 px-2 hover:bg-[#e6e6f1]'>Jobs</Link>
                <Link to='' className='py-3 px-2 hover:bg-[#e6e6f1]'>Log out</Link>
            </div>

        </div>
     );
}
 
export default PageMenu;