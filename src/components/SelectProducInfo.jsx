import { useCart } from "../hooks/useCart";

export const SelectProducInfo = ({ producto }) => {

	const { section, urlImg, name, precio, stock, codigoEAN } = producto
	const sizes = ['39.5', '40.5', '41', '42', '42.5', '43', '44', '44.5', '45', '45.5', '46', '47']
	const stars = [1, 2, 3, 4, 5];

	const {onAddCart} = useCart()

	const handleClickAddCart = () => {
		onAddCart( producto )
	}

	return (
		<main className="productpage_main">
			<section className="image_container">
				<img
					className="productpage_image"
					src={urlImg}
					alt={name}
				/>
				<div className="main_image">
					<img
						className="box_image"
						src={urlImg}
						alt={name}
					/>
					<img
						className="box_image"
						src={urlImg}
						alt={name}
					/>
					<img
						className="box_image"
						src={urlImg}
						alt={name}
					/>
					<img
						className="box_image"
						src={urlImg}
						alt={name}
					/>
				</div>
			</section>

			<section className="info_container">
				<p style={{ color: 'gray' }} className="cod">{codigoEAN}</p>
				<h1>{name}</h1>
				<div>
					{stars.map((index) => (
						<span key={index} className="material-symbols-outlined stars">
							grade
						</span>
					))}
				</div>
				<h2>${precio}</h2>
				<h3>Stock</h3>
				<p className="stock">{stock} Unidades en Stock</p>
				<p>Size <span style={{ color: 'gray' }}>{`EU · ${section}`}</span></p>
				<div className="size_product">
					{sizes.map(size => (
						<button
							className="size_button"
							key={size}
						>
							{size}
						</button>
					))}
				</div>
				<div className="boton_add">
					<button
						onClick={handleClickAddCart}
					>
						Añadir al Carrito
					</button>
					<span className="material-symbols-outlined fav">
						favorite
					</span>
				</div>
				<div className="delivery">
					<span className="material-symbols-outlined">
						local_shipping
					</span>
					<p>Envio gratuito por compras superiores a $200.000</p>
				</div>

			</section>
		</main>
	)
}