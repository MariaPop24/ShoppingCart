import React from "react";
import "./Product.scss";

const Product = (props) => {
	const { product, addToCart } = props;

	return <div className="product">
		<img className="small" src={product.image} alt={product.name} />
		<h3>{product.name}</h3>
		<div>${product.price}</div>
		<div>
			<button className="add-to-cart-button" onClick={() => addToCart(product)}>Add To Cart</button>
		</div>
	</div>
}

export default Product;
