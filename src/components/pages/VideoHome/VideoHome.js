
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from '../wp-coponents/GameList/GameList.js';
import { useRef, useState, useEffect } from 'react';
import * as Interaction from '../wp-coponents/InterationMethods.js';
import BoilerPlate from '../BoilerPlate.js/BoilerPlate.js';
import ContentCarousel from '../wp-coponents/ContentCarousel/ContentCarousel.js';
import {
  Row, Col, Card, CardTitle,

  Container
} from 'react-bootstrap';
import './VideoHomePage.css';
import AISoftware from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/AISoftware/AISoftware.js';
import UnityDemo from '../wp-coponents/UnityDemo/UnityDemo.js';
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

  // Call the draw function to render the canvas
  return (


    <Container fluid style={{ overflowX: 'hidden', overflowY: 'scroll', backgroundImage: `url(${overlayImage})` }} >
      <BoilerPlate className="video-Row" fixed="top" />
      <Row style={{ marginTop: '60px' }} ><h1 id="NewsTitle" style={{
        height: '100%',
        color: 'white',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '52px',
        marginLeft: '0px',
        padding: '0px',
        margin: '0px',
      }} > Cyclone  </h1></Row>

      <Row style={{ marginTop: '60px' }} ><h1 id="NewsTitle" style={{
        height: '100%',
        color: 'white',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '52px',
        marginLeft: '0px',
        padding: '0px',
        margin: '0px',
      }} >Recent News </h1></Row>
      <Row className='video-Row align-items-center justify-content-center' style={{ backgroundColor: 'transparent' }}>

        <Col>

          <Row className="align-items-center justify-content-center">
            <Row style={{ margin: '0px', padding: '0px' }} ref={rowElement}>
              <Row className="justify-content-start">
                <Col ref={element} className='col-4 '  >
                  <AISoftware />
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Col md={4} className="d-flex justify-content-end">
                  <UnityDemo useRef={canvasRef1} useState={{ unityInstance: unityInstance1, unityInstance1, setUnityInstance1 }} />
                </Col>
              </Row>

            </Row>




          </Row>
        </Col>








      </Row >
      <Row style={{ height: '450px', width: '100vw', backgroundColor: 'transparent' }}>
        <GameList />

      </Row>





    </Container >



  )
}


export default VideoHome;