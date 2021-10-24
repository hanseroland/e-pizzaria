import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #e31837;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;
export const ProductDimention = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  
`;

export const FilterSize = styled.select`
   margin-left:10px;
   padding: 5px;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;

`;

export const FilterTitle = styled.span`
    font-weight:200;
    font-size: 20px;

    @media only screen and (max-width:768px){
            font-size: 15px;
            font-weight: bold;
        }

`;

export const FilterOption = styled.option``;



export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e9ba23;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
