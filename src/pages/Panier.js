import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { Box,Container,Grid,makeStyles } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { addQuantity, removeItem, substractQuantity } from '../actions/cartActions';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
   
  buttonStyle: {
    cursor:'pointer'
}
}));

const Wrapper = styled.div`
  padding: 20px;
 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;

  @media only screen and (max-width:768px){
          width: 100px;
        }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width:768px){
          padding: 10px;
        }
`;

const ProductName = styled.span`
 @media only screen and (max-width:768px){
            font-size: 12px;
        }
`;

const ProductId = styled.span`
 @media only screen and (max-width:768px){
            font-size: 12px;
        }
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => props.color};
  @media only screen and (max-width:768px){
            width: 10px;
            height: 10px;
        }
`;

const ProductSize = styled.span`
@media only screen and (max-width:768px){
            font-size:12px;
        }
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width:768px){
            margin-bottom: 10px;
        }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
 
  @media only screen and (max-width:768px){
            font-size: 14px;
        }

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  @media only screen and (max-width:768px){
            font-size: 20px;
        }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  @media only screen and (max-width:768px){
            padding: 10px;
            height: 30vh;
        }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  @media only screen and (max-width:768px){
            font-size: 20px;
        }
  
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  @media only screen and (max-width:768px){
           margin: 20px 0px;
           font-weight: 200;
           font-size: 14px;

        }
`;

const SummaryItemText = styled.span`
 @media only screen and (max-width:768px){
          
           font-size: 12px;

        }
`;

const SummaryItemPrice = styled.span`
 @media only screen and (max-width:768px){
          
          font-size: 12px;

       }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width:768px){
          
          font-size: 12px;

       }
`;

const BtnRemove = styled.button`
  width: 50%;
  border-radius: 10px;
  background-color: #882b2d;
  color: white;
  cursor: pointer;
`;


function Panier(props) {


 const cart = useSelector(state=>state.cart);
 const dispatch = useDispatch();
 const classes = useStyles();
 const history = useHistory();


  const verifyIsLohin = () => {
    alert("Votre commande est prête")
  }



 const handleClick = (id) => {
  dispatch(
    removeItem(id)
  )
     
}

const handleAddQuantity = (id) => {
  dispatch(
    addQuantity(id)
  )
}

const handleSubtractQuantity = (id) => {
  dispatch(
    substractQuantity(id)
    
  )
}

  function getProduitCount() {
    let itemCount = cart.addedItems.reduce((a,b) => a + (b.quantite || 0), 0);
    return itemCount;
  }

function renderCartItems (){
  if(cart.addedItems.length > 0){
     return (
              <Info>
                {cart.addedItems.map((item,index)=>(

                       <Product key={index} >
                          <ProductDetail>
                             <Image src={item.img} />
                              <Details>
                                <ProductName>
                                    <b>Produit:</b> {item.nom}
                                </ProductName>
                                <ProductId>
                                        <b>ID:</b> {item._id}
                                </ProductId>
                                <ProductId>
                                        <b>Prix:</b> {item.prix} Fcfa
                                </ProductId>
                                <ProductSize>
                                        <b>Details:</b> {item.type} - {item.categorie}
                                </ProductSize>
                                </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                   
                                    <MdIcons.MdRemoveCircle  className={classes.buttonStyle}  onClick={()=>handleSubtractQuantity(item._id)} />
                                    <ProductAmount>{item.quantite} </ProductAmount>
                                    <MdIcons.MdAddCircle className={classes.buttonStyle}   onClick={()=>handleAddQuantity(item._id)}  />
                                    
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                           {item.prix*item.quantite}
                                    </ProductPrice>
                                    <BtnRemove   onClick={()=>handleClick(item._id) } >
                                       retirer
                                    </BtnRemove>
                                </PriceDetail>
                                </Product>
                            ))}
                      </Info>
     )
  }else{

    return (
      <h1>Votre panier est vide !!!!</h1>
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

        <Container   maxWidth={false}>
        <Title>VOTRE PANIER</Title>
             <Top>
                 
                   <TopButton onClick={()=> history.push("/")}>Continuer vos achats</TopButton>
                  <TopTexts>
                  <TopText> {getProduitCount()} articles</TopText>
                  </TopTexts>
                <TopButton type="filled">Panier</TopButton>
             </Top>
                <Grid container spacing={1} > 
                    <Grid item lg={7} xs={12}>
                       <Box p={2}>
                          {renderCartItems()}
                        </Box >
                    </Grid>
                    <Grid item lg={5} xs={12}>
                   <Box p={2} mb={6} >
                    <Summary>
                                <SummaryTitle>Résumé de la commande</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Sous total</SummaryItemText>
                                    <SummaryItemPrice>{cart.total} Fcfa</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>TVA</SummaryItemText>
                                    <SummaryItemPrice>0.12%</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Réduction</SummaryItemText>
                                    <SummaryItemPrice>-0.12%</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice>{cart.total} Fcfa </SummaryItemPrice>
                                </SummaryItem>
                            <Button onClick={()=>verifyIsLohin()}>Payer</Button>
                            
                         </Summary>
                    </Box>
                    </Grid>
                </Grid>
        </Container>
        </Box>
     
    )
}
  
export default Panier
 