import { createContext } from "react";

export const ProductContext = createContext();

export default ProductContext;

//use this in App as the context provider and then in Products as the consumer of the context / the state and other info. 
// this is the root provider