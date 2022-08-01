import React from "react";
import Product from "../Product/Product";
import "./ProductsList.css";

const ProductsList = (props) => {
	const { products, addToCart } = props;

	return (
		<div className="products-list">
			<div className="row">
				{products.map((product) => (
					<Product key={product.id} product={product} addToCart={addToCart} />
				))}
			</div>
		</div>)
}

export default ProductsList;
