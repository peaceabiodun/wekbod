import CreateBio from "pages/createProfilePages/bio";
import ContactDetails from "pages/createProfilePages/contactDetails";
import ExperienceDetails from "pages/createProfilePages/experience";
import { useState } from "react";



export default function ProfileSetup(){
    const [profileState, setProfileState] = useState({
        bio: true,
        contact: false,
        experience: false,
        projects: false,
        education: false,
        previewCv: false,
    })
    return(
        <>
            {profileState.bio ? (
                <CreateBio 
                    profileState={profileState}
                    setProfileState= {setProfileState}
                />
            ):profileState.contact ? (
                <ContactDetails
                    profileState={profileState}
                    setProfileState= {setProfileState}
                />
            ):profileState.experience ? (
                <ExperienceDetails 
                profileState={profileState}
                setProfileState= {setProfileState}
                />
            ): null }
        </>
    )

}