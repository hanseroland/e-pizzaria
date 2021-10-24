import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstants";


export const addToCart = (id,prix) =>  (dispacth) => { 
            dispacth({
                type: ADD_TO_CART,
                payload:{
                    prix :prix,
                    id
                } 
            });
};



export const removeItem = (id) =>  (dispacth) =>  {

          dispacth({
              type: REMOVE_FROM_CART,
              payload:{
                  id,
              } 
          })
 
};

export const substractQuantity = (id) =>  (dispacth) =>  {

  dispacth({
    type: SUB_QUANTITY,
    payload:{
      id
    }
  })
 
};

export const addQuantity = (id) => async (dispacth) => {
  dispacth({
    type: ADD_QUANTITY,
    payload:{
      id
    }
 
  })
 
};
