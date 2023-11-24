import { useState } from "react";
import { useCart } from "../hooks/useCart";

export const SelectProducInfo = ({ producto }) => {

	const [cantidadValue, setCantidadValue] = useState(1);
	const [selectedSize, setSelectedSize] = useState(null);
	const { section, urlImg, name, precio, stock, codigoEAN } = producto
	const [totalCost, setTotalCost] = useState(precio)
	const sizes = ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5']
	const stars = [1, 2, 3, 4, 5];

	const {onAddCart} = useCart()

	const handleClickAddCart = () => {
		producto.precioTotal = totalCost
		producto.cantidadSelect = cantidadValue
		onAddCart( producto )
	}

	const handleSizeClick = (size) => {
		setSelectedSize(size); 
		console.log(size)
	}

	const hanldeInputCantidad = (e) => {
		const newCantidadValue = parseInt(e.target.value, 10);
    	setCantidadValue(newCantidadValue);
		setTotalCost(precio * newCantidadValue)
	};

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
				<h2>${totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h2>
				<h3>Stock</h3>
				<p className="stock">{stock} Unidades en Stock</p>
				<select style={{ marginTop: '-1.3rem', marginBottom: '1rem'}} onChange={hanldeInputCantidad} name="Cantidad" value={cantidadValue}>
					{Array.from({ length: stock }, (_, index) => (
						<option key={index + 1} value={index + 1}>
							{index + 1}
						</option>
					))}
				</select>
				<p>Size <span style={{ color: 'gray' }}>{`EU · ${section}`}</span></p>

				<div className="size_product">
					{sizes.map(size => (
						<button
							onClick={() => handleSizeClick(size)}
							className={`size_button ${selectedSize === size ? 'selected' : ''}`}
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
