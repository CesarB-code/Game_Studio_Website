import { useEffect, useRef, useState } from "react";
import { Row, Card, Button } from 'react-bootstrap';

export default function UnityCharacter() {
  const canvasRef = useRef(null);
  const [unityInstance, setUnityInstance] =
    useState(null);
  let playAnimation = () => {
    if (!unityInstance) return;

    unityInstance.SendMessage(
      "CharacterController",
      "PlayIdle"
    );
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/WebGLBuilder/WebGLBuild/Build/WebGLBuild.loader.js";

    script.onload = () => {
      console.log("Loader script loaded");

      console.log(
        "createUnityInstance:",
        window.createUnityInstance
      ); if (!window.createUnityInstance) {
        console.error("Unity loader not found");
        return;
      }

      window.createUnityInstance(canvasRef.current, {
        frameworkUrl: "/WebGLBuilder/WebGLBuild/Build/WebGLBuild.framework.js",
        dataUrl: "/WebGLBuilder/WebGLBuild/Build/WebGLBuild.data",
        codeUrl: "/WebGLBuilder/WebGLBuild/Build/WebGLBuild.wasm",
      })
        .then((instance) => {
          setUnityInstance(instance);
          console.log("Unity Loaded");
        })
        .catch((err) => {
          console.error(err);
        });
    };

    document.body.appendChild(script);




    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Row className="align-items-center justify-content-center">
      <Card className="align-items-center " style={{ width: '100%', height: '100%', padding: '0px' }}>
        <canvas id="unity-canvas"
          ref={canvasRef}
          width={600}
          height={500}
          style={{ width: '100%', margin: '0px', padding: '0px' }}
        />
      </Card>
      <Button
        onClick={playAnimation}
        className="ms-2"
      >
        Play Animation
      </Button>
    </Row>
  );
}