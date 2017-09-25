import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

class MyNav extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a>GeoHunter</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<IndexLinkContainer to="/">
						<NavItem>Home</NavItem>
					</IndexLinkContainer>
					<IndexLinkContainer to="/users">
						<NavItem>Users</NavItem>
					</IndexLinkContainer>
					<IndexLinkContainer to="/caches">
						<NavItem>Caches</NavItem>
					</IndexLinkContainer>
				</Nav>
			</Navbar>
		);
	}
}

export default myNav;
