import React,{useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import { NavPub } from '../components/navbarPub/NavpubElement';
import { GlobalStyle } from '../globalStyles';


const DetailLayout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    
    return (
        <>
                 <GlobalStyle/>
                 <ScrollToTop/>
                 <NavPub/>
                 <Navbar  toggle={toggle}/>
                 <Sidebar  isOpen={isOpen} toggle={toggle}/>
                       {children}
                <Footer/>
            
        </>
    );
};


export default DetailLayout;