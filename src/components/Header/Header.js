import React from "react";
import "./Header.scss";

const Header = (props) => {
	return <nav>
		Simple Shopping Cart using ReactJs
		<p className="numberOfItems">{props.numberCartItems && <div>{props.numberCartItems}</div>}</p>

	</nav>
}

export default Header;
