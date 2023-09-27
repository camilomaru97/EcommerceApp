import { useProducts } from '../hooks/useProducts';

export const getProductById = (id) => {
  const { productos } = useProducts();
  return productos.find((product) => product.id === id);
};
