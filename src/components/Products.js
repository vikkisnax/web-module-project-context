import React, { useContext } from 'react';

import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	//initially named 'products' but we only need products property (and addItem) so 
	const {products} = useContext(ProductContext);
	console.log('products:', products)

	return (
		<div className="products-container">
			{products.map(product => (
				// other comp 
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
