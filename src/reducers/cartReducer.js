import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstants";
import { products } from "../data/data";



const initialState = {
    products: products,
    addedItems: [],
    total: 0,
}


const cartReducer = (state = initialState, action) => {
 
    switch (action.type) { 
        case ADD_TO_CART:
            let addedItem = state.products.find(item => item._id === action.payload.id)
            let existed = state.addedItems.find(item => action.payload.id === item._id)
            let index = state.addedItems.map(item => item._id).indexOf(action.payload.id)
            //let price = parseInt(action.payload.prix)

            if(existed){
               
                state.addedItems[index].quantite +=1

                return{
                    ...state,
                    total:state.total + addedItem.prix
                }
               
            }else{
                addedItem.quantite = 1;
                if(addedItem.prix == undefined){
                    addedItem.prix = parseInt(action.payload.prix);
                }
                let newTotal = state.total + addedItem.prix;

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case REMOVE_FROM_CART:
            let itemToRemove = state.addedItems.find(item => action.payload.id === item._id);
            let newItems = state.addedItems.filter(item => action.payload.id !== item._id);
            let newTotal = state.total - (itemToRemove.prix*itemToRemove.quantite);
            //console.log("removeItem",itemToRemove)
           
            return{
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        case ADD_QUANTITY:
            let addedItemAddQty = state.addedItems.find(item => item._id === action.payload.id);
            addedItemAddQty.quantite +=1;
            let newTotalQty = state.total + addedItemAddQty.prix;
            return{
                ...state,
                total: newTotalQty
            }
        case SUB_QUANTITY:
            let addedItemSubQty = state.addedItems.find(item => item._id === action.payload.id);
            if(addedItemSubQty.quantite === 1){
                let newItemSubQty = state.addedItems.filter(item=>item._id !== action.payload.id);
                let newTotalSubQty = state.total - addedItemSubQty.prix;
                return{
                    ...state,
                    addedItems:newItemSubQty,
                    total:newTotalSubQty
                }
            }else{
                addedItemSubQty.quantite -=1;
                let newTotalSubQt = state.total - addedItemSubQty.prix;
                return{
                    ...state,
                    total:newTotalSubQt
                }
            }
        default:
            return state    
    }
}

export default cartReducer;