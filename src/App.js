import React, { useState, useEffect } from "react";
// import { CssBaseline } from "@material-ui/core";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Navbar, Products, Cart, Checkout } from "./components";
// import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components/";

const App = () => {
	return (
		<div>
			<Navbar />
			<Products />
		</div>
	);
};

export default App;
