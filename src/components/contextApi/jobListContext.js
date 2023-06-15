import { createContext, useState } from "react";

export const JobListContext = createContext();

const JobListProvider = ({children}) =>{

    const [jobListings, setJobListings] = useState([]);

    return(
        <JobListContext.Provider value={{jobListings, setJobListings}}>
            {children }
        </JobListContext.Provider>
    )
};

export default JobListProvider;