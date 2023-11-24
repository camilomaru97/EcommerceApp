import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProduct,
  deleteProductById,
  getProducts,
  postComments,
  updateFindedProduct,
  updateProductById,
  updatePurchasedProduct,
} from '../actions/productsActions';
import Swal from 'sweetalert2';

export const useProducts = () => {
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getProducts());
  },[]);

  const onDeleteProduct = (id, precio) => {
    dispatch(deleteProductById(id));
    Swal.fire(
      'Eliminado!',
      `El producto con el id ${id} ha sido eliminado correctamente.`,
      'success'
    );
  };

  const onEditProduct = (id) => {
    dispatch(updateProductById(id));
  };

  const onUpdateProductPurchased = (product) => {
    dispatch(updatePurchasedProduct(product))
  } 

  const onEditProductObject = (product, id) => {
    dispatch(updateFindedProduct(product, id));
    Swal.fire(
      'Producto Actualizado!',
      `El producto ha sido actualizado correctamente.`,
      'success'
    );
  };

  const onAddProduct = (product) => {
    dispatch(addNewProduct(product));
    Swal.fire(
      'Nuevo Producto!',
      `El producto ${product.name} ha sido añadido correctamente.`,
      'success'
    );
  };

  const onPostComment = (inputComment, productos) => {
    inputComment.productoId = productos.id
    dispatch(postComments(inputComment, productos))
    Swal.fire(
      'Nuevo Comentario!',
      `Se ha posteado tu comentario correctamente.`,
      'success'
    );
  }

  return {
    productos,
    onDeleteProduct,
    onEditProduct,
    onAddProduct,
    onEditProductObject,
    onPostComment,
    onUpdateProductPurchased
  };
};
