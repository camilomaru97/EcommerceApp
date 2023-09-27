import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

export const combineReducer = combineReducers({
  productos: productsReducer,
  cart: cartReducer,
});
