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
    ProductDimention,
    Filter,
    FilterOption,
    FilterSize,
    FilterTitle
  } from './cardsElements';

function PizzaCard(props) {
    return (
        <>
                    <ProductCard>
                    <ProductImg src={props.data.img} alt={props.data.nom} />
                    <ProductInfo>
                        <ProductTitle>{props.data.nom}</ProductTitle>
                        <ProductDesc>{props.data.description}</ProductDesc>
                        <ProductDimention>
                           <Filter>
                                <FilterTitle>Taille</FilterTitle>
                                 <FilterSize  onChange={(e) => setPrix(e.target.value)}>
                                    {props.data.dimensions?.map((dim,index) => (
                                        <FilterOption key={index} value={dim.prix}>{dim.taille} - {dim.prix} Fcfa </FilterOption>
                                    ))}
                                 </FilterSize>
                            </Filter>
                        </ProductDimention>
                        <ProductButton>Ajouter au panier</ProductButton>
                    </ProductInfo>
                    </ProductCard>
        </>
    )
}

export default PizzaCard
