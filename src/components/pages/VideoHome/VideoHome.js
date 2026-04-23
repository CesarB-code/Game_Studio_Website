
import MyImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage2 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/maha-khairy-3uuLWb6aQXc-unsplash.jpg'
import MyImage3 from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/sufyan-5NrbL6F68V0-unsplash.jpg'
import Pac from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/GifPac.webp';
import logo from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/istockphoto-1560833158-1024x1024.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from '../wp-coponents/GameList/GameList.js';
import { useRef, useEffect } from 'react';
import * as Interaction from '../wp-coponents/InterationMethods.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate.js';
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
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
import { DrawObject } from "../wp-coponents/FaceFunctions.js";


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
  Interaction.SetState();
  useEffect(() => {
    canvas = canvasRef.current;
    gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });

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

      let face = [35, 0.525, 0.9, 0.0, 0.0];
      let leftEar = ["left", 30, 0.5, 0.5, 0.6, 0.3, 0.7];
      let rightEar = ["right", 30, 0.5, 0.5, 0.7, 0.4, 0.7];
      let hair = [30, 20, -0.6, -0.54, 0.55, 0.6, 0.13, -0.3];
      let nose = [0.0, -0.25, 0.01, -0.30, 0.01, -0.30, 0, -0.33];
      let mouth = [10, 0.0, -0.5, -0.10, -0.48, 1, 1, 3, 0, 0, 0, 0];
      let eye = [40, 0.1, 0.15, 0.25, 0.1];
      let eyeBrows = [10, 0.13, 0.50, 0.38, 0.45, 1, 1, 4, 0, 0, 0, 0, 0];
      DrawObject(face, leftEar, rightEar, hair, nose, mouth, eye, eyeBrows);
      // Request animation frame
      requestAnimationFrame(animateChangedFrame);
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


    <Container fluid style={{ overflowX: 'hidden', overflowY: 'hidden' }} >
      <BoilerPlate className="top" fixed="top" />
      <Row className='bg-dark'>
        <Carousel className="custom-carousel ">
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

      </Row>
      <Row className='bg-dark' style={{ position: "relative" }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          style={{ position: 'relative', margin: '0 auto', backgroundColor: '#1a1a1a', width: '100%' }}
        />



      </Row>
      <Row>
        <GameList />
      </Row>


      <Row>
        <BottomWebLinks />
      </Row>

    </Container >



  )
}


export default VideoHome;