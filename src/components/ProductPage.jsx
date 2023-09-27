import { Navigate, useParams } from "react-router-dom"
import { getProductById } from "../helpers/getProductById"
import { Header } from "./Header"
import { SelectProducInfo } from "./SelectProducInfo"
import { InteractionProduc } from "./InteractionProduc"

export const ProductPage = () => {

	const { productId } = useParams()
	const producto = getProductById(productId)

	if (!producto) {
		return <Navigate to="/all" />
	}

	return (
		<>
			<Header />
			<SelectProducInfo 
				producto={producto}
			/>
			<InteractionProduc
				producto={producto}
			/>
		</>
	)
}