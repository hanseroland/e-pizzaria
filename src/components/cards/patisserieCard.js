import React, { useState } from 'react'
import {
    ProductWrapper,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
  } from './cardsElements';

function patisserieCard({data}) {
    return (
        <>
        <ProductWrapper>
         {data.map((product, index) => {
             return (
                 <ProductCard key={index}>
                 <ProductImg src={product.img} alt={product.nom} />
                 <ProductInfo>
                     <ProductTitle>{product.nom}</ProductTitle>
                     <ProductDesc>{product.description}</ProductDesc>
                     <ProductPrice>{prix}</ProductPrice>
                     <ProductButton>Ajouter au panier</ProductButton>
                 </ProductInfo>
                 </ProductCard>
             );
             })}
         </ProductWrapper>

     </>
    )
}

export default patisserieCard



