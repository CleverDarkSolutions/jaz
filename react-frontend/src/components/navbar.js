import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setQueryInput, setQueryType, togglePage} from "../store/counterSlice";

export const MainNavbar = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Cars Wiki</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={ () =>{
                                dispatch(togglePage(0))
                            }}>Home</Nav.Link>
                            <Nav.Link onClick={ () =>{
                                dispatch(togglePage(1))
                            }}>Search</Nav.Link>
                            <NavDropdown title="Colours" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('Red'))
                                    dispatch(setQueryType('Colour'))
                                    dispatch(togglePage(1))
                                }}>Red</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('Blue'))
                                    dispatch(setQueryType('Colour'))
                                    dispatch(togglePage(1))
                                }}>Blue</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('Green'))
                                    dispatch(setQueryType('Colour'))
                                    dispatch(togglePage(1))
                                }}>Green</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Random</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Makes" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('BMW'))
                                    dispatch(setQueryType('Make'))
                                    dispatch(togglePage(1))
                                }}>BMW</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('Porsche'))
                                    dispatch(setQueryType('Make'))
                                    dispatch(togglePage(1))
                                }}>Porsche</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('Audi'))
                                    dispatch(setQueryType('Make'))
                                    dispatch(togglePage(1))
                                }}>Audi</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Random</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Year" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('2000'))
                                    dispatch(setQueryType('Year'))
                                    dispatch(togglePage(1))
                                }}>2000</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('2010'))
                                    dispatch(setQueryType('Year'))
                                    dispatch(togglePage(1))
                                }}>2010</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () =>{
                                    dispatch(setQueryInput('2015'))
                                    dispatch(setQueryType('Year'))
                                    dispatch(togglePage(1))
                                }}>2015</NavDropdown.Item>
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