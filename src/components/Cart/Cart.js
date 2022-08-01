import React from "react";
<<<<<<< HEAD
import "./Cart.scss"

const Cart = (props) => {
	const { cartItems, addToCart, removeFromCart } = props;
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

	return <div className="cart">
		{cartItems.length === 0 &&
			(<div className="empty-cart">
				<div className="empty-cart-title">Cart is empty</div>
				<div className="empty-cart-content">
					Looks like you haven't added any prodicts to your cart yet.
				</div>
			</div>)}
		<div>
			{cartItems.length > 0 &&
				cartItems.map((item) => {
					<div key={item.id} className="row">
						{console.log(item)}
						<div className="col-2">{item.name}</div>
						<div className="col-2">
							<button onClick={() => removeFromCart(item)} className="remove">
								-
							</button>{' '}
							<button onClick={() => addToCart(item)} className="add">
								+
							</button>
						</div>

						<div className="col-2 text-right">
							{item.quantity} x ${item.price.toFixed(2)}
						</div>
						<div className="col-2">
							<strong>Total Price: {totalPrice}</strong>
						</div>
					</div>
				})}
		</div>


	</div>
=======

const Cart = () => {
	return <div></div>
>>>>>>> f42126e5325459f287d88b73b6b3103341dc9a04
}

export default Cart;
