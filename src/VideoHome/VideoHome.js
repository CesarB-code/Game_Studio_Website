
import MyImage from '/Users/cesarbarrera/my-react-app/src/VideoHome/assets/lhon-karwan-HwGWwQwtpgg-unsplash.jpg'; // adjust path as needed
import MyImage2 from './assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage3 from './assets/sufyan-5NrbL6F68V0-unsplash.jpg'
import Pac from './assets/GifPac.webp';
import BackGround from './wp-coponents/BackGround.js'
import logo from './assets/istockphoto-1560833158-1024x1024.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useRef, useEffect } from 'react';

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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Vertex Shader
    const vsSource = `
      attribute vec2 aPosition;
      uniform float uOffset;
      void main() {
        gl_Position = vec4(aPosition.x + uOffset, aPosition.y, 0.0, 1.0);
      }
    `;

    // Fragment Shader
    const fsSource = `
      void main() {
        gl_FragColor = vec4(1.0, 0.4, 0.2, 1.0); // Orange color
      }
    `;

    // Shader compiler
    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

    // Program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Triangle vertices
    const vertices = new Float32Array([
      0, 0.5,
      -0.5, -0.5,
      0.5, -0.5
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uOffset = gl.getUniformLocation(program, 'uOffset');

    let offset = -1.0;
    let direction = 1;

    function animate() {
      // Clear canvas
      gl.clearColor(0.95, 0.95, 0.95, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Update offset
      offset += 0.01 * direction;
      if (offset > 1.0 || offset < -1.0) {
        direction *= -1;
      }

      // Send updated offset to shader
      gl.uniform1f(uOffset, offset);

      // Draw triangle
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // Loop
      requestAnimationFrame(animate);
    }

    animate();


  }, []);
  // Call the draw function to render the canvas
  return (


    <Container fluid style={{ padding: 0, margin: 0 }}>

      <Navbar expand="md" className=" bg-body-tertiary fixedTop  " bg="dark" data-bs-theme="dark" fixed='top' style={{ padding: 0 }} >




        <Navbar.Brand href="#home" className="webHeader" style={{ fontFamily: 'fantasy' }}  >Cyclone<sup style={{ fontSize: 15 }}>TM</sup></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-ame-auto my-2 my-lg-0uto">
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
            src={MyImage3}
            alt="Third slide"

          />
          <CarouselCaption style={{ bottom: 100, right: 700, inlineBlock: 'true', width: '50%' }}>
            <h3 style={{ fontSize: '300%' }}><b> Apply now and see what is in store for you </b></h3>
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

        <canvas
          ref={canvasRef}
          width={640}
          height={400}
          style={{ border: '1px solid black' }}
        />

      </Row>
      <Row className='bg-dark'>
        <Col style={{ bottom: 100 }}>
          <img src={MyImage3} style={{ height: 50, width: 50 }} alt="Background" />

          <a style={{ color: 'white', fontFamily: 'fantasy', fontSize: 30, marginTop: 30 }}>Cyclone</a>

        </Col>

        <Col>
          <Row>
            <Col className='col-3 '>
              <p style={{ color: 'white', fontSize: 15 }}>Social Media</p>
            </Col>
            <Col className='col-3 '>
              <p style={{ color: 'white' }} >Company</p>
            </Col>
            <Col className='col-3 '>
              <p style={{ color: 'white' }} >Store</p>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col className='col-3 '>
              <a href='#' className='link' >Twitter</a>
            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Carrers</a>

            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Events</a>
            </Col>          </Row>
          <Row>

            <Col className='col-3 '>
              <a href='#' className='link' >Tiktok</a>
            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >FAQ</a>

            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Youtube</a>
            </Col>

          </Row>


          <Row>
            <Col className='col-3 '>
              <a href='#' className='link' >Instagram</a>
            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Location</a>

            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Games</a>

            </Col>
          </Row>

          <Row>
            <Col className='col-3 '>
              <a href='#' className='link' >Discord</a>
            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >About</a>

            </Col>
            <Col className='col-3 '>
              <a href='#' className='link' >Merch</a>
            </Col>
          </Row>
        </Col>
      </Row>



    </Container >



  )
}


export default VideoHome;