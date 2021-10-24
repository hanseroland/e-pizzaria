import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
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
    ProductDimention,
    Filter,
    FilterOption,
    FilterSize,
    ProductsHeading
} from './ProductsElements';

 
const Pizzas = ({ heading, data }) => {

  const [prix, setPrix] = useState();

 
  const dispatch = useDispatch();
  
  console.log("select prix", prix)

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
        data.filter(item => item.type === "pizza").slice(0,6).map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.nom}</ProductTitle>
                <ProductDesc>{product.description}</ProductDesc>
                      <ProductDimention>
                           <Filter>
                                
                                 <FilterSize  onChange={(e) => setPrix(e.target.value)}>
                                 <FilterOption value="string" >Sélectionnez un prix</FilterOption>
                                    {product.dimensions?.map((dim,index) => (
                                      <>
                                        <FilterOption key={index} value={dim.prix}>   {dim.taille} - {dim.prix} Fcfa </FilterOption>
                                      </>
                                    ))}
                                 </FilterSize>
                            </Filter>
                          {/*  <ProductPrice>{prix}</ProductPrice> */}
                     </ProductDimention>
                <ProductButton  onClick={()=>handleAddTocart(product._id,prix)} > Ajouter au panier</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
  
    </ProductsContainer>
  );
};

export default Pizzas;
