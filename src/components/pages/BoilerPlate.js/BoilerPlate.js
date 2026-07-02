import {
    Row, Col,

    Nav,
    Navbar,

    NavDropdown,
    Container,
    NavItem,
    NavbarBrand
} from 'react-bootstrap';
import { useState } from "react";
import { BsFan } from "react-icons/bs";
import '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/BoilerPlate.js/BoilerPlate.css'
function BoilerPlate() {
    const [isDropped, setIsDropped] = useState(false);
    return (


        <Navbar id='custom-navbar' expand="md" className=" bg-grey " fixed="top" data-bs-theme="dark" style={{ padding: '0px', margin: 0 }} >

            <Navbar.Brand href="/home" className="webHeader" style={{ fontFamily: 'fantasy' }}  >
                <Row >
                    <Col xs={6} sm={6} md={4}>
                        Cyclone<sup style={{ fontSize: 15 }}>TM</sup>

                    </Col>
                    <Col xs={{ span: 2, order: 'last' }} sm={{ span: 4, order: 'last' }} md={{ span: 8, order: 'last' }} style={{ padding: '0px', height: '40px' }} >
                        <BsFan />

                    </Col>
                </Row>

            </Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBrand id="label"></NavbarBrand>
            <Navbar.Collapse style={{ paddingLeft: '10px', marginRight: '65px' }}>
                <Nav className=" my-2 ms-lg-auto  "  >
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="profile">Profile</Nav.Link>
                    <Nav.Link href="store">Store</Nav.Link>

                    <NavDropdown className="custom-dropdown" title="Company" id="nav-dropdown" show={isDropped} onMouseEnter={() => setIsDropped(true)} onMouseLeave={() => setIsDropped(false)} >

                        <NavDropdown.Item href="about">About</NavDropdown.Item>
                        <NavDropdown.Item href="teamMembers">
                            Team Members
                        </NavDropdown.Item>
                        <NavDropdown.Item href="events">Events</NavDropdown.Item>


                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>









        </Navbar >






    );
}
export default BoilerPlate;