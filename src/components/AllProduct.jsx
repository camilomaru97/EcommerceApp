import { Link } from "react-router-dom"

export const AllProduct = ({ products }) => {
	const { id, section, urlImg, name, precio } = products
	return (
		<div className="product">
			<Link
				to={`/product/${id}`}
			>
				<img
					className="product_image"
					src={urlImg}
					alt={name}
				/>
			</Link>

			<div className="product_info">
				<h3>{name}</h3>
				<p>${precio}</p>
			</div>
		</div>
	)
}