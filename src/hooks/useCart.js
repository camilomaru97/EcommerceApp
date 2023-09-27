import { useDispatch } from "react-redux";
import { addCart, deleteCartProduct } from "../actions/cartActions";

export const useCart = () => {

   const dispatch = useDispatch()

  const onAddCart = (product) => {
    dispatch(addCart(product));
  };

  const onDeleteCart = (id) => {
    dispatch(deleteCartProduct(id))

}
  return {
    onAddCart,
    onDeleteCart
  };
};
