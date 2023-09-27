import { productsApi } from '../utils/axios';

export const getProductsApi = async () => {
  try {
    const { data } = await productsApi.get('productos');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fileUploadApi = async (file) => {
  if (!file) throw new Error(' No se tiene ningun archivo a subir');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dhw9dwugf/upload';
  const formData = new FormData();

  formData.append('upload_preset', 'ecommerce-app');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });
    if (!resp.ok) throw new Error('No se pudo subir la imagen');
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProducApi = async (id) => {
  try {
    const { data } = await productsApi.delete(`productos/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addProductApi = async (product) => {
  try {
    const { data } = productsApi.post('productos', product);
    return data;
  } catch (error) {
    throw new Error('No existe el producto para añdir');
  }
};

export const updateProductApi = async (product, id) => {
  try {
    const { data } = await productsApi.put(`productos/${id}`, product);
    return data;
  } catch (error) {
    throw new Error('No se ha podido actualizar el producto');
  }
};

export const postCommentApi = async (product, id) => {
  try {
    const { data } = await productsApi.put(`productos/${id}`, product);
    return data
  } catch (error) {
    throw new Error('No se posteo el comentario')
  }
};
