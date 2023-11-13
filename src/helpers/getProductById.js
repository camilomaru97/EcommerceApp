import { useSelector } from "react-redux";


export const getProductById = (id) => {
  const { productos } = useSelector((state) => state.productos);
  const castingId = Number(id)
  productos.find((product) => product.id === id)
  return productos.find((product) => product.id === castingId);
};
