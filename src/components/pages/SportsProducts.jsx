import { Footer } from "../Footer"
import { Header } from "../Header"
import { MapsGoogle } from "../MapsGoogle"
import { ProductsListFilter } from "../ProductsListFilter"

export const SportsProducts = () => {
  return (
    <>
      <Header />
      <ProductsListFilter section='Sport' />
      <MapsGoogle />
      <Footer />
    </>
  )
}