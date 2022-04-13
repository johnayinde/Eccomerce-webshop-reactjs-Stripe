import React, { useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/commerce.png";
import { Button, Container, Nav, Navbar, Badge } from "react-bootstrap";

const AppNavbar = ({ totalItems }) => {
	return (
		<>
			<Navbar bg="light" expand="lg" className="border-bottom mb-5">
				<Container fluid>
					<Navbar.Brand as="h6" href="#home">
						<img src={logo} alt="commerce" height="25px" />
						AppCommerce.js
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Button variant="light">
							<ShoppingCart /> <Badge bg="danger">{totalItems}</Badge>
						</Button>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default AppNavbar;
