import Header from "components/generalHeader/header";
import SideBar from "components/generalSidebar/sidebar";
import ContactForm from "./contactForm";

const ContactDetails = () => {
    return ( 
        <div>
            <Header />
            <div className='flex flex-row'>
                <SideBar />
                <ContactForm />
            </div>
        </div>
     );
}
 
export default ContactDetails;