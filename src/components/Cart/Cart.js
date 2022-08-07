import React from "react";
import "./Cart.scss"

const Cart = (props) => {
	const { cartItems, addToCart, removeFromCart } = props;
	const totalPrice = cartItems.reduce((total, current) => total + current.price * current.quantity, 0);
	const numberOfProducts = cartItems.reduce((total, current) => total += current.quantity, 0)

	return (
		<div className="cart">
			{cartItems.length === 0 &&
				(<div className="empty-cart">
					<div className="empty-cart-title">Cart is empty</div>
					<div className="empty-cart-content">
						Looks like you haven't added any prodicts to your cart yet.
					</div>
				</div>)}
			<div className="shoppingcart">
				{cartItems.length > 0 && cartItems.map((item, index) => (
					<div key={index} className="shoppingcart__item">
						<img
							className="shoppingcart__item--image"
							src={item.image}
							alt={item.name} />
						<div>
							<div className="shoppingcart__item--title">{item.name}</div>
							<div className="shoppingcart__item--price">
								Subtotal: {(item.quantity * item.price).toFixed(2)}
							</div>
							<div className="shoppingcart__item--quantity">
								<button onClick={() => removeFromCart(item)} className="shoppingcart__item--buttons">
									-
								</button>
								<div>{item.quantity}</div>
								<button onClick={() => addToCart(item)} className="shoppingcart__item--buttons">
									+
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			{cartItems.length > 0 &&
				<div>
					<div className="total-price">
						<span>Total: </span>
						<span className="total-price--number-of-products">
							{numberOfProducts} produse
						</span>
						<span className="total-price--value">
							{totalPrice.toFixed(2)}$
						</span>
					</div>
				</div>}
		</div>)
}

export default Cart;
