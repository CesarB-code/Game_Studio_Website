
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from '../wp-coponents/GameList/GameList.js';
import { useRef, useState, useEffect } from 'react';
import * as Interaction from '../wp-coponents/InterationMethods.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate.js';
import BottomWebLinks from '../BottomWebLinks/BottomWebLinks.js';
import ContentCarousel from '../wp-coponents/ContentCarousel/ContentCarousel.js';
import {
  Row, Col, Card, Overlay, CardTitle,

  Container
} from 'react-bootstrap';
import './VideoHomePage.css';
import { DrawObject } from "../wp-coponents/FaceFunctions.js";
import UnityCharacter from '../../UnityCharacter/UnityCharacter.js';
import overlayImage from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/assets/takashi-miyazaki-64ajtpEzlYc-unsplash.jpg';
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
  const canvasRef1 = useRef(null);
  const [unityInstance1, setUnityInstance1] = useState(null);

  let element = useRef(null);
  let rowElement = useRef(null);

  const addMargin = () => {
    let currentMargin = parseFloat(getComputedStyle(element.current).marginRight);
    let currentWidth = parseFloat(getComputedStyle(element.current).width);

    const rowWidth = parseFloat(getComputedStyle(rowElement.current).width);
    const middleOfRow = rowWidth / 2;
    const remainderRow = middleOfRow - currentMargin - currentWidth

    element.current.style.marginRight = currentMargin + remainderRow >= 0 ? `${currentMargin + remainderRow}px` : '0px';
  };
  window.addEventListener('load', addMargin);
  window.addEventListener('resize', addMargin);


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


    <Container fluid style={{ overflowX: 'hidden', overflowY: 'scroll', backgroundImage: `url(${overlayImage})` }} >
      <BoilerPlate className="video-Row" fixed="top" />
      <Row className="video-Row" style={{ paddingTop: '60px' }}>
        <ContentCarousel />
      </Row>

      <Row className='video-Row align-items-center justify-content-center' style={{ backgroundColor: 'transparent' }}>

        <Col>

          <Row className="align-items-center justify-content-center">
            <Row style={{ margin: '0px', padding: '0px' }} ref={rowElement}>
              <Col ref={element} className='col-4 '  >
                <Card id='cardR' className="rounded-5 middleCard">


                  <Row >

                    <Row className=" flex-wrap align-items-center justify-content-center " style={{ width: '100%' }}>
                      <Row className=' video-Row ' style={{ backgroundColor: 'transparent' }} >
                        <CardTitle style={{ color: 'white', fontFamily: 'fantasy', fontSize: "32px", padding: "0px" }}>AI Drawing Software</CardTitle>
                      </Row>
                      <Card id="cardR" className="align-items-center " style={{ width: '200px', height: '200px', padding: '0px' }}>
                        <canvas
                          ref={canvasRef}
                          width={300}
                          height={300}
                          style={{ width: '100%', margin: '0px', padding: '0px', border: '4px solid #f2a3a8 ', maxHeight: "300px" }}
                        />
                      </Card>

                    </Row>
                  </Row>
                </Card>
              </Col>
              <Col className='col-4 ' >
                <Card id="cardR" className="rounded-5 middleCard">
                  <Row >
                    <h2 className='title'>
                      Description
                    </h2>
                  </Row>
                  <Row>

                    <Col className='col-4 ' >
                      <Card id="cardR">
                        <UnityCharacter useRef={canvasRef1} useState={[unityInstance1, setUnityInstance1]} />

                      </Card>
                    </Col>

                    <Col>
                      <Col style={{ paddingTop: '10px' }}>

                        <p className='text'>This is a description for the AI Drawing Software.
                          Most advanced  ai software for drawing.
                          Implemented with mathmatical recunstruction ofimaghie and calcualtion of repeated animation based on user desire.
                          Based on artist labeling and animation , AI makes animantion predication on what the airtist.

                        </p>
                      </Col>

                    </Col>
                  </Row>

                </Card>
              </Col>

            </Row>




          </Row>
        </Col>








      </Row >
      <Container style={{ height: '650px', width: '100vw', backgroundColor: 'transparent' }}>
        <Row className="video-Row" style={{ backgroundColor: 'transparent' }}>
          <GameList />
        </Row>
      </Container>





    </Container >



  )
}


export default VideoHome;