import { Route, Routes } from "react-router-dom"
import { WomenProducts } from "../components/pages/WomenProducts"
import { MenProducts } from "../components/pages/MenProducts"
import { SportsProducts } from "../components/pages/SportsProducts"
import { Products } from "../components/pages/Products"
import { ProductPage } from "../components/ProductPage"
import { Cart } from "../components/pages/Cart"
import { AdminProducts } from "../components/pages/AdminProducts"
import { InfoEntrega } from "../components/pages/InfoEntrega"
import { Provider } from "react-redux"
import { store } from "../store/store"

export const RouterApp = () => {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/all" element={<Products />} />
        <Route path="/*" element={<Products />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/sport" element={<SportsProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/info-entrega" element={<InfoEntrega />} />

        {/* Ruta Dinamica */}
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Provider>
  )
}