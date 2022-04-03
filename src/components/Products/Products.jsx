import React from "react";
import { Grid } from "@material-ui/core/";

import Product from "./Product/Product";
import useStyles from "./styles";
const productItems = [
	{ id: 1, image: "", name: "shoes", description: "a new show", price: "$2" },
	{
		id: 2,
		image: "",
		name: "machbook",
		description: "a new macbook",
		price: "$20",
	},
];

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	// if (!products.length) return <p>Loading...</p>;

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justifyContent="center">
				{productItems.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
