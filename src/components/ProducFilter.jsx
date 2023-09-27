export const ProducFilter = ({ products }) => {
    const { urlImg, name, precio } = products
    return (
        <div className="product">
            <img
                className="product_image"
                src={urlImg}
                alt={name}
            />
            <div className="product_info">
                <h3>{name}</h3>
                <p>${precio}</p>
            </div>
        </div>
    )
}