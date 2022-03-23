import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap';

export function MyNavbar({ cart }) {
	return (
		<Navbar bg="light" expand="lg" className="myNav">
			<Container className="nav-container">
				<Navbar.Brand href="#home">MyShopping</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-menu" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Category" id="basic-nav-dropdown">
							<NavDropdown.Item href="#category/electronics">Electronics</NavDropdown.Item>
							<NavDropdown.Item href="#category/clothes">Clothes</NavDropdown.Item>
							<NavDropdown.Item href="#category/toys">Toys</NavDropdown.Item>

							<NavDropdown.Item href="#category/hs">Household Stationary</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<button className="btn btn-primary">
						<AiOutlineShoppingCart /> Cart{' '}
						<Badge pill bg="black">
							{cart}
						</Badge>
					</button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
