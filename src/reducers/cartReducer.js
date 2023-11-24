import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, RESET_PRODUCT_CART, UPDATE_PRODUCT_CART } from '../types';

const initialState = {
  productos: [],
  porductoEliminar: null
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return {
        productos: [...state.productos, action.payload],
      };
    case DELETE_PRODUCT_CART:
      return {
        productos: state.productos.filter(product => product.id !== action.payload)
      };

    case RESET_PRODUCT_CART: 
      return initialState
  
    default:
      return state;
  }
};
