import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART } from '../types';

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
