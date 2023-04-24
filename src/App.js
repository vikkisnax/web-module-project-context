import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context - our root provider
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	// see if we have access to ProductContext
	// console.log(ProductContext);

	console.log(CartContext)

	// add the given item to the cart
	const addItem = item => {
		// console.log(item);
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
				<Navigation />

				{/* Wrap Provider here - add value prop in double {} bc more than one*/}
				<ProductContext.Provider value={{products, addItem}}>
					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>
				</ProductContext.Provider>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
