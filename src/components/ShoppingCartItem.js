import React from 'react';
// , { useContext }  
// import CartContext from '../contexts/CartContext';

const Item = (props) => {
	// const {products} = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			{/* products.image bc accessing data property*/}


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
