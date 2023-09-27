import { Footer } from "../Footer"
import { Header } from "../Header"
import { MapsGoogle } from "../MapsGoogle"
import { ProductsListFilter } from "../ProductsListFilter"

export const MenProducts = () => {
  return (
    <>
      <Header />
      <ProductsListFilter section='Men' />
      <MapsGoogle />
      <Footer />
    </>
  )
}