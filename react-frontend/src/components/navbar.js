import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const MainNavbar = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Cars Wiki</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                            <NavDropdown title="Colours" id="basic-nav-dropdown">
                                <NavDropdown.Item>Red</NavDropdown.Item>
                                <NavDropdown.Item>Blue</NavDropdown.Item>
                                <NavDropdown.Item>Green</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Random</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Makes" id="basic-nav-dropdown">
                                <NavDropdown.Item>BMW</NavDropdown.Item>
                                <NavDropdown.Item>Porsche</NavDropdown.Item>
                                <NavDropdown.Item>Audi</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Random</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Year" id="basic-nav-dropdown">
                                <NavDropdown.Item>2000</NavDropdown.Item>
                                <NavDropdown.Item>2010</NavDropdown.Item>
                                <NavDropdown.Item>2015</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Random</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}