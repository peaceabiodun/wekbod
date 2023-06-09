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
import { BsClipboard, BsBriefcase} from "react-icons/bs";
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
    {id:1, link: "/bio", title: "Bio"},
    {id:2, link:"/contactdetails", title: "Contact"},
    {id:3, link:"/experiencedetails", title: "Experience"},
    {id:4, link:"/projectdetails", title: "Projects"},
    {id:5, link:"/educationdetails", title: "Education"},
    {id:6, link:"/preview-cv", title: "PreviewCV"},
];

// export const sidebarLinks =[

//     {id:1, link: "/dashboard", title: "Dashboard", icon: <MdOutlineDashboard size={22} />},
//     {id:2, link: "/profilesetup", title: "Profile", icon: <MdOutlineAccountCircle size={22} />},
//     {id:3, link: "/notification", title: "Notifications", icon: <MdNotificationsNone size={24} />},
//     {id:4, link: "/board", title: "Board", icon: <BsClipboard size={21} />},
//     {id:5, link: "/settings", title: "Settings", icon: <IoSettingsOutline size={22} />},
// ];

export const userSidebarLinks =[

    {id:1, link: "/dashboard", title: "Dashboard", icon: <MdOutlineDashboard size={22} />},
    {id:2, link: "/profile", title: "Profile", icon: <MdOutlineAccountCircle size={22} />},
    {id:3, link: "/jobboard", title: "Board", icon: <BsClipboard size={21} />},
    {id:4, link: "/notification", title: "Notifications", icon: <MdNotificationsNone size={23} />},
    {id:5, link: "/settings", title: "Settings", icon: <IoSettingsOutline size={22} />},
];

export const settingsLink =[
    {id:1, link: "", title: "Account"},
    {id:2, link: "/notification", title: "Notifications"},
    {id:3, link: "", title: "Teams"},
]



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
];

export const menuTab = [
    {id:1, heading: "Projects"},
    {id:2, heading: "Experiences"},
    {id:3, heading: "Awards"},
    {id:4, heading: "Skills"},
];

export const statsTab = [
    {id:1, title: "Saved Jobs", stat: 150, thread: "+18"},
    {id:2, title: "Completed", stat: 50, thread: "+8"},
    {id:3, title: "Pending", stat: 20, thread: "+5"},
];

export const jobsData= [
    {id:1, title: "Frontend web developer", company: "google", type: "full-time", location:"Remote", date: "5 days ago"},
    {id:2, title: "backend engr", company: "Amazon", type: "Contract", location:"Ireland", date: "3 days ago"},
    {id:3, title: "React Developer", company: "Huawei", type: "Contract", location:"China", date: "a day ago"}
]

export const notificationData =[
    {id:1, title: "Wekbod updates", description:"Wekbod releases new feature for instant coding tests and results", time: "12:30"},
    {id:1, title: "Now Hiring", description:"Software engineers in Berlin", time: "12:30"},
    {id:1, title: "Google updates", description:"Google has a new jo update for you", time: "14:30"},
    {id:1, title: "Application Opened", description:"Your Job application for LN Global has been opened", time: "10:00"},
]
