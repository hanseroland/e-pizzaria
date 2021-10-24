import {Grid,Box, Container, Button, makeStyles, } from '@material-ui/core';
import { 
        AddContainer,
        Desc,
        FilterContainer,
        Image, 
        ImgContainer, 
        Price, 
        Title,
} from './ProduitElement';




const useStyles = makeStyles((theme) => ({
   
      buttonStyle: {
        fontSize:12,
        backgroundColor:"#882b2d"
    }
  }));

function Produit(props) {


    const classes = useStyles();



   /*function displayFavoriteImage(){
    let heart =  <FavoriteBorder onClick={()=> handleFavorite(product)}/>
    if( favorites.favoritesProduct.findIndex(item => item._id === product._id) !== -1 ){
        heart =  <Favorite  color="secondary" onClick={()=> handleFavorite(product)}/>
     }
     return (
        <Icon>
               {heart}
        </Icon>
     )
   }*/

    return (
        <Box
        mt={2}
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
            <Container maxWidth={false}>
                   <Grid container >
                        <Grid item  lg={6}  xs={6} >
                            <ImgContainer>
                                  <Image src={require('../images/pexels-ella-olsson-3026804.jpg').default}/>
                            </ImgContainer>  

                        </Grid>
                        <Grid item   lg={6} md={6} xs={6} >
                            <Title> Gateeau </Title>
                            <Desc>
                               {/*product.description*/} Description
                            </Desc>
                            {/*displayFavoriteImage()*/}
                            <Price> 5000 Fcfa</Price>

                            <FilterContainer>
                            {/*<Filter>
                                <FilterTitle>Couleur</FilterTitle>
                                {product.color?.map((c,index) => (
                                    <FilterColor color={c} key={index} onClick={() => setColor(c)} />
                                ))}                            
                            </Filter>
                            <Filter>
                                <FilterTitle>Taille</FilterTitle>
                                 <FilterSize  onChange={(e) => setSize(e.target.value)}  >
                                 {product.size?.map((s,index) => (
                                        <FilterOption key={index}>{s}</FilterOption>
                                    ))}
                                 </FilterSize>
                            </Filter>*/}
                        </FilterContainer>
                        <AddContainer>
                    
                            <Button 
                                 variant="contained"
                                 color="primary"  
                                 size="large"
                                 fullWidth
                                 // onClick={handleClick}
                                  className={classes.buttonStyle}
                                   >
                                Ajouter au Panier
                            </Button>
                        </AddContainer>
                     </Grid>
                   </Grid>
            </Container>
        </Box>
    )
}

export default Produit