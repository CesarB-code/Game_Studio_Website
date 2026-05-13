
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from '../wp-coponents/GameList/GameList.js';
import { useRef, useEffect } from 'react';
import * as Interaction from '../wp-coponents/InterationMethods.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate.js';
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
import ContentCarousel from '../wp-coponents/ContentCarousel/ContentCarousel.js';
import {
  Row, Col, Card,

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


    <Container fluid style={{ overflowX: 'hidden', overflowY: 'scroll' }} >
      <BoilerPlate className="video-Row" fixed="top" />
      <Row className="video-Row"><ContentCarousel /></Row>

      <Row className='video-Row align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
        <Col>
          <Row className=' video-Row ' style={{ backgroundColor: 'white' }} >
            <h1 style={{ textAlign: 'center', padding: '0px', margin: '10px', color: 'black' }}>AI Drawing Software </h1>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col className=' col-8' >
              <Row className="align-items-center justify-content-center">
                <Card className="align-items-center justify-content-center">
                  <canvas
                    ref={canvasRef}
                    width={600}
                    height={500}
                    style={{ width: '100%', margin: '0px', padding: '0px' }}
                  />
                </Card>

              </Row>



            </Col>
            <Col>
              <Row style={{ paddingTop: '10px' }}>
                <h2 className='title'>
                  Description
                </h2>
                <p className='text'>This is a description for the AI Drawing Software.
                  Most advanced  ai software for drawing.
                  Implemented with mathmatical recunstruction ofimaghie and calcualtion of repeated animation based on user desire.
                  Based on artist labeling and animation , AI makes animantion predication on what the airtist.

                </p>
              </Row>
            </Col>
          </Row>
        </Col>








      </Row >
      <Container style={{ height: '650px', width: '100vw' }}>
        <Row className="video-Row">
          <GameList />
        </Row>
      </Container>



      <Row className="video-Row">
        <BottomWebLinks />
      </Row>

    </Container >



  )
}


export default VideoHome;