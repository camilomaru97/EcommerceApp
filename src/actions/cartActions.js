import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_PRODUCT_CART, RESET_PRODUCT_CART } from '../types';

//Update cart
export const updateCartFullfilled = (product) => ({ type: UPDATE_PRODUCT_CART, payload: product})
export const updateCart = (product) => {
  return async (dispatch) => {
    dispatch(updateCartFullfilled(product))
  }
}

// Add Cart
export const addCartFullfilled = (product) => ({
  type: ADD_PRODUCT_CART,
  payload: product,
});

export const addCart = (product) => {
  return (dispatch) => {
    dispatch(addCartFullfilled(product));
  };
};
// Delete Cart
export const deteleCarFullfilled = (id) => ({
  type: DELETE_PRODUCT_CART,
  payload: id,
});

export const deleteCartProduct = (id) => {
  return (dispatch) => {
    console.log( typeof id)
    dispatch(deteleCarFullfilled(id));
  };
};

export const resetCardPurchase = () => ({ type: RESET_PRODUCT_CART })
export const resetCart = () => {
  return (dispatch) => {
    dispatch(resetCardPurchase())
  }
}
