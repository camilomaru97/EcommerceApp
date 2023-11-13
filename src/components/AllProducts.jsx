import { useSelector } from "react-redux";
import { AllProduct } from "./AllProduct"
import { useProducts } from "../hooks/useProducts";


export const AllProducts = () => {
	const { productos } = useSelector((state) => state.productos);
	useProducts();
	return (
		<main className="products_container">
			<section className="products">
				{Array.isArray(productos)
					? productos.map(produc => (
						<AllProduct
							key={produc.id}
							products={produc}
						/>
					))
					: <h2>Cargando...</h2>
				}
			</section>
		</main>
	)
}