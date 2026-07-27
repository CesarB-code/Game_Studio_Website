import 'bootstrap/dist/css/bootstrap.min.css';

import { useRef, useState, useEffect } from 'react';
import { DrawObject } from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/FaceFunctions.js";
import {
    Row, Col, Card, CardTitle, Button, ButtonGroup,

    Container
} from 'react-bootstrap';
import * as Interaction from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/components/pages/wp-coponents/InterationMethods.js';

import './AISoftware.css';
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

function AISoftware() {
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
    return (
        <Card id='cardRow' className='rounded-5 d-flex flex-column p-3 p-md-4'>
            <Row className='mb-3 text-center'>
                <h1 id='AITitle'>AI Software</h1>
            </Row>

            <Row className='g-4 align-items-center flex-grow-1' id='ContentRow'>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <canvas
                        ref={canvasRef}
                        width={300}
                        height={300}
                        style={{ width: '100%', maxWidth: '300px', aspectRatio: '1 / 1', margin: '0px', padding: '0px', border: '4px solid #f2a3a8' }}
                    />
                </Col>

                <Col xs={12} md={6} className='d-flex align-items-center'>
                    <p style={{ color: 'white', borderColor: 'black', fontFamily: 'Trebuchet MS, sans-serif', textAlign: 'center', overflowY: 'auto', height: '100%', margin: '0px' }}>
                        For a complete demo of our new AI Drawing Software or for a preorder of our software, click on the buttons below.
                    </p>
                </Col>
            </Row>

            <Row className='mt-4 justify-content-center w-100'>
                <Col>
                    <Button className='rounded-3 h-100 flex-grow-1'>Demo</Button>

                </Col>
                <Col>
                    <Button className='rounded-3 h-100 flex-grow-1'>Buy Software</Button>

                </Col>

            </Row>
        </Card>
    );

}
export default AISoftware;