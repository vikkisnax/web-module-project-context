import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

const Product = () => {
	//destructure for addItem bc we want to use it from Products component (which gets it from App). now we don't need to use 'props'
	const {product, addItem} = useContext(ProductContext)

	return (
		<div className="product">
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => addItem(product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
