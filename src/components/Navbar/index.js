import React from 'react'
import { Bars, Nav, NavBtn, NavCart, NavIcon, NavLink } from './NavbarElements'
import { Badge } from '@material-ui/core';
import * as AiIcons from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = ({toggle}) => {


    const cart = useSelector(state=>state.cart)

    return (
        <Nav>
            <NavLink to="/" >
                <Bars/>
                Pizza
            </NavLink>
           
           
            <NavBtn>
                <NavIcon> 
                 <NavCart to="/panier" >
                   <Badge
                        badgeContent={cart.addedItems.length} color="error"
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                   >
                        <AiIcons.AiOutlineShoppingCart size={26} />
                        <p>Panier</p>
                   </Badge>
                   </NavCart>
                </NavIcon>
                <NavIcon  onClick={toggle} >
                    <FaBars  size={26} />
                    <p>Menu</p>
                </NavIcon>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
