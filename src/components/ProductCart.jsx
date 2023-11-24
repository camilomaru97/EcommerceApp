import { useCart } from '../hooks/useCart';
import { useSelector } from 'react-redux';

export const ProductCart = () => {
  const cart = useSelector((state) => state.cart.productos);

  const { onDeleteCart } = useCart()

  const hanldeCloseClick = (id) => {
    onDeleteCart(id)
  }

  return (
    <>
    {
      cart.length > 0 &&
      cart.map((producto) => (
        <div className="box_cart_product" key={producto.id}>
          <div className="cart_product_img">
            <img src={producto.urlImg} alt={producto.name} />
          </div>
          <div className="cart_product_info">
            <h3 style={{ fontSize: '1.5rem' }}>{producto.name}</h3>
            <p style={{ fontSize: '1.2rem' }}>${producto.precioTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
            <p style={{ marginBottom: '2rem' }}>Talla: 10</p>
            <p> {producto.stock} productos en Stock</p>
            <p> {producto.cantidadSelect} productos seleccionados</p>
            <div className="close">
              <span onClick={() => hanldeCloseClick(producto.id)} className="material-symbols-outlined fav">close</span>
            </div>
          </div>
        </div>
      ))

    }
    </>
  );
};
