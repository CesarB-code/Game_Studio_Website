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
function Events() {
    return (
        <Container fluid>
            <Row >
                <Navbar expand="md" className=" bg-body-tertiary " fixed="top" data-bs-theme="dark" style={{ padding: 0, margin: 0 }} >




                    <Navbar.Brand href="#home" className="webHeader" style={{ fontFamily: 'fantasy' }}  >Cyclone<sup style={{ fontSize: 15, justifyContent: 'center' }}>TM</sup></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-ame-auto my-2 my-lg-0uto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="about">Profile</Nav.Link>
                            <NavDropdown title="Company" id="basic-nav-dropdown">
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

        </Container>
    );
}
export default Events;