
import MyImage from '/Users/cesarbarrera/my-react-app/src/VideoHome/assets/lhon-karwan-HwGWwQwtpgg-unsplash.jpg'; // adjust path as needed
import MyImage2 from './assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import Pac from './assets/GifPac.webp';
import BackGround from './wp-coponents/BackGround.js'
import logo from './assets/istockphoto-1560833158-1024x1024.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {
  Row, Col,
  Carousel, Image,
  CarouselItem,
  CarouselCaption,
  Nav,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavDropdown,
  Container
} from 'react-bootstrap';
import './VideoHomePage.css';

function VideoHome() {

  return (


    <Container fluid style={{ padding: 0, margin: 0 }}>

      <Navbar expand="xl" className=" bg-body-tertiary fixedTop  " bg="dark" data-bs-theme="dark" fixed='top' style={{ padding: 0 }} >




        <Navbar.Brand href="#home" className="webHeader"  >Cyclone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>



      <Carousel className="custom-carousel">
        <CarouselItem>
          <img
            className="d-block w-100 carousel-img"
            src={MyImage}
            alt="First slide"
          />
          <CarouselCaption>
            <h3>First Slide Label</h3>
            <p>Description for first slide.</p>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100 carousel-img"
            src={MyImage2}
            style={{ width: 100 }}
            alt="Second slide"
          />
          <CarouselCaption>
            <h3>Second Slide Label</h3>
            <p>Description for second slide.</p>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100 carousel-img"
            src={MyImage}
            alt="Third slide"

          />
          <CarouselCaption>
            <h3>Third Slide Label</h3>
            <p>Description for third slide.</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
      <Row>
        <Col className="col-12 col-md-6 col-lg-4">
          <Card>
            <Card.Img variant="top" src={Pac} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>

          </Card>

        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Newest Console has arrived</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>

          </Card>
        </Col>
      </Row>



    </Container >



  )
}



export default VideoHome;