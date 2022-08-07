import React from "react";
import "./Header.scss";

const Header = (props) => {
	return <nav>
		Simple Shopping Cart using ReactJs
		<div className="numberOfItems">{props.numberCartItems && <div>{props.numberCartItems}</div>}</div>

	</nav>
}

export default Header;
