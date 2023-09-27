import { getProductsBySection } from "../helpers/getProductsBySection"
import { AllProduct } from "./AllProduct"

export const ProductsListFilter = ({ section }) => {
	const productsList = getProductsBySection(section)

	return (
		<main className="products_container_filter">
			<section className="products">
				{
					productsList.map(produc => (
						<AllProduct
							key={produc.id}
							products={produc}
						/>
					))
				}
			</section>
		</main>

	)
}