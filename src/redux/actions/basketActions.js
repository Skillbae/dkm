import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
  INCREASE_QTY_ITEM,
  DECREASE_QTY_ITEM
} from "../../constants/constants"


export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product
});

export const removeFromBasket = (id) => ({
  type: REMOVE_FROM_BASKET,
  payload: id
});

export const clearBasket = () => ({
  type: CLEAR_BASKET
});

export const increaseQtyItem = (id) => ({
  type: INCREASE_QTY_ITEM,
  payload: id
});

export const decreaseQtyItem = (id) => ({
  type: DECREASE_QTY_ITEM,
  payload: id
});
