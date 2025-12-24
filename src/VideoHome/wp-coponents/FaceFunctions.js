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
function DrawFace(copies, a, b, h, k) {
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
    elipseAnimation(copies, a, b, h, k);
}
export { HairType1Drawing, DrawEar, DrawFace };