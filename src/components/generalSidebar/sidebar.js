import { NavLink } from "react-router-dom";
import { sidebarLinks } from "utils/data";




// const SideBar = () => {
//     return (  
//         <div className='bg-[#F2F4F7] w-[28%] hidden md:flex flex-col '>
//             <div className='flex flex-col px-6 py-6 '>
//                 {sidebarLinks.map((items) =>(
//                     <NavLink  to={items.link}  key={items.id}  className={({isActive}) => isActive ?'flex flex-row text-[black] font-semibold py-2 px-2' : 'flex flex-row text-[#6C757D] font-medium py-2 px-2 hover:text-black'}>
//                     <div className='mr-3 text-[#6C757D]'>{items.icon}</div>
//                     <p className=''>{items.title}</p>  
//                   </NavLink>
//                 ))}

//             </div>

//         </div>
//     );
// }
 
// export default SideBar;