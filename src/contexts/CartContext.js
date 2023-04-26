import { createContext } from "react";

const CartContext = createContext();

export default CartContext;

// use this in ShoppingCart and Navigation as context providers. their children will be the context consumers