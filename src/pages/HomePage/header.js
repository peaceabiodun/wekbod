import { ReactComponent as Logo } from 'assets/mainLogo.svg';


const Header = () => {
    return ( 
        <div>
            <div className='bg-[#101323] flex flex-row py-4'>
                <div className='flex'>
                    <Logo />
                    <p className='text-sm text-white'>Jobs</p>
                </div>
            </div>

        </div>
     );
}
 
export default Header;