import { Row, Col, Card, Button } from 'react-bootstrap';
import useAni from '../useAni.js';
import { useRef, useState, useEffect } from 'react';
import './UnityCharacter.css';

export default function UnityCharacter({ useRef1, useState1 }) {

  const startAudio = async () => {
    const ctx =
      new (window.AudioContext ||
        window.webkitAudioContext)();

    await ctx.resume();
  };

  let playAnimation = () => {
    if (!useState1.unityInstance) return;

    useState1.unityInstance1.SendMessage(
      "AnimationController",
      "Walk"
    );
  };

  useAni(useRef1, useState1, "loadAnimation");


  let canvasHeight = useRef(null);

  const [webHeight, setWebHeight] = useState();

  useEffect(() => {
    function updateHeight() {
      setWebHeight(parseFloat(getComputedStyle(canvasHeight.current).height));
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);





  return (
    <Row className="align-items-center justify-content-center w-100 h-100">
      <Card className="align-items-center border-0 p-0 w-100 h-100">
        <Col ref={canvasHeight} xs={12} className="d-flex flex-column gap-2 w-100">
          <canvas
            id="unity-canvas"
            ref={useRef1}
            width={600}
            height={webHeight}
            className="w-100 unity-character-canvas"
          />

          <Button
            onClick={startAudio}
            className="w-100 unity-character-audio-button"
          >
            Play Audio
          </Button>
        </Col>
      </Card>
    </Row>
  );
}