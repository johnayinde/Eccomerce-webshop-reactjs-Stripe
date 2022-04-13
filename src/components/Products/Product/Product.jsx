import React from "react";
import useStyles from "./styles";
import { Button, Card } from "react-bootstrap";
import { ShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart }) => {
	return (
		<Card className="shadow-sm">
			<Card.Img variant="top" src={product.media.source} />
			<Card.Body className="">
				<div className="d-flex justify-content-between align-items-center">
					<Card.Title as="h5">{product.name}</Card.Title>
					<Card.Subtitle>{product.price.formatted_with_symbol}</Card.Subtitle>
				</div>
				<Card.Text dangerouslySetInnerHTML={{ __html: product.description }} />

				<Button
					variant="light"
					className="float-end text-muted"
					onClick={() => onAddToCart(product.id, 1)}
				>
					<ShoppingCart />
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
