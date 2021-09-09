import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { NikeCard } from './components/nikeCard';


function App() {
  return (
    <>
     <Router basename={process.env.PUBLIC_URL}>
           <GlobalStyle/>
           <Hero/>
           <Products heading='Choisissez votre préférée' data={productData} />
           <Feature />
           <Products heading='Gâteries sucrées pour vous' data={productDataTwo} />
           <Footer />
           
     </Router>
    </>
  );
}

export default App;
