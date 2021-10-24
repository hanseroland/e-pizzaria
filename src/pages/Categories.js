import { Box ,Container,Grid,Typography} from '@material-ui/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import ProductPat from '../components/Products/ProductPat';
import ProductPizza from '../components/Products/ProductPizza';



const Title = styled.h1`
    margin:20px;
`; 

const FilterContainer = styled.div`
      display: flex;
      justify-content: space-between;
`;

const Filter = styled.div`
    margin:20px;
   
`;

const FilterText = styled.span`
      font-size: 20px;
      font-weight: 600;
      margin-right: 20px;
      

`;

const Select = styled.select`
       padding: 10px;
       margin-right:20px;
      
`;

const Option = styled.option``;



function Categories(props) {

    const location = useLocation();
    const typ = location.pathname.split("/")[2];
    const [trie, setTrie] = useState("asc");
    const [filters, setFilters] = useState({}); 
  

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    };

   const displayType = () => {
        if(typ === "pizza"){
                
            return (
                <ProductPizza 
                         typ={typ} 
                         filters={filters} 
                         trie={trie} 
                />
            )
                
        }else{
                return( 
                
                  <ProductPat 
                         typ={typ} 
                         filters={filters} 
                         trie={trie}
                  />
                
                )
        }
    }

   const displayFilter = () => {
       if(typ === "pizza"){
           return(
            <Select name="categorie" onChange={handleFilters}>
                <Option disabled >Catégories</Option>
                <Option value="fromage" > Fromage</Option>
                <Option  value="poulet"> Poulet</Option>
                <Option value="viande" > Viande</Option>
                <Option value="fruits_de_mer" > Fruits de mer</Option>
            </Select>
           )
       }else{
           return(
            <Select name="categorie" onChange={handleFilters}>
                <Option disabled >Catégories</Option>
                <Option value="chocolat" > Chocolat</Option>
                <Option value="creme">Crème</Option>
            </Select>
           )
       }
   }


    return (
        <Box
        mt={0}
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
            <>
                <Title> {typ.toUpperCase()}</Title>
                <Grid  container>
                    
                       <Grid  item xs={12} >
                            <FilterContainer>
                                    <Filter>
                                        <FilterText>Filtrer les produits: </FilterText>
                                        {displayFilter()}
                                    </Filter> 
                                    <Typography  variant="h6" align="center" component="h6" > {typ.toUpperCase()}</Typography>
                                    <Filter>
                                        <FilterText>Trier les produits :</FilterText>
                                        <Select onChange={(e)=> setTrie(e.target.value)}>
                                            <Option value="asc" > Plus chère </Option>
                                            <Option value="desc" > Moins Chère </Option>
                                        </Select>
                                    </Filter>
                                </FilterContainer>
                                {displayType()}
                       </Grid>
                       
                       
                </Grid>
              
            </>
        </Box>
    )
}

export default Categories 
 