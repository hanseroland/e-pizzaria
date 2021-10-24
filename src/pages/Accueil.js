import React from 'react'
import Feature from '../components/Feature';
import Pizzas from '../components/Products/Pizzas'
import { products } from '../data/data';
import Patisseries from '../components/Products/Patisseries';
import Slide from '../components/Slide';


function Accueil() {
    return (
        <div>
            <Slide/>
           <Pizzas heading='Choisissez votre préférée' data={products} />
           <Feature />
           <Patisseries heading='Gâteries sucrées pour vous' data={products} /> 
        </div>
    )
}

export default Accueil
