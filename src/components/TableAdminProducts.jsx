import { useProducts } from '../hooks/useProducts';

export const TableAdminProducts = ({ filteredProducts, filteredByEan }) => {
  const { productos, onDeleteProduct, onEditProduct } = useProducts();

  return (
    <table className="product_table">
      <thead>
        <tr>
          <th>Producto</th>
          <th style={{ textAlign: 'center' }}>Categoria</th>
          <th style={{ textAlign: 'center' }}>Stock</th>
          <th style={{ textAlign: 'center' }}>Precio</th>
          <th style={{ textAlign: 'start' }}>Acciones</th>
        </tr>
      </thead>

      {Array.isArray(filteredByEan)
        ? filteredByEan.map((product) => {
            return (
              <tbody key={product.id}>
                <tr>
                  <td style={{ width: '200px' }}>
                    <div className="info_admin_product">
                      <img src={product.urlImg} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td style={{ width: '200px', textAlign: 'center' }}>
                    {product.section}
                  </td>
                  <td style={{ width: '200px', textAlign: 'center' }}>
                    {product.stock}
                  </td>
                  <td style={{ width: '250px', textAlign: 'center' }}>
                    {product.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  </td>
                  <td>
                    <span
                      onClick={() => onEditProduct(product.id)}
                      title="Editar"
                      className="material-symbols-outlined edit"
                    >
                      edit
                    </span>
                    <span                                       
                      onClick={() => onDeleteProduct(product.id, product.precio)}
                      title="Eliminar"
                      className="material-symbols-outlined delete"
                    >
                       delete
                    </span> 
                  </td>
                </tr>
              </tbody>
            );
          })
        : null}
    </table>
  );
};
