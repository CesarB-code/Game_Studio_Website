
import MyImage from './assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage2 from './assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage3 from './assets/sufyan-5NrbL6F68V0-unsplash.jpg'
import Pac from './assets/GifPac.webp';
import logo from './assets/istockphoto-1560833158-1024x1024.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useRef, useEffect } from 'react';
import { elipseAnimation, circleAnimation, curveAnimation, lineAnimation, triangleAnimation, rectangleAnimation }
  from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/wp-coponents/DrawingFunctions.js';
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
import './VideoHomePage.css';
import { DrawEar, DrawFace, EditFace, DrawNose, DrawMouth, DrawHair, DrawEye, DrawEyeBrows } from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/wp-coponents/FaceFunctions.js";


export let gl;
export let canvas;
export let uColor2;
export let uColor1;
// Triangle vertices
export let vertices = new Float32Array([
  0.0, 0.0,
  0.0, 0.0,
  0.0, 0.0
]);
export let elispeVertices = new Float32Array([
  0.0, 0.0,
  0.0, 0.0,
  0.0, 0.0
]);
export let curveVertices = new Float32Array([
  0.0, 0.0,
  0.0, 0.0,
  0.0, 0.0
]);

function VideoHome() {
  const canvasRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;
    gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Vertex Shader
    const vsSource = `
      attribute vec2 aPosition;
  varying vec2 vPosition;
  void main() {
  vPosition = aPosition;
    gl_Position = vec4(aPosition , 0.0, 1.0);
  }
    `;

    // Fragment Shader
    const fsSource = `
       precision mediump float;
       varying vec2 vPosition;
       uniform vec3 uColor1;
      uniform vec3 uColor2;
  void main() {
  vec2 uv = (vPosition + 1.0) * 0.5;
  vec3 color= mix(uColor1, uColor2, uv.y);
    gl_FragColor = vec4(color, 1.0);
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



    const triangleBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);
    const elipseBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, elipseBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, elispeVertices, gl.DYNAMIC_DRAW);
    const curveBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, curveBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, curveVertices, gl.DYNAMIC_DRAW);


    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);


    uColor2 = gl.getUniformLocation(program, "uColor2");
    uColor1 = gl.getUniformLocation(program, "uColor1");

    // Animation for unchanged frame
    function animateUnchangedFrame() {
      // Clear canvas
      gl.clearColor(0.1, 0.1, 0.1, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);


      // Face Drawing 
      DrawFace(35, 0.525, 0.9, 0.0, 0.0);
      EditFace();
      // Ear Drawing

      DrawEar("left");
      DrawEar("right");

      // Eye Drawing

      DrawEye();

      // Eyebrows Drawing

      DrawEyeBrows();

      // Hair Drawing

      DrawHair();
      //Nose Drawing
      DrawNose(0.0, -0.25, 0.01, -0.30, 0.01, -0.30, 0, -0.33);

      // Mouth drawing
      DrawMouth();

      // Cheeks drawing





      //triangleAnimation(0.0, 0.0, 0.3, 0.0, 0.0, 0.3);
      //rectangleAnimation(-0.5, 0.0, 0.5, 0.0, -0.5, 0.5, 0.5, 0.5);
      // request changed frame
      requestAnimationFrame(animateUnchangedFrame);
    }
    function animateChangedFrame() {

    }


    animateUnchangedFrame();

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();


    });

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
            <Nav.Link href="#link">Account</Nav.Link>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Team Members
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Store
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
                Cyclone has been in production of a new  concept of how to take PacMan game stlye to the next level .
                We have implemented new AI tech to make the game more challenging and fun for all ages. The AI of the game will not
                only adapt to your playing style but also learn from it  making each game unique and exciting. To increase replayability
                no one playthrough of the game will be the same.
              </Card.Text>
              <Card.Link href="#">NYTimes Report</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>

          </Card>

        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>Newest Console has arrived</Card.Title>
              <Card.Text  >
                <b> Cyclone studio has made an effort to keep up with the lateest </b>
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

          <a href="#" style={{ color: 'white', fontFamily: 'fantasy', fontSize: 30, marginTop: 30 }}>Cyclone</a>

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