import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProduct,
  deleteProductById,
  getProducts,
  postComments,
  updateFindedProduct,
  updateProductById,
} from '../actions/productsActions';
import Swal from 'sweetalert2';

export const useProducts = () => {
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onDeleteProduct = (id) => {
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
    productos.comments.push(inputComment)
    dispatch(postComments(productos))
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
    onPostComment
  };
};
