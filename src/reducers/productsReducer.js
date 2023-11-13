import {
  GET_PRODUCT_FULLFILLED,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_REJECTED,
  DELETE_GET_PRODUCT,
  DELETE_PRODUCT_FULLFILLED,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_REJECTED,
  POST_PRODUCT_FULLFILLED,
  POST_PRODUCT_PENDING,
  POST_PRODUCT_REJECTED,
  UPDATE_PRODUCT_FULLFILLED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_REJECTED,
  UPDATE_GET_PRODUCT,
  POST_COMMENT_PENDING,
  POST_COMMENT_REJECTED,
  POST_COMMENT_FULLFILLED
} from '../types';

const initialState = {
  productos: [],
  error: false,
  loading: false,
  productoEliminar: null,
  productoActualizar: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_PENDING:
    case POST_PRODUCT_PENDING:
    case UPDATE_PRODUCT_PENDING:
    case DELETE_PRODUCT_PENDING:
    case GET_PRODUCT_PENDING:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case POST_COMMENT_REJECTED:  
    case UPDATE_PRODUCT_REJECTED:
    case POST_PRODUCT_REJECTED:
    case DELETE_PRODUCT_REJECTED:
    case GET_PRODUCT_REJECTED:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_PRODUCT_FULLFILLED:
      return {
        error: false,
        loading: false,
        productos: action.payload,
      };

    case DELETE_GET_PRODUCT:
      return {
        ...state,
        productoEliminar: action.payload,
      };

    case UPDATE_GET_PRODUCT:
      return {
        ...state,
        productoActualizar: action.payload,
      };

    case DELETE_PRODUCT_FULLFILLED:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };

    case POST_PRODUCT_FULLFILLED:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };

    case UPDATE_PRODUCT_FULLFILLED:
      return {
        ...state,
        productoActualizar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    
      case POST_COMMENT_FULLFILLED: 
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.productoId
            ? (producto = action.payload)
            : producto
        ),
      }

    default:
      return state;
  }
};
