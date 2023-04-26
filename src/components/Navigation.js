import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from '../contexts/CartContext';

const Navigation = () => {
	//don't need to destructure here bc only passed in one prop in App 
	const cart = useContext(CartContext);
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
