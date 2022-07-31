import React from "react";
import "./Header.css";

const Header = (props) => {
	return <nav>
		Simple Shopping Cart using ReactJs
		<div>
			{props.numberCartItems && <div>props.numberCartItems</div>}
		</div>
	</nav>
}

export default Header;
