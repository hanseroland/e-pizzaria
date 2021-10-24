import { useEffect, useState } from "react";
import styled from "styled-components";
import { TreeView } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { products } from "../../data/data";
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
} from "./ProductsElements";
import { addToCart } from "../../actions/cartActions";



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductPat = ({ typ, filters, trie }) => {


  const [productTab, setProductTab] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
  
  useEffect(() => {
    const getProducts = async () => {
     setProductTab(products.filter(item => item.type === typ))
    };
    getProducts();
  }, [typ]);

  useEffect(() => { 
    typ &&
      setFilteredProducts(
        productTab.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [productTab, typ, filters]);

  useEffect(() => {
     if (TreeView === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.prix - b.prix)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.prix - a.prix)
      );
    }
  }, [trie]);


  return (
  
    <ProductsContainer>
        <ProductWrapper>
            {
                typ
                ? filteredProducts.map((product,index) => (
                    <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                      <ProductTitle>{product.nom}</ProductTitle>
                      <ProductDesc>{product.description}</ProductDesc>
                           <ProductPrice>{product.prix} Fcfa </ProductPrice> 
                      <ProductButton  onClick={()=>handleAddTocart(product._id,product.prix)}> Ajouter au panier</ProductButton>
                    </ProductInfo>
                  </ProductCard>
                  ))
                
                :productTab.slice(0,8).map((product,index) => (
                    <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                      <ProductTitle>{product.nom}</ProductTitle>
                      <ProductDesc>{product.description}</ProductDesc>
                           <ProductPrice>{product.prix} Fcfa </ProductPrice> 
                      <ProductButton  onClick={()=>handleAddTocart(product._id,product.prix)}> Ajouter au panier</ProductButton>
                    </ProductInfo>
                  </ProductCard>
                  ))
            }
        </ProductWrapper>
    </ProductsContainer>

  );
};

export default ProductPat;