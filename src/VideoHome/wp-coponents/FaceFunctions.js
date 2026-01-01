import { triangleAnimation, rectangleAnimation, curveAnimation, lineAnimation, circleAnimation, semiCircleAnimation, elipseAnimation } from
    '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/wp-coponents/DrawingFunctions.js';
import { gl, uColor1, uColor2 } from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/VideoHome.js';
import { e } from 'mathjs';

let eyeHeight, noseHeight, UpperEarPosition, LowerEarPosition,
    FaceColor, HairColor, EyeColor, UpperTheta, LowerTheta,
    earMiddle, earLeftPoints = [], earRightPoints = [];


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
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
    earMiddle = noseHeight > 1 ? eyeHeight - noseHeight : Math.abs(eyeHeight + noseHeight);
    if (eyePosition === "left") {
        //bottom
        for (let curvePart = 0.5; curvePart <= 1; curvePart += 0.01) {
            curveAnimation(30, (-1 * LowerEarPosition) - 0.01, noseHeight - 0.03, (-1 * LowerEarPosition) + 0.015, noseHeight,
                0.5, 0.5, 1, curvePart);
        }

        earLeftPoints.push((-1 * LowerEarPosition) + 0.015, noseHeight);
        earLeftPoints.push((-1 * LowerEarPosition) - 0.01, noseHeight - 0.03);

        for (let curvePart = 0.5; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (-1 * LowerEarPosition) - 0.01, noseHeight - 0.03, (-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle,
                0.5, 0.5, 3, curvePart);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle);

        for (let curvePart = 0.7; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle, (-1 * UpperEarPosition) - 0.1, eyeHeight,
                0.5, 0.5, 3, curvePart);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.1, eyeHeight);
        for (let curvePart = 0.4; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition) - 0.1, eyeHeight,
                0.5, 0.5, 2, curvePart);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05);
        //top
        for (let curvePart = 0.7; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition), eyeHeight,
                0.5, 0.5, 4, curvePart);
        }
        earLeftPoints.push((-1 * UpperEarPosition), eyeHeight);
        fillEar("left");
        earLeftPoints = [];


    } else if (eyePosition === "right") {
        //bottom
        for (let curvePart = 0.5; curvePart <= 1; curvePart += 0.01) {
            curveAnimation(30, (LowerEarPosition) + 0.01, noseHeight - 0.03, (LowerEarPosition) - 0.015, noseHeight,
                0.5, 0.5, 3, curvePart);
        }
        earRightPoints.push((LowerEarPosition) - 0.015, noseHeight);

        earRightPoints.push((LowerEarPosition) + 0.01, noseHeight - 0.03);

        for (let curvePart = 0.5; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (LowerEarPosition) + 0.01, noseHeight - 0.03, (UpperEarPosition) + 0.08, noseHeight + earMiddle,
                0.5, 0.5, 1, curvePart);
        }
        earRightPoints.push((UpperEarPosition) + 0.08, noseHeight + earMiddle);

        for (let curvePart = 0.7; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (UpperEarPosition) + 0.08, noseHeight + earMiddle, (UpperEarPosition) + 0.1, eyeHeight,
                0.5, 0.5, 1, curvePart);
        }
        earRightPoints.push((UpperEarPosition) + 0.1, eyeHeight);
        for (let curvePart = 0.4; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition) + 0.1, eyeHeight,
                0.5, 0.5, 4, curvePart);
        }
        earRightPoints.push((UpperEarPosition) + 0.05, eyeHeight + 0.05);
        for (let curvePart = 0.7; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(30, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition), eyeHeight,
                0.5, 0.5, 2, curvePart);
        }
        earRightPoints.push((UpperEarPosition), eyeHeight);
        fillEar("right");
        console.log(earRightPoints);
        earRightPoints = [];

    }
    function fillEar(earside) {
        if (earside === "left") {
            gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
            gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
            triangleAnimation(earLeftPoints[8], earLeftPoints[9], earLeftPoints[10], earLeftPoints[11], earLeftPoints[12], earLeftPoints[13]);
            triangleAnimation(earLeftPoints[0], earLeftPoints[1], earLeftPoints[6], earLeftPoints[7], earLeftPoints[2], earLeftPoints[3]);
            triangleAnimation(earLeftPoints[12], earLeftPoints[13], earLeftPoints[6], earLeftPoints[7], earLeftPoints[0], earLeftPoints[1]);
            triangleAnimation(earLeftPoints[12], earLeftPoints[13], earLeftPoints[8], earLeftPoints[9], earLeftPoints[6], earLeftPoints[7]);
            triangleAnimation(earLeftPoints[6], earLeftPoints[7], earLeftPoints[4], earLeftPoints[5], earLeftPoints[2], earLeftPoints[3]);
        }
        else if (earside === "right") {
            gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
            gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
            triangleAnimation(earRightPoints[8], earRightPoints[9], earRightPoints[10], earRightPoints[11], earRightPoints[12], earRightPoints[13]);
            triangleAnimation(earRightPoints[0], earRightPoints[1], earRightPoints[6], earRightPoints[7], earRightPoints[2], earRightPoints[3]);
            triangleAnimation(earRightPoints[12], earRightPoints[13], earRightPoints[6], earRightPoints[7], earRightPoints[0], earRightPoints[1]);
            triangleAnimation(earRightPoints[12], earRightPoints[13], earRightPoints[8], earRightPoints[9], earRightPoints[6], earRightPoints[7]);
            triangleAnimation(earRightPoints[6], earRightPoints[7], earRightPoints[4], earRightPoints[5], earRightPoints[2], earRightPoints[3]);
        }



    }
}
function DrawFace(copies, a, b, h, k) {
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);

    elipseAnimation(copies, a, b, h, k);
    DrawWhitesEye(40, 0.1, 0.15, 0.25, 0.1);
    UpperTheta = Math.sinh((eyeHeight - k) / b);
    UpperEarPosition = h + a * Math.cos(UpperTheta);
    LowerTheta = Math.sinh((noseHeight - k) / b);
    LowerEarPosition = h + a * Math.cos(LowerTheta);
}
function EditFace() {
    gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
    gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);

    // sketch line left check
    for (let startVX = 0, startVY = -0.9, endVX = - 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {


        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 3, 0.48);
    }
    for (let startVX = -0.45, startVY = -0.45, endVX = - 0.52, endVY = -0.05, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {

        if (copies == 0) {
            earLeftPoints.push(endVX, endVY);
        }
        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 3, 0.7);
    }
    // sketch line right check
    for (let startVX = 0, startVY = -0.9, endVX = 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {
        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 1, 0.5);
    }
    for (let startVX = 0.46, startVY = -0.45, endVX = 0.53, endVY = 0.05, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {


        if (copies == 0) {
            earRightPoints.push(endVX, endVY);
        }

        curveAnimation(10, startVX, startVY, endVX, endVY, 0.9, 0.9, 1, 0.7);
    }
}
function DrawWhitesEye(copies, a, b, h, k) {
    eyeHeight = k;

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