
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
import AISoftware from '../wp-coponents/AISoftware/AISoftware.js';
import UnityDemo from '../wp-coponents/UnityDemo/UnityDemo.js';

function VideoHome() {
  const canvasRef1 = useRef(null);
  const [unityInstance1, setUnityInstance1] = useState(null);

  let element = useRef(null);
  let rowElement = useRef(null);

  let element2 = useRef(null);
  let rowElement2 = useRef(null);

  function addMargin(row, ele) {
    let currentMargin = parseFloat(getComputedStyle(ele.current).marginRight);
    let currentWidth = parseFloat(getComputedStyle(ele.current).width);

    const rowWidth = parseFloat(getComputedStyle(row.current).width);
    const middleOfRow = rowWidth / 2;
    const remainderRow = middleOfRow - currentMargin - currentWidth

    ele.current.style.marginRight = currentMargin + remainderRow >= 0 ? `${currentMargin + remainderRow + 100}px` : '20px';
  };
  window.addEventListener('load', () => addMargin(rowElement, element));
  window.addEventListener('resize', () => addMargin(rowElement, element));
  window.addEventListener('load', () => addMargin(rowElement2, element2));
  window.addEventListener('resize', () => addMargin(rowElement2, element2));

  Interaction.SetState();

  // Call the draw function to render the canvas
  return (


    <Container fluid className="video-home-page">
      <BoilerPlate className="video-Row" fixed="top" />
      <Row className="video-home-title-row"><h1 id="NewsTitle" className="video-home-title">Cyclone</h1></Row>

      <Row className='video-Row align-items-center justify-content-center video-home-intro-row'>
        <Col className='col-10'>
          <div className="video-home-copy video-home-intro-copy">
            <h2 className="video-home-section-title video-home-intro-title">Welcome to Cyclone Game Studio</h2>
            <p className="video-home-paragraph video-home-paragraph-spaced">
              Cyclone Game Studio is a pioneering force in game development, founded in 2020 with a mission to revolutionize interactive entertainment. We blend cutting-edge technology with creative storytelling to deliver immersive gaming experiences that captivate and inspire players worldwide.
            </p>
            <p className="video-home-paragraph">
              Our commitment to innovation, integrity, and community drives everything we do. From adaptive AI systems that learn your playstyle to stunning real-time 3D graphics powered by Unity, we showcase the pinnacle of modern game development. Explore our featured games, experience our technology in action, and discover why Cyclone is shaping the future of gaming.
            </p>
          </div>
        </Col>
      </Row>

      <Row className='video-Row align-items-center justify-content-center video-home-feature-row'>

        <Col>

          <Row className="align-items-center justify-content-center">
            <Row className="video-home-feature-inner-row">

              <Row className="justify-content-start" ref={rowElement}>
                <Col ref={element} className='col-4 '  >
                  <AISoftware />
                </Col>
                <Col className='col-4 d-flex d'>
                  <div className="video-home-copy video-home-feature-copy">
                    <h3 className="video-home-feature-title">Advanced AI Technology</h3>
                    <p className="video-home-paragraph">Explore our cutting-edge artificial intelligence systems that power adaptive gameplay. Our AI learns from your playstyle, creates unique challenges, and delivers personalized gaming experiences that keep every session fresh and engaging.</p>
                  </div>
                </Col>
              </Row>
              <Row ref={rowElement2} >
                <Col ref={element2} className='col-4 d-flex align-items-center'>
                  <div className="video-home-copy video-home-feature-copy">
                    <h3 className="video-home-feature-title">Interactive Unity Demo</h3>
                    <p className="video-home-paragraph">Experience our real-time 3D game engine capabilities. Interact with fully rendered scenes, dynamic lighting, and immersive graphics powered by Unity. This demo showcases the technical prowess behind Cyclone's latest gaming experiences.</p>
                  </div>
                </Col>
                <Col md={4} className="d-flex ">
                  <UnityDemo useRef={canvasRef1} useState={{ unityInstance: unityInstance1, unityInstance1, setUnityInstance1 }} />
                </Col>
              </Row>

            </Row>




          </Row>
        </Col>








      </Row >

      <Row className='video-Row align-items-center justify-content-center video-home-games-intro-row'>
        <Col className='col-10'>
          <div className="video-home-copy video-home-games-copy">
            <h2 className="video-home-feature-title video-home-games-title">Explore Our Games</h2>
            <p className="video-home-paragraph">
              Discover our latest titles and experience the future of gaming. Each game in our collection features unique gameplay mechanics, stunning visuals, and our signature adaptive AI system that learns from your playstyle. Browse our full game list below to find your next favorite game.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="video-home-game-list-row">
        <GameList button1="Play Demo" button2="Go To Store " />

      </Row>





    </Container >



  )
}


export default VideoHome;