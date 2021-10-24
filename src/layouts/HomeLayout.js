import React,{useState} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import { GlobalStyle } from '../globalStyles';



const HomeLayout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
             <GlobalStyle/>
            <ScrollToTop/>
            <Navbar  toggle={toggle}/>
            <Sidebar  isOpen={isOpen} toggle={toggle}/>
            {children}
            <Footer/>
        </>
    )
}

export default HomeLayout