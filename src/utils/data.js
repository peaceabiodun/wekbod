import Pic1 from 'assets/images/pic1.jpg';
import Pic2 from 'assets/images/pic2.jpg';
import Pic3 from 'assets/images/pic3.jpg';
import Pic4 from 'assets/images/pic4.jpg';
import Pic5 from 'assets/images/pic5.jpg';
import Pic6 from 'assets/images/pic6.jpg';
import Pic7 from 'assets/images/pic7.jpg';
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
    {id:9, userImg: Pic7},
    {id:10, userImg: Pic2},
    {id:11, userImg: Pic4},
];


export const profileLinks = [
    {id:1, link: "/profilesetup", title: "Bio"},
    {id:2, link:"/contactdetails", title: "Contact"},
    {id:3, link:"/experiencedetails", title: "Experience"},
    {id:4, link:"/projectdetails", title: "Projects"},
    {id:5, link:"/educationdetails", title: "Education"},
    {id:6, link:"/preview-cv", title: "PreviewCV"},
];

export const sidebarLinks =[

    {id:1, link: "/dashboard", title: "Dashboard", icon: <MdOutlineDashboard size={22} />},
    {id:2, link: "/profilesetup", title: "Profile", icon: <MdOutlineAccountCircle size={22} />},
    {id:3, link: "/notification", title: "Notifications", icon: <MdNotificationsNone size={24} />},
    {id:4, link: "/board", title: "Board", icon: <BsClipboard size={21} />},
    {id:5, link: "/settings", title: "Settings", icon: <IoSettingsOutline size={22} />},
];


export const experienceData =[
    {   id:1, 
        title: 'Business Development Manager', 
        company: 'Google Inc.', 
        type: 'fulltime', 
        date: 'August, 2019 - Present', 
        months: '10 mons.', 
        location: 'Lagos, Nigeria.'
    },
    {   id:2, 
        title: 'Front-end Developer', 
        company: 'Safari Ng', 
        type: 'contract', 
        date: 'June, 2020 - July-2021', 
        months: '12 mons.', 
        location: 'Lagos, Nigeria.'
    },
    {   id:3, 
        title: 'Marketing & Communications Manager', 
        company: 'Meta', 
        type: 'remote', 
        date: 'December, 2021-August, 2022', 
        months: '9 mons.', 
        location: 'Boston'
    },
];

export const projectData =[
    {   id: 1, 
        title: 'Wekbod-Rebrand', 
        description: 'Get connected to better jobs', 
        skills: 'JavaScript, React, tailwind css, Redux', 
        date: 'December, 2021', 
        link: 'www.wekbod.com', 
    },

    {   id: 2, 
        title: 'Lamore', 
        description: 'Plan all your events using lamore', 
        skills: 'typescript, next.js, css, Node.js', 
        date: 'June, 2022', 
        link: 'www.lamore.com', 
    },
    {   id: 3,  
        title: 'ChillSpot Ng', 
        description: 'find a place to chill in any city', 
        skills: 'JavaScript, React, tailwind css', 
        date: 'February, 2023', 
        link: 'www.chilspotng.com', 
    },
];


export const educationData = [
    {
        id: 1,
        course: "Banking & Finance",
        school: "Covenant University",
        degree: "Bsc",
        startDate: "August 2016",
        endDate: "september 2020",
        duration: "4 years",
        location: "Lagos Nigeria"

    },
    {
        id: 2,
        course: "Masters in Business Adminisistration",
        school: "University of Lagos",
        degree: "Msc",
        startDate: "January 2022",
        endDate: "May 2023",
        duration: "17 months",
        location: "Lagos Nigeria"

    },
]

export const skills= [
    {id: 1, skill: 'JavaScript'},
    {id: 2, skill: 'ReactJs'},
    {id: 3, skill: 'NodeJs'},
    {id: 4, skill: 'GraphQl'},
]