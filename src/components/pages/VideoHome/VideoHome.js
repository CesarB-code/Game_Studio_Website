
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
      <Row className="video-Row" style={{ paddingTop: '60px' }}>
        <ContentCarousel />
      </Row>

      <Row className='video-Row align-items-center justify-content-center' style={{ backgroundColor: 'transparent' }}>

        <Col>

          <Row className="align-items-center justify-content-center">
            <Row style={{ margin: '0px', padding: '0px' }} ref={rowElement}>
              <Col ref={element} className='col-4 '  >
                <AISoftware />
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
      <Row style={{ height: '450px', width: '100vw', backgroundColor: 'transparent' }}>
        <GameList />

      </Row>





    </Container >



  )
}


export default VideoHome;