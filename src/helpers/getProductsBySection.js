import { useSelector } from 'react-redux';

export const getProductsBySection = (section) => {
  const { productos } = useSelector((state) => state.productos);
  const validSection = ['Men', 'Women', 'Kids', 'Sport'];
  if (!validSection.includes(section)) {
    throw new Error('No existe esta seccion');
  }

  return productos.filter((produc) => produc.section === section);
};
