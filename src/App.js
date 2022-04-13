import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { CssBaseline } from "@material-ui/core";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { commerce } from "./lib/commerce";
import { Products, AppNavbar } from "./components/";

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		console.log("data,", data);
		setProducts(data);
	};

	// const fetchCarts = async () => {
	// 	const { data } = await commerce.cart.retrieve();
	// 	setProducts(data);
	// };

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	useEffect(() => {
		fetchProducts();
		// fetchCarts();
	}, []);

	console.log(products);
	return (
		<div>
			<AppNavbar totalItems={cart.total_items} />
			<Products onAddToCart={handleAddToCart} cart={cart} products={products} />
		</div>
	);
};

export default App;
