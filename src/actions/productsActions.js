import {
  addProductApi,
  deleteProducApi,
  fileUploadApi,
  getProductsApi,
  postCommentApi,
  updateProductApi,
} from '../services/productsServices';

import {
  GET_PRODUCT_FULLFILLED,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_REJECTED,
  DELETE_PRODUCT_FULLFILLED,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_REJECTED,
  DELETE_GET_PRODUCT,
  UPDATE_PRODUCT_FULLFILLED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_REJECTED,
  UPDATE_GET_PRODUCT,
  POST_PRODUCT_FULLFILLED,
  POST_PRODUCT_PENDING,
  POST_PRODUCT_REJECTED,
  POST_COMMENT_FULLFILLED,
  POST_COMMENT_PENDING,
  POST_COMMENT_REJECTED,
} from '../types';

//Obtener Productos
export const getPorductsPending = () => ({ type: GET_PRODUCT_PENDING });
export const getPorductsError = () => ({ type: GET_PRODUCT_REJECTED });
export const getPorductsFullfilled = (response) => ({
  type: GET_PRODUCT_FULLFILLED,
  payload: response,
});

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getPorductsPending());
    try {
      const res = await getProductsApi();
      dispatch(getPorductsFullfilled(res));
    } catch (error) {
      dispatch(getPorductsError());
    }
  };
};

// Cargar Imagenes
export const startUploadingFiles = (file) => {
  return async (dispatch) => {
    return await fileUploadApi(file);
  };
};

//Eliminar productos
export const deleteGetPorduct = (id) => ({
  type: DELETE_GET_PRODUCT,
  payload: id,
});
export const deletePorductsPending = () => ({ type: DELETE_PRODUCT_PENDING });
export const deletePorductsError = () => ({ type: DELETE_PRODUCT_REJECTED });
export const deletePorductsFullfilled = (response) => ({
  type: DELETE_PRODUCT_FULLFILLED,
  payload: response,
});

export const deleteProductById = (id) => {
  return async (dispatch) => {
    dispatch(deleteGetPorduct(id));
    dispatch(deletePorductsPending());
    try {
      await deleteProducApi(id);
      dispatch(deletePorductsFullfilled());
    } catch (error) {
      dispatch(deletePorductsError());
    }
  };
};

//Añadir producto
export const postPorductPending = () => ({ type: POST_PRODUCT_PENDING });
export const postPorductError = () => ({ type: POST_PRODUCT_REJECTED });
export const postPorductFullfilled = (response) => ({
  type: POST_PRODUCT_FULLFILLED,
  payload: response,
});

export const addNewProduct = (product) => {
  return async (dispatch) => {
    dispatch(postPorductPending());
    try {
      await addProductApi(product);
      dispatch(postPorductFullfilled(product));
    } catch (error) {
      dispatch(postPorductError());
    }
  };
};

//Actualizar productos
export const updateGetProduct = (id) => ({
  type: UPDATE_GET_PRODUCT,
  payload: id,
});

export const updateProductPending = () => ({ type: UPDATE_PRODUCT_PENDING });
export const updateProductError = () => ({ type: UPDATE_PRODUCT_REJECTED });
export const updateProductFullfilled = (product) => ({
  type: UPDATE_PRODUCT_FULLFILLED,
  payload: product,
});

export const updateProductById = (id) => {
  return (dispatch) => {
    dispatch(updateGetProduct(id));
  };
};

export const updateFindedProduct = (product, id) => {
  return async (dispatch) => {
    try {
      dispatch(updateProductPending());
      await updateProductApi(product, id);
      dispatch(updateProductFullfilled(product));
    } catch (error) {
      dispatch(updateProductError());
    }
  };
};

//Actualizar comentarios

export const postCommentPending = () => ({ type: POST_COMMENT_PENDING });
export const postCommentError = () => ({ type: POST_COMMENT_REJECTED });
export const postCommentFullfilled = () => ({
  type: POST_COMMENT_FULLFILLED,
  payload: product,
});

export const postComments = (producto) => {
  return async (dispatch) => {
    dispatch(postCommentPending())
    try {
      await postCommentApi(producto, producto.id)
      dispatch(postCommentFullfilled(producto))
    } catch (error) {
      dispatch(postCommentError())
    }
  };
};
