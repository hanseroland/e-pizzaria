import React from 'react';
import {
  ProductsContainer,
    ProductWrapper,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
    ProductsHeading
} from './ProductsElements';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

 
const Patisseries = ({ heading, data }) => {

  const dispatch = useDispatch();

  const handleAddTocart = (id,prixItem) => {
    if(prixItem === undefined  || prixItem === "string"  ){
       alert("Veuillez sélectionner un prix avant d'ajouter")
    }else{
      dispatch(
        addToCart(id,prixItem)
     )   
    }
    
  }
 
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {
        data.filter(item => item.type === "pâtisserie").slice(0,6).map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.nom}</ProductTitle>
                <ProductDesc>{product.description}</ProductDesc>
                     <ProductPrice>{product.prix} Fcfa </ProductPrice> 
                <ProductButton onClick={()=>handleAddTocart(product._id,product.prix)}  > Ajouter au panier</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
  
    </ProductsContainer>
  );
};

export default Patisseries;
