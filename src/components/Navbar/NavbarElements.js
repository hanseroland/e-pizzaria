import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #f2b10e;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position: fixed;
  width: 100%;
  z-index: 100;
`; 

export const NavCart = styled(Link)`
  margin-left: 2rem;
  margin-right: 0.5rem;
  font-size: 1.2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

 p{
   transform: translate((175%,100%));
   font-weight: bold;
   @media screen and (max-width: 480px){
      display: none;
   }
 }

`;

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;

`;

export const NavLink = styled(Link)`
   color: #fff;
   font-size: 2rem;
   display: flex;
   align-items: center;
   text-decoration: none;
   cursor: pointer;

   @media screen and (max-width: 480px){
       position: absolute;
       top: 10px;
       left: 25px;
       
   }
`;

export const NavIcon = styled.div`


 margin-left: 2rem;
  margin-right: 0.5rem;
  font-size: 1.2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

 p{
   transform: translate((175%,100%));
   font-weight: bold;
   @media screen and (max-width: 480px){
      display: none;
   }
 }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(20%,-10%);
  
`
