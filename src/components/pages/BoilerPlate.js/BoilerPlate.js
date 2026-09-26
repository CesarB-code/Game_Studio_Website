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
import './BoilerPlate.css';
function BoilerPlate() {
    const [isDropped, setIsDropped] = useState(false);
    return (


        <Navbar id='custom-navbar' expand="md" className="bg-grey w-100 boilerplate-navbar" fixed="top" data-bs-theme="dark">

            <Navbar.Brand href="/home" className="webHeader"  >
                <Row >
                    <Col className="boilerplate-brand-text">
                        Cyclone<sup className="boilerplate-trademark">TM</sup>

                    </Col>
                    <Col className="boilerplate-brand-icon">
                        <BsFan />

                    </Col>
                </Row>

            </Navbar.Brand>


            <div className="ms-auto d-flex align-items-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <NavbarBrand id="label"></NavbarBrand>
            <Navbar.Collapse className="justify-content-end boilerplate-collapse">
                <Nav className=" my-2 ms-lg-auto  "  >
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="profile">Profile</Nav.Link>
                    <Nav.Link href="store">Store</Nav.Link>
                    <Nav.Link href="events">Events</Nav.Link>


                    <NavDropdown className="custom-dropdown" title="Company" id="nav-dropdown" show={isDropped} onMouseEnter={() => setIsDropped(true)} onMouseLeave={() => setIsDropped(false)} >

                        <NavDropdown.Item href="about">About</NavDropdown.Item>
                        <NavDropdown.Item href="teamMembers">
                            Team Members
                        </NavDropdown.Item>


                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>









        </Navbar >






    );
}
export default BoilerPlate;