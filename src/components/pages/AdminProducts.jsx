import { useEffect, useRef, useState } from "react"
import { Header } from "../Header"
import { useDispatch, useSelector } from "react-redux"
import { startUploadingFiles } from "../../actions/productsActions"
import { TableAdminProducts } from "../TableAdminProducts"
import { useProducts } from "../../hooks/useProducts"

export const AdminProducts = () => {

	const [inputValues, setInputValues] = useState({
		urlImg: '',
		name: '',
		descripcion: '',
		section: '',
		stock: '',
		precio: '',
		codigoEAN: '',
	})
	const [filterProducts, setFilterProducts] = useState(null)
	const [filterByEan, setFilterByEan] = useState(null)
	const { onAddProduct, onEditProductObject } = useProducts()
	const dispatch = useDispatch()
	const productos = useSelector(state => state.productos.productos)
	const productoUpdateId = useSelector(state => state.productos.productoActualizar)
	const { urlImg, name, descripcion, section, stock, precio, codigoEAN } = inputValues
	const uploadFile = useRef(null)

	useEffect(() => {
		if (productoUpdateId) {
			const producto = productos.find(product => product.id === productoUpdateId)
			setInputValues({
				urlImg: producto.urlImg,
				name: producto.name,
				descripcion: producto.descripcion,
				section: producto.section,
				stock: producto.stock,
				precio: producto.precio,
				codigoEAN: producto.codigoEAN,
			})
		}
	}, [productoUpdateId])
	
	const filteredProducts  = typeof filterProducts === 'string' && filterProducts.length > 0
	? productos.filter(product => {
		return product.name.toLowerCase().includes(filterProducts.toLowerCase())
	})
	: productos
	
	const filteredByEan = typeof filterByEan === 'string' && filterByEan.length > 0 
		? productos.filter( producto => {
			return producto.codigoEAN.toLowerCase().includes(filterByEan.toLowerCase())
		})
		: filteredProducts

	const handleInputImageChange = async ({ target }) => {
		if (target.files === 0) return
		const url = await dispatch(startUploadingFiles(target.files[0]))
		setInputValues({
			...inputValues,
			urlImg: url
		})
	}

	const handleInputChange = (e) => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmitAddProduct = (e) => {
		e.preventDefault()
		onAddProduct(inputValues)
		setInputValues({
			urlImg: '',
			name: '',
			descripcion: '',
			section: '',
			stock: '',
			precio: '',
			codigoEAN: '',
		})
	}

	const hanldeEditProductSubmit = (e) => {
		e.preventDefault()
		onEditProductObject(inputValues, productoUpdateId)
		setInputValues({
			id: null,
			urlImg: '',
			name: '',
			descripcion: '',
			section: '',
			stock: '',
			precio: '',
			codigoEAN: '',
		})
	}

	return (
		<>
			<Header />
			<section className="admin_products">
				<div className="modify_product">
					<h1>Administracion de productos</h1>
					{
						productoUpdateId
							? <h1>Editar Producto</h1>
							: <h1>Agregar Producto</h1>
					}
					<form
						onSubmit={handleSubmitAddProduct}
					>
						<div className="format_input">
							<label
							>
								Nombre Producto
							</label>
							<input
								required
								onChange={handleInputChange}
								type='text'
								name='name'
								value={name}
							/>
						</div>
						<div className="format_input">
							<label
							>
								Precio
							</label>
							<input
								required
								onChange={handleInputChange}
								type='number'
								name='precio'
								value={precio}
							/>
						</div>
						<div className="format_input">
							<label
							>
								Stock
							</label>
							<input
								required
								onChange={handleInputChange}
								type='number'
								name='stock'
								value={stock}
							/>
						</div>
						<div className="format_input">
							<label
							>
								Codigo EAN
							</label>
							<input
								required
								onChange={handleInputChange}
								type='text'
								name='codigoEAN'
								value={codigoEAN}
							/>
						</div>

						<select
							onChange={handleInputChange}
							required
							name="section"
							value={section}
						>
							<option value="">Categoria</option>
							<option value="Men">Hombre</option>
							<option value="Women">Mujer</option>
							<option value="Sport">Deportes</option>
						</select>

						<textarea
							required
							onChange={handleInputChange}
							value={descripcion}
							className="description_input"
							type="text"
							placeholder="Descripcion"
							name="descripcion"
						/>
						<div className="carga_archivo">
							<input
								required
								onChange={handleInputImageChange}
								type="file"
								style={{ display: 'none' }}
								ref={uploadFile}
							/>
							<div className="img_producto">
								{
									!urlImg
										? <p style={{ textAlign: 'center', marginTop: '7rem' }}>Selecciona una imagen</p>
										: <img src={urlImg} alt="" />
								}

							</div>
							<span
								title="Cargar Imagen"
								className="material-symbols-outlined upload"
								onClick={() => uploadFile.current.click()}
							>
								cloud_upload
							</span>

						</div>
						{
							productoUpdateId
								? <button
									onClick={hanldeEditProductSubmit}
									className="agreagar_producto"
									type="submit"
								>
									Editar Producto
								</button>
								: <button className="agreagar_producto">
									Agregar Producto
								</button>
						}

					</form>
				</div>

				<main>
					<div className="actions_header_admin">
						<input
							onChange={(e) => setFilterProducts(e.target.value)}
							type="text"
							placeholder="Search a Product"
						/>
						<input
							onChange={(e) => {
								setFilterByEan(e.target.value)}
							}
							type="text"
							placeholder="Codigo EAN"
						/>
						<button>
							Imprimir Reporte
						</button>
					</div>
					<main className="productsLit_admin">
						<TableAdminProducts 
							filteredProducts={filteredProducts}
							filteredByEan={filteredByEan}
						/>
						<p>{`< 7 de 20 >`}</p>
					</main>
				</main>
			</section >
		</>
	)
}