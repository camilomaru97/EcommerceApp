import { useDispatch } from "react-redux";
import { addCart, deleteCartProduct, resetCart } from "../actions/cartActions";

export const useCart = () => {

   const dispatch = useDispatch()

  const onAddCart = (product) => {
    dispatch(addCart(product));
  };

  const onDeleteCart = (id) => {
    dispatch(deleteCartProduct(id))
  }

  const onResetCart = () => {
    dispatch(resetCart())
  }

  return {
    onAddCart,
    onDeleteCart,
    onResetCart
  };
};
