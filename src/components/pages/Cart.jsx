import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { useSelector } from 'react-redux';
import { ProductCart } from '../ProductCart';
import { useState } from 'react';

export const Cart = () => {
  let sumaPrecios = 0;
  const cart = useSelector((state) => state.cart);
  const [sumaUpdated, setSumaUpdated] = useState(0);
  const [cantidadValue, setCantidadValue] = useState(1);
  const numberProductsAdded = cart ? cart.productos.length : 0;

  if (cart?.productos) {
    cart.productos.forEach((producto) => {
      sumaPrecios += Number(producto.precioTotal);
    });
  }
  
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  const formatingNumberPrice = formatNumber(sumaPrecios);


  return (
    <>
      <Header />
      <div className="general_container">
        <section className="cart_container">
          <h1>TU CARRITO</h1>
          <p>
            TOTAL de: {numberProductsAdded} productos{' '}
            <span style={{ color: 'black' }}>${sumaUpdated ? sumaUpdated : formatingNumberPrice}</span>
          </p>
          <p className="msg_warning">
            Los artículos en tu carrito no están reservados. Termina el proceso
            de compra ahora para hacerte con ellos.
          </p>
          <div className="entrega_add">
            <h3>ENTREGA RAPIDA</h3>
            <p>
              Hasta el 30 de septiembre aprovecha express delivery por $14,990.
              Recibe tu pedido al siguiente día hábil. Aplica para pedidos con
              pago confirmado hasta las 11:59 pm. Los pedidos con pago
              confirmado los Viernes después de las 11:59pm, se prepararán el
              Lunes siguiente para entrega en 24hrs.
            </p>
            <p style={{ marginTop: '1rem' }}>Valido solo para Bogota</p>
          </div>

          <section className="cart_product">
                <ProductCart />
          </section>
        </section>

        <section className="cart_payment">
          <Link to="/info-entrega">
            <button onClick={() => {}}>Ir a Pagar</button>
          </Link>
          <h2 style={{ margin: '1.5rem 0rem' }}>RESUMEN DEL PEDIDO</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '5rem',
            }}
          >
            <p>{numberProductsAdded} productos</p>
            <p>${sumaUpdated ? sumaUpdated : formatingNumberPrice}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '5rem',
              marginBottom: '1.5rem',
            }}
          >
            <p>Entrega</p>
            <p>Gratis</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '5rem',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ fontWeight: '600' }}>Total</p>
            <p style={{ fontWeight: '600' }}>${formatingNumberPrice}</p>
          </div>
          <p style={{ textDecorationLine: 'underline', cursor: 'pointer' }}>
            ¿Tienes un código de descuento?
          </p>
        </section>
      </div>
    </>
  );
};
