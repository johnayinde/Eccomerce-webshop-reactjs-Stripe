import React from "react";

import Product from "./Product/Product";
import useStyles from "./styles";
import { Col, Container, Row } from "react-bootstrap";

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	if (!products.length) return <p>Loading...</p>;

	return (
		<main>
			<Container>
				<Row className="justify-content-center align-items-center">
					{products.map((product) => (
						<Col xs="12" sm="6" md="4" lg="3" key={product.id} className="g-3">
							<Product onAddToCart={onAddToCart} product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Products;
