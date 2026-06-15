import { Row, Card, Button } from 'react-bootstrap';
import useAni from './useAni.js';
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
        <canvas id="unity-canvas"
          ref={useRef}
          width={600}
          height={500}
          style={{ width: '100%', margin: '0px', padding: '0px' }}
        />
      </Card>
      <Button
        onClick={startAudio}
        className="ms-2"
      >
        Play Audio
      </Button>
    </Row>
  );
}