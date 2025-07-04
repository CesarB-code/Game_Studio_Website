
import MyImage from '/Users/cesarbarrera/my-react-app/src/VideoHome/assets/lhon-karwan-HwGWwQwtpgg-unsplash.jpg'; // adjust path as needed
import MyImage2 from './assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage3 from './assets/sufyan-5NrbL6F68V0-unsplash.jpg'
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




        <Navbar.Brand href="#home" className="webHeader" style={{ fontFamily: 'fantasy' }}  >Cyclone</Navbar.Brand>
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
          <CarouselCaption style={{ bottom: 100, right: 700, inlineBlock: 'true', width: '50%' }}>
            <h2 style={{ fontSize: 50 }}><b>Drop in and sneak your way to victorys</b></h2>
            <p style={{ right: 100, width: '100%' }}>Join in on the new game Silent Soldier where you can croos game with your friends</p>

          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100 carousel-img"
            src={MyImage2}
            style={{ width: 100 }}
            alt="Second slide"
          />
          <CarouselCaption style={{ bottom: 50, right: 700, inlineBlock: 'true', width: '50%' }}>
            <h1 style={{ fontSize: '300%' }}><b>The Newest Anime game that you will ever own now power by AI </b></h1>
            <p>With our new Ai we can make the power of anime come alive</p>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
          <img
            className="d-block w-100 carousel-img"
            src={MyImage}
            alt="Third slide"

          />
          <CarouselCaption style={{ bottom: 100, right: 700, inlineBlock: 'true', width: '50%' }}>
            <h3 style={{ fontSize: '300%' }}><b> Apply now and see what is instore for you </b></h3>
            <p style={{ fontFamily: 'fantasy' }} >Want to join the cylcone and help create amazing games</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>


      <Row className='bg-dark'>
        <Col className="col-12 col-md-6 col-lg-4">
          <Card>
            <Card.Img variant="top" src={Pac} />
            <Card.Body>
              <Card.Title>The New PacMan of our Generation</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">The new pacman of our generation</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>

          </Card>

        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Newest Console has arrived</Card.Title>
              <Card.Text style={{ fontFamily: 'fantasy' }} >
                <b> quick example text to build on the card title and make up the bulk of the card's content.</b>
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>

          </Card>
        </Col>
      </Row>
      <Row className='bg-dark'>
        <Col style={{ bottom: 100 }}>
          <img src={MyImage3} style={{ height: 100, width: 100 }} alt="Background" />
        </Col>
        <Col>
          <Row>
            <a href='#' className='link' >Carrers</a>
          </Row>
          <Row>
            <a href='#' className='link' >Carrers</a>
          </Row>          <a href='#' className='link' >Carrers</a>
          <Row>
            <a href='#' className='link' >Carrers</a>
          </Row>          <a href='#' className='link' >Carrers</a>
          <Row>
            <a href='#' className='link' >Carrers</a>
          </Row>        </Col>
      </Row>



    </Container >



  )
}



export default VideoHome;