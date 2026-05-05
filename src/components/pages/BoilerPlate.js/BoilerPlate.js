import {
    Row, Col,
    Carousel,
    CarouselItem,
    CarouselCaption,
    Nav,
    Navbar,

    NavDropdown,
    Container
} from 'react-bootstrap';
import { useState } from "react";
import '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/BoilerPlate.js/BoilerPlate.css'
function BoilerPlate() {
    const [isDropped, setIsDropped] = useState(false);
    return (

        <Row >
            <Navbar expand="md" className=" bg-grey " fixed="top" data-bs-theme="dark" style={{ padding: 0, margin: 0 }} >




                <Navbar.Brand href="/home" className="webHeader" style={{ fontFamily: 'fantasy' }}  >Cyclone<sup style={{ fontSize: 15, justifyContent: 'center' }}>TM</sup></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-ame-auto my-2 my-lg-0uto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="profile">Profile</Nav.Link>
                        <Nav.Link href="store">Store</Nav.Link>

                        <NavDropdown title="Company" id="nav-dropdown" show={isDropped} onMouseEnter={() => setIsDropped(true)} onMouseLeave={() => setIsDropped(false)} >

                            <NavDropdown.Item href="about">About</NavDropdown.Item>
                            <NavDropdown.Item href="teamMembers">
                                Team Members
                            </NavDropdown.Item>
                            <NavDropdown.Item href="events">Events</NavDropdown.Item>


                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </Row>




    );
}
export default BoilerPlate;