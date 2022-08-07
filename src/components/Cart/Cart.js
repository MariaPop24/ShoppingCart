import React from "react";
import "./Cart.scss"

const Cart = (props) => {
	const { cartItems, addToCart, removeFromCart } = props;
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

	return <aside>
		<div className="cart">
			{cartItems.length === 0 ?
				(<div className="empty-cart">
					<div className="empty-cart-title">Cart is empty</div>
					<div className="empty-cart-content">
						Looks like you haven't added any prodicts to your cart yet.
					</div>
				</div>) : cartItems.map((item) => {
					console.log(item);
					<div>ddaaaaaaaaaaaaaaaaaaadd</div>
					// <div key={item.id}>
					// 	{console.log(item)}
					// 	<div className="col-2">{item.name}</div>
					// 	<div className="col-2">
					// 		<button onClick={() => removeFromCart(item)} className="remove">
					// 			-
					// 		</button>{' '}
					// 		<button onClick={() => addToCart(item)} className="add">
					// 			+
					// 		</button>
					// 	</div>

					// 	<div className="col-2 text-right">
					// 		{item.quantity} x ${item.price.toFixed(2)}
					// 	</div>
					// 	<div className="col-2">
					// 		<strong>Total Price: {totalPrice}</strong>
					// 	</div>
					// </div>
				})}





		</div>
	</aside>

}

export default Cart;
