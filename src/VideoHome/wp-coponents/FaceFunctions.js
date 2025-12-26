import { triangleAnimation, rectangleAnimation, curveAnimation, lineAnimation, circleAnimation, semiCircleAnimation, elipseAnimation } from
    '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/wp-coponents/DrawingFunctions.js';
import { gl, uColor1, uColor2 } from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/VideoHome.js';

let eyeHeight, noseHeight, EarPosition, FaceColor, HairColor, EyeColor;

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
function DrawEye() {

}
function DrawEar(eyePosition) {
    if (eyePosition === "left") {
        curveAnimation(30, EarPosition, eyeHeight, -0.5, 0.5, 0.5, 0.5, 3, 0);
        curveAnimation(30, -0.7, 0, -0.5, noseHeight, 0.5, 0.5, 3, 0);


    } else if (eyePosition === "right") {

    }
    // Drawing the ear using WebGL



}
function DrawFace(copies, a, b, h, k) {
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
    elipseAnimation(copies, a, b, h, k);
    EarPosition = h + a;
    DrawWhitesEye(40, 0.1, 0.15, 0.25, 0.1);
}
function EditFace() {
    gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
    gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);
    // sketch line left check
    for (let startVX = 0, startVY = -0.9, endVX = - 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {


        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 3, 0.5);
    }
    for (let startVX = -0.45, startVY = -0.45, endVX = - 0.52, endVY = -0.05, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {


        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 3, 0.7);
    }
    // sketch line right check
    for (let startVX = 0, startVY = -0.9, endVX = 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {
        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 1, 0.5);
    }
    for (let startVX = 0.46, startVY = -0.45, endVX = 0.53, endVY = 0.05, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {



        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 1, 0.7);
    }
}
function DrawWhitesEye(copies, a, b, h, k) {
    eyeHeight = k + b;
    gl.uniform3fv(uColor1, [1, 1, 1]);
    gl.uniform3fv(uColor2, [(1 * 0.3), (1 * 0.3), (1 * 0.3)]);
    elipseAnimation(copies, a, b, h, k);
    elipseAnimation(copies, a, b, (-1 * h), k);
}
function DrawNose(first1, first2, second1, second2, third1, third2, fourth1, fourth2) {
    // Drawing the nose using WebGL
    noseHeight = second2;
    lineAnimation(first1, first2, second1, second2);
    lineAnimation(third1, third2, fourth1, fourth2);
}
function DrawMouth() {
    curveAnimation(10, 0.0, -0.5, -0.10, -0.48, 1, 1, 3, 0);
    curveAnimation(10, 0.0, -0.5, 0.10, - 0.48, 1, 1, 1, 0);
    curveAnimation(10, 0.0, -0.54, -0.035, -0.53, 1, 1, 3, 0);
    curveAnimation(10, 0.0, -0.54, 0.03, - 0.53, 1, 1, 1, 0);

}
export { HairType1Drawing, DrawEar, DrawFace, EditFace, DrawNose, DrawMouth, DrawEye };