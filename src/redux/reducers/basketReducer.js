import { 
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
  INCREASE_QTY_ITEM,
  DECREASE_QTY_ITEM
} from "../../constants/constants"

const initState = []


const basketReducer = (state=initState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return state.some((product) => product.id === action.payload.id) 
      ? state.map((product) => {
        return product.id === action.payload.id 
        ?  {
          ...product,
          quantity :product.quantity + 1
        }
        :  product
      })
      : [action.payload,...state ]
    
    case REMOVE_FROM_BASKET:
      return state.filter((product) => product.id !== action.payload); 
    
    case INCREASE_QTY_ITEM:
        return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }
        return product;
      });
    case DECREASE_QTY_ITEM:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        return product;
      });

    case CLEAR_BASKET :
      return []
      
    default : 
      return state
  }

  

}
export default basketReducer;