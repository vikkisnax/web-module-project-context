import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

const Product = (props) => {
	//destructure for addItem bc we want to use it from Products component (which gets it from App). now we don't need to use 'props'
	const {addItem} = useContext(ProductContext)

	return (
		<div className="product">
			{/* Products passes 'product' in here */}
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;