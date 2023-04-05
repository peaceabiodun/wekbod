import Pic1 from 'assets/images/pic1.jpg';
import Pic2 from 'assets/images/pic2.jpg';
import Pic3 from 'assets/images/pic3.jpg';
import Pic4 from 'assets/images/pic4.jpg';
import Pic5 from 'assets/images/pic5.jpg';
import Pic6 from 'assets/images/pic6.jpg';
import {  
    MdOutlineDashboard, 
    MdOutlineAccountCircle, 
    MdNotificationsNone} 
from "react-icons/md";
import { BsClipboard } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";







export const photos =[
    {id:1, userImg: Pic1},
    {id:2, userImg: Pic2},
    {id:3, userImg: Pic3},
    {id:4, userImg: Pic4},
    {id:5, userImg: Pic5},
    {id:6, userImg: Pic6},
    {id:7, userImg: Pic1},
    {id:8, userImg: Pic3},
];


export const profileLinks = [
    {id:1, link: "/createprofilebio", title: "Bio"},
    {id:2, link:"/contactdetails", title: "Contact"},
    {id:3, link:"/experiencedetails", title: "Experience"},
    {id:4, link:"/projectdetails", title: "Projects"},
    {id:5, link:"/educationdetails", title: "Education"},
    {id:6, link:"/preview-cv", title: "Preview - CV"},
];

export const sidebarLinks =[

    {id:1, link: "/dashboard", title: "Dashboard", icon: <MdOutlineDashboard size={22} />},
    {id:2, link: "/createprofilebio", title: "Profile", icon: <MdOutlineAccountCircle size={22} />},
    {id:3, link: "/notification", title: "Notifications", icon: <MdNotificationsNone size={22} />},
    {id:4, link: "/board", title: "Board", icon: <BsClipboard size={22} />},
    {id:5, link: "/settings", title: "Settings", icon: <IoSettingsOutline size={22} />},
];