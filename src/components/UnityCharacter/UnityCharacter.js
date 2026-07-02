import { Row, Col, Card, Button } from 'react-bootstrap';
import useAni from '../useAni.js';
import "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/UnityCharacter/UnityCharacter.css"
export default function UnityCharacter({ useRef, useState }) {

  const startAudio = async () => {
    const ctx =
      new (window.AudioContext ||
        window.webkitAudioContext)();

    await ctx.resume();
  };

  let playAnimation = () => {
    if (!useState.unityInstance) return;

    useState.unityInstance1.SendMessage(
      "AnimationController",
      "Walk"
    );
  };
  useAni(useRef, useState, "loadAnimation");


  return (
    <Row className="align-items-center justify-content-center">
      <Card className="align-items-center " style={{ width: '100%', height: '100%', padding: '0px' }}>
        <Col>

          <canvas id="unity-canvas"
            ref={useRef}
            width={600}
            height={500}
            style={{ width: '100%', margin: '0px', paddingLeft: '5px', padding: '5px' }}
          />



          <Button
            onClick={startAudio}
            style={{
              width: '100%', margin: '0px', paddingLeft: '15px', paddingRight: '15px'
            }}
          >
            Play Audio
          </Button>

        </Col>


      </Card>

    </Row >
  );
}