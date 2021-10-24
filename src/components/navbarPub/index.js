import React from 'react'
import { NavPub, NavPubContainer,NavPubMenu } from './NavpubElement'




const Navbarpub = ({toggle}) => {

    
    return (
        <NavPub>
             <NavPubContainer>
                 <NavPubMenu> 
                       {/* <NavPubImg /> */}
                        <h1>PUBLICITE</h1>
                 </NavPubMenu>
             </NavPubContainer>
             
        </NavPub>
    ) 
}

export default Navbarpub
