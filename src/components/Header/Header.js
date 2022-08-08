import React from "react";
import {
	faCartPlus as fasFaCart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

const Header = (props) => {
	return <nav>
		Simple Shopping Cart using ReactJs
		<FontAwesomeIcon icon={fasFaCart} size="lg" className="cart-icon" />
		<div className="numberOfItems">{props.numberCartItems !== 0 && <div className="bubble">{props.numberCartItems}</div>}</div>

	</nav>
}

export default Header;
