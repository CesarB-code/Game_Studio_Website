import { triangleAnimation, rectangleAnimation, curveAnimation, lineAnimation, circleAnimation, semiCircleAnimation } from '/Users/cesarbarrera/Desktop/Game_Studio_Website-master/src/VideoHome/wp-coponents/DrawingFunctions.js';
import { gl } from '/Users/cesarbarrera/Desktop/Game_Studio_Website-master/src/VideoHome/VideoHome.js';


function HairType1Drawing() {
    HairType1TopPart();
    HairType1Strands();
}
function HairType1TopPart() {
    HairType1BottomPart();
}
function HairType1BottomPart() {

}
function HairType1Strands() {

}
function DrawEar() {
    // Drawing the ear using WebGL
    gl.beginPath();
    gl.arc(0, 0, 5, 0, Math.PI * 2, true);
    gl.fillStyle = "#FFD700";
    gl.fill();
    gl.closePath();
}
export { HairType1Drawing, DrawEar };