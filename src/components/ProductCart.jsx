import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';

export const ProductCart = ({ producto, setSumaUpdated }) => {
  const [precioValue, setPrecioValue] = useState(null);
  const [cantidadValue, setCantidadValue] = useState(1);
  const cantidad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { onDeleteCart } = useCart()

  useEffect( () => {
    return setPrecioValue((producto.precio * cantidadValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
  }, [cantidadValue])

    setSumaUpdated(precioValue);

  const hanldeInputCantidad = (e) => {
    setCantidadValue(e.target.value)
  };

  const hanldeCloseClick = (e) => {
    onDeleteCart(producto.id)
}

  return (
    <>
      <div className="box_cart_product">
        <div className="cart_product_img">
          <img src={producto.urlImg} alt={producto.name} />
        </div>
        <div className="cart_product_info">
          <h3 style={{ fontSize: '1.5rem' }}>{producto.name}</h3>
          <p style={{ fontSize: '1.2rem' }}>${precioValue}</p>
          <p style={{ marginBottom: '2rem' }}>Talla: 10</p>
          <p> {producto.stock} productos en Stock</p>
          <select onChange={hanldeInputCantidad} name="Cantidad">
            {cantidad.map((number) => (
              <option  
                key={number}
                name="cantidad"
                value={number}
              >
                {number}
              </option>
            ))}
          </select>
          <div className="close">
            <span onClick={hanldeCloseClick} className="material-symbols-outlined fav">close</span>
          </div>
        </div>
      </div>
    </>
  );
};
