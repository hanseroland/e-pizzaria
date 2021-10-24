import { useEffect, useState } from "react";
import styled from "styled-components";
import { TreeView } from "@material-ui/lab";
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
    ProductDimention,
    Filter,
    FilterOption,
    FilterSize,
    ProductsHeading
} from "./ProductsElements";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;

const ProductPizza = ({ typ, filters, trie }) => {


  const [productTab, setProductTab] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [prix,setPrix] = useState()


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

  //[...prev].sort((a, b) => a.prix - b.prix     )
  useEffect(() => {
     if (TreeView === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.dimensions?.map(item => item.prix) - b.dimensions?.map(item => item.prix))
      );
      //console.log([...filteredProducts].sort((a, b) => a.dimensions?.map(item => item.prix) - b.dimensions?.map(item => item.prix)))
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.dimensions?.map(item => item.prix) - a.dimensions?.map(item => item.prix))
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
                                <ProductDimention>
                                    <Filter>
                                        
                                        <FilterSize  onChange={(e) => setPrix(e.target.value)}>
                                        <FilterOption value="string" >Sélectionnez un prix</FilterOption>
                                            {product.dimensions?.map((dim,index) => (
                                                <FilterOption key={index} value={dim.prix}>{dim.taille} - {dim.prix} Fcfa </FilterOption>
                                            ))}
                                        </FilterSize>
                                    </Filter>
                            </ProductDimention>
                        <ProductButton  onClick={()=>handleAddTocart(product._id,prix)}  > Ajouter au panier</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                  ))
                
                :productTab.slice(0,8).map((product,index) => (
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
                                                <FilterOption key={index} value={dim.prix}>{dim.taille} - {dim.prix} Fcfa </FilterOption>
                                            ))}
                                        </FilterSize>
                                    </Filter>
                            </ProductDimention>
                        <ProductButton   onClick={()=>handleAddTocart(product._id,prix)} > Ajouter au panier</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                  ))
            }
        </ProductWrapper>
    </ProductsContainer>

  );
};

export default ProductPizza;