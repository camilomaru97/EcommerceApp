import { Footer } from "../Footer"
import { Header } from "../Header"
import { MapsGoogle } from "../MapsGoogle"
import { ProductsListFilter } from "../ProductsListFilter"

export const WomenProducts = () => {
  return (
    <>
      <Header />
      <ProductsListFilter section='Women' />
      <MapsGoogle />
      <Footer />
    </>
  )
}