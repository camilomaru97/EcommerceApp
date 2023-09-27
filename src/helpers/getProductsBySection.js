import { useProducts } from '../hooks/useProducts';

export const getProductsBySection = (section) => {
  const { productos } = useProducts();
  const validSection = ['Men', 'Women', 'Kids', 'Sport'];
  if (!validSection.includes(section)) {
    throw new Error('No existe esta seccion');
  }

  return productos.filter((produc) => produc.section === section);
};
