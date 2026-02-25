import { triangleAnimation, rectangleAnimation, curveAnimation, lineAnimation, circleAnimation, semiCircleAnimation, elipseAnimation, semiElipseAnimation } from
    '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/wp-coponents/DrawingFunctions.js';
import { gl, uColor1, uColor2 } from '/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/VideoHome.js';

export let hairPoints = [], leftEarPotentialHairBounds, rightEarPotentialHairBounds;
let eyeHeight, noseHeight, UpperEarPosition, LowerEarPosition,
    UpperTheta, LowerTheta,
    earMiddle, earLeftPoints = [], earRightPoints = [], leftEarCurves = new Array(), rightEarCurves = new Array(), earPointCount = 0;



function DrawHair(linePointsQuantity, hairSplit, leftLowerBoundX, leftUpperBoundX, rightLowerBoundX, rightUpperBoundX, upperBoundY, lowerBoundY) {
    //hair drawing

    let rightSortedXValues = new Array(),
        leftSortedXValues = new Array(),
        sortedYValues = new Array();
    corrdinateXValuesArray(rightEarPotentialHairBounds, "right");
    corrdinateXValuesArray(leftEarPotentialHairBounds, "left");

    corrdinateYValueArray(rightEarPotentialHairBounds);
    sortNumbersAscending(rightSortedXValues);
    sortNumbersAscending(leftSortedXValues);
    sortNumbersAscending(sortedYValues);


    HairType1BasePart();
    HairType1Strands();
    function HairType1BasePart() {
        let tempArray = [];
        gl.uniform3fv(uColor1, [0.386, 0.738, 0.990]);
        gl.uniform3fv(uColor2, [0.386, 0.738, 0.990]);
        let isColorToggled1 = false;
        //right side hair
        for (let hairMove1 = 0.001, count = 0, hairCenter = 0.98, hairPosition = hairPoints[hairPoints.length - 6]; hairPosition > hairPoints[hairPoints.length - 8];
            hairPosition -= hairMove1, hairCenter > 0.9 ? hairCenter -= hairMove1 : hairCenter -= 0, count++) {
            let upperEarCurveBound1 = new shapeObject([rightEarCurves[rightEarCurves.length - 2], rightEarCurves[rightEarCurves.length - 4]], [rightEarCurves[rightEarCurves.length - 1], rightEarCurves[rightEarCurves.length - 3]]);
            let lowerEarCurveBound2 = new shapeObject([rightEarCurves[rightEarCurves.length - 8], rightEarCurves[rightEarCurves.length - 6]], [rightEarCurves[rightEarCurves.length - 7], rightEarCurves[rightEarCurves.length - 5]]);

            hairMove1 = 0.001;

            curveAnimation(linePointsQuantity, 0, hairCenter, hairPosition, hairPoints[hairPoints.length - 5], 1, 1, 4, 0,
                rightLowerBoundX >= rightSortedXValues[0] ? rightLowerBoundX : rightSortedXValues[0],
                rightUpperBoundX < rightSortedXValues[rightSortedXValues.length - 1] ? rightUpperBoundX : rightSortedXValues[rightSortedXValues.length - 1],
                upperBoundY <= sortedYValues[sortedYValues.length - 1] ? upperBoundY : sortedYValues[sortedYValues.length - 1],
                lowerBoundY >= sortedYValues[0] ? lowerBoundY : sortedYValues[0],
                upperEarCurveBound1);
            curveAnimation(linePointsQuantity, hairPosition + 0.01, hairPoints[1], hairPosition, hairPoints[hairPoints.length - 5], 1, 1, 3, 0,
                rightLowerBoundX >= rightSortedXValues[0] ? rightLowerBoundX : rightSortedXValues[0],
                rightUpperBoundX < rightSortedXValues[rightSortedXValues.length - 1] ? rightUpperBoundX : rightSortedXValues[rightSortedXValues.length - 1],
                upperBoundY <= sortedYValues[sortedYValues.length - 1] ? upperBoundY : sortedYValues[sortedYValues.length - 1],
                lowerBoundY >= sortedYValues[0] ? lowerBoundY : sortedYValues[0],
                lowerEarCurveBound2);

            if ((count % hairSplit == 0) || (count == 0)) {
                if (isColorToggled1 == false) {
                    toggleColor(uColor1, uColor2, [0.0200, 1.00, 0.314]);
                    isColorToggled1 = true;
                } else {
                    toggleColor(uColor1, uColor2, [0.386, 0.738, 0.990]);
                    isColorToggled1 = false;

                }

            }






            if (hairPosition - hairMove1 < hairPoints[hairPoints.length - 8]) {
                tempArray.push(hairPosition, hairPoints[hairPoints.length - 5]);
            }
        };
        //left side hair color
        let isColorToggled2 = false;
        gl.uniform3fv(uColor1, [0.0200, 1.00, 0.314]);
        gl.uniform3fv(uColor2, [0.0200, 1.00, 0.314]);

        for (let hairMove1 = 0.001, count = 0, hairCenter = 0.98, hairPosition = hairPoints[hairPoints.length - 10]; hairPosition < hairPoints[hairPoints.length - 12];
            hairPosition += hairMove1, hairCenter > 0.9 ? hairCenter -= hairMove1 : hairCenter -= 0, count++) {
            let upperEarCurveBound1 = new shapeObject([leftEarCurves[leftEarCurves.length - 2], leftEarCurves[leftEarCurves.length - 4]], [leftEarCurves[leftEarCurves.length - 1], leftEarCurves[leftEarCurves.length - 3]]);
            let lowerEarCurveBound2 = new shapeObject([leftEarCurves[leftEarCurves.length - 8], leftEarCurves[leftEarCurves.length - 6]], [leftEarCurves[leftEarCurves.length - 7], leftEarCurves[leftEarCurves.length - 5]]);

            hairMove1 = 0.001;
            curveAnimation(linePointsQuantity, 0, hairCenter, hairPosition, hairPoints[hairPoints.length - 9], 1, 1, 2, 0,
                leftLowerBoundX >= leftSortedXValues[0] ? leftLowerBoundX : leftSortedXValues[0],
                leftUpperBoundX < leftSortedXValues[leftSortedXValues.length - 1] ? leftUpperBoundX : leftSortedXValues[leftSortedXValues.length - 1],
                upperBoundY <= sortedYValues[sortedYValues.length - 1] ? upperBoundY : sortedYValues[sortedYValues.length - 1],
                lowerBoundY >= sortedYValues[0] ? lowerBoundY : sortedYValues[0],
                upperEarCurveBound1);
            curveAnimation(linePointsQuantity, hairPosition - 0.01, hairPoints[1], hairPosition, hairPoints[hairPoints.length - 9], 1, 1, 3, 0,
                leftLowerBoundX >= leftSortedXValues[0] ? leftLowerBoundX : leftSortedXValues[0],
                leftUpperBoundX < leftSortedXValues[leftSortedXValues.length - 1] ? leftUpperBoundX : leftSortedXValues[leftSortedXValues.length - 1],
                upperBoundY <= sortedYValues[sortedYValues.length - 1] ? upperBoundY : sortedYValues[sortedYValues.length - 1],
                lowerBoundY >= sortedYValues[0] ? lowerBoundY : sortedYValues[0],
                lowerEarCurveBound2);


            if ((count % hairSplit == 0) || (count == 0)) {
                if (isColorToggled2 == false) {
                    toggleColor(uColor1, uColor2, [0.0200, 1.00, 0.314]);
                    isColorToggled2 = true;
                }
                else {
                    toggleColor(uColor1, uColor2, [0.386, 0.738, 0.990]);
                    isColorToggled2 = false;

                }

            }
            if (hairPosition + hairMove1 > hairPoints[hairPoints.length - 12]) {
                tempArray.push(hairPosition, hairPoints[hairPoints.length - 9]);
            }
        }
        // hair Outline
        gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
        gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);
        console.log(hairPoints);
        console.log(tempArray);
        curveAnimation(linePointsQuantity, hairPoints[24] - 0.05, -0.50, tempArray[2], tempArray[3], 1, 1, 3, 0.5, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[24] - 0.05, -0.50, tempArray[2], -tempArray[3], 1, 1, 3, 0.5, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[26] - 0.05, 0, tempArray[2], tempArray[3], 1, 1, 3, 0.5, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[26] - 0.025, tempArray[3] + 0.2, hairPoints[26] - 0.05, 0, 1, 1, 2, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[24] - 0.08, 0.5, hairPoints[26] - 0.025, tempArray[3] + 0.2, 1, 1, 2, 0, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[24], 0, hairPoints[26] - 0.025, tempArray[3] + 0.2, 1, 1, 3, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[24] + 0.05, 0.4, hairPoints[24], 0, 1, 1, 2, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[22], 0.7, hairPoints[24] + 0.05, 0.4, 1, 1, 2, 0, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[20] + 0.05, 0.15, hairPoints[24] + 0.05, 0.4, 1, 1, 3, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[22], 0.7, hairPoints[24] + 0.05, 0.4, 1, 1, 2, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[20] + 0.1, 0.4, hairPoints[20] + 0.05, 0.15, 1, 1, 2, 0, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[18] + 0.12, -0.1, hairPoints[20] + 0.1, 0.4, 1, 1, 3, 0.6, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[18] + 0.12, -0.1, hairPoints[16] + 0.1, 0.4, 1, 1, 1, 0.6, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[16] + 0.1, 0.4, hairPoints[14] + 0.15, 0.05, 1, 1, 4, 0.6, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[14] + 0.15, 0.05, hairPoints[12] + 0.15, 0.4, 1, 1, 1, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[12] + 0.15, 0.4, hairPoints[10] + 0.15, 0.05, 1, 1, 4, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[10] + 0.15, 0.05, hairPoints[8] + 0.15, 0.4, 1, 1, 1, 0, 0, 0, 0, 0);

        curveAnimation(linePointsQuantity, hairPoints[10] + 0.15, -0.54, hairPoints[8] + 0.15, 0.4, 1, 1, 1, 0, 0, 0, 0, 0);
        curveAnimation(linePointsQuantity, hairPoints[10] + 0.15, -0.54, tempArray[0], tempArray[1], 1, 1, 1, 0, 0, 0, 0, 0);
        //hairTopColor 
        gl.uniform3fv(uColor1, [0.0600, 0.3, 0]);
        gl.uniform3fv(uColor2, [0.0600, 0.3, 0]);
        //semiCircleAnimation(linePointsQuantity, (Math.abs(hairPoints[26] - 0.025) - (hairPoints[18] + 0.12)), hairPoints[18] + 0.12, 0.4);
        semiElipseAnimation(linePointsQuantity, (Math.abs(hairPoints[26] - 0.025) - (hairPoints[18] + 0.12)), 0.5, hairPoints[18] + 0.12, 0.4);



    }
    function colorHairStrands(FirstCurveX, SecondCurveX, EndY) {
        // Function to color hair strands
        gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
        gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);
        for (let i = 0.001; ;) {
            curveAnimation(linePointsQuantity + 50, FirstCurveX, EndY, SecondCurveX, EndY, 1, 1, 1, 0, 0, 0, 0, 0);
        }
    }
    function sortNumbersAscending(arr) {

        arr.sort((a, b) => a - b); // Sorts in place

    }
    function corrdinateXValuesArray(originalArray, earType) {
        if (earType === "left") {
            for (let i = 0; i < originalArray.length; i += 2) {
                leftSortedXValues.push(originalArray[i]);
            }
        } else if (earType === "right") {
            for (let i = 0; i < originalArray.length; i += 2) {
                rightSortedXValues.push(originalArray[i]);
            }
        } else {
            console.log("Invalid ear type provided. Please use 'left' or 'right'.");
        }
    }
    function corrdinateYValueArray(originalArray) {
        for (let i = 1; i <= originalArray.length; i += 2) {
            sortedYValues.push(originalArray[i]);
        }
    }

    function HairType1Strands() {

    }

    hairPoints = [];

}

function DrawEar(eyePosition, curvePointsQuantity, bottomEarCurve1, bottomEarCurve2, middleEarCurve, topEarCurve1, topEarCurve2) {
    earPointCount = curvePointsQuantity;
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
    earMiddle = noseHeight > 1 ? eyeHeight - noseHeight : Math.abs(eyeHeight + noseHeight);

    if (eyePosition === "left") {
        //bottom
        for (let curvePart = bottomEarCurve1; curvePart <= 1; curvePart += 0.01) {
            curveAnimation(curvePointsQuantity, (-1 * LowerEarPosition) - 0.01, noseHeight - 0.03, (-1 * LowerEarPosition) + 0.015, noseHeight,
                1, 1, 1, curvePart, 0, 0, 0, 0);
        }

        earLeftPoints.push((-1 * LowerEarPosition) + 0.015, noseHeight);
        earLeftPoints.push((-1 * LowerEarPosition) - 0.01, noseHeight - 0.03);
        hairPoints.push((-1 * LowerEarPosition) - 0.01, noseHeight - 0.03);
        leftEarCurves.push("curve");
        leftEarCurves.push([curvePointsQuantity, ((-1 * LowerEarPosition) - 0.01), (noseHeight - 0.03), ((-1 * LowerEarPosition) + 0.015), noseHeight,
            1, 1, 1, bottomEarCurve1, 0, 0, 0, 0]);
        for (let curvePart = bottomEarCurve2; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (-1 * LowerEarPosition) - 0.01, noseHeight - 0.03, (-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle,
                1, 1, 3, curvePart, 0, 0, 0, 0);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle);
        leftEarCurves.push("curve", [curvePointsQuantity, ((-1 * LowerEarPosition) - 0.01), (noseHeight - 0.03), ((-1 * UpperEarPosition) - 0.08), (noseHeight + earMiddle),
            1, 1, 3, bottomEarCurve2, 0, 0, 0, 0]);

        for (let curvePart = middleEarCurve; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle, (-1 * UpperEarPosition) - 0.1, eyeHeight,
                1, 1, 3, curvePart, 0, 0, 0, 0);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.1, eyeHeight);
        hairPoints.push((-1 * UpperEarPosition) - 0.1, eyeHeight);
        leftEarCurves.push("curve", [curvePointsQuantity, (-1 * UpperEarPosition) - 0.08, noseHeight + earMiddle, (-1 * UpperEarPosition) - 0.1, eyeHeight,
            1, 1, 3, middleEarCurve, 0, 0, 0, 0]);

        for (let curvePart = topEarCurve1; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition) - 0.1, eyeHeight,
                1, 1, 2, curvePart, 0, 0, 0, 0);
        }
        earLeftPoints.push((-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05);
        leftEarCurves.push("curve", [curvePointsQuantity, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition) - 0.1, eyeHeight,
            1, 1, 2, topEarCurve1, 0, 0, 0, 0]);
        //top
        for (let curvePart = topEarCurve2; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition), eyeHeight,
                1, 1, 4, curvePart, 0, 0, 0, 0);
        }
        earLeftPoints.push((-1 * UpperEarPosition), eyeHeight);
        leftEarCurves.push("curve", [curvePointsQuantity, (-1 * UpperEarPosition) - 0.05, eyeHeight + 0.05, (-1 * UpperEarPosition), eyeHeight,
            1, 1, 4, topEarCurve2, 0, 0, 0, 0]);
        fillEar("left");
        InnerEarDetails(earLeftPoints, "left");
        leftEarPotentialHairBounds = earLeftPoints.slice(2);
        earLeftPoints = [];



    } else if (eyePosition === "right") {
        //bottom
        for (let curvePart = bottomEarCurve1; curvePart <= 1; curvePart += 0.01) {
            curveAnimation(curvePointsQuantity, (LowerEarPosition) + 0.01, noseHeight - 0.03, (LowerEarPosition) - 0.015, noseHeight,
                1, 1, 3, curvePart, 0, 0, 0, 0);
        }
        earRightPoints.push((LowerEarPosition) - 0.015, noseHeight);

        earRightPoints.push((LowerEarPosition) + 0.01, noseHeight - 0.03);
        hairPoints.push((LowerEarPosition) + 0.01, noseHeight - 0.03);
        rightEarCurves.push("curve", [curvePointsQuantity, (LowerEarPosition) + 0.01, noseHeight - 0.03, (LowerEarPosition) - 0.015, noseHeight,
            1, 1, 3, bottomEarCurve1, 0, 0, 0, 0]);


        for (let curvePart = bottomEarCurve2; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (LowerEarPosition) + 0.01, noseHeight - 0.03, (UpperEarPosition) + 0.08, noseHeight + earMiddle,
                1, 1, 1, curvePart, 0, 0, 0, 0);
        }
        earRightPoints.push((UpperEarPosition) + 0.08, noseHeight + earMiddle);
        rightEarCurves.push("curve", [curvePointsQuantity, (LowerEarPosition) + 0.01, noseHeight - 0.03, (UpperEarPosition) + 0.08, noseHeight + earMiddle,
            1, 1, 1, bottomEarCurve2, 0, 0, 0, 0]);




        for (let curvePart = middleEarCurve; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (UpperEarPosition) + 0.08, noseHeight + earMiddle, (UpperEarPosition) + 0.1, eyeHeight,
                1, 1, 1, curvePart, 0, 0, 0, 0);
        }
        earRightPoints.push((UpperEarPosition) + 0.1, eyeHeight);
        hairPoints.push((UpperEarPosition) + 0.1, eyeHeight);
        rightEarCurves.push("curve", [curvePointsQuantity, (UpperEarPosition) + 0.08, noseHeight + earMiddle, (UpperEarPosition) + 0.1, eyeHeight,
            1, 1, 1, middleEarCurve, 0, 0, 0, 0]);


        for (let curvePart = topEarCurve1; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition) + 0.1, eyeHeight,
                1, 1, 4, curvePart, 0, 0, 0, 0);
        }
        earRightPoints.push((UpperEarPosition) + 0.05, eyeHeight + 0.05);
        rightEarCurves.push("curve", [curvePointsQuantity, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition) + 0.1, eyeHeight,
            1, 1, 4, topEarCurve1, 0, 0, 0, 0]);


        for (let curvePart = topEarCurve2; curvePart <= 1; curvePart += 0.01) {

            curveAnimation(curvePointsQuantity, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition), eyeHeight,
                1, 1, 2, curvePart, 0, 0, 0, 0);
        }
        rightEarCurves.push("curve", [curvePointsQuantity, (UpperEarPosition) + 0.05, eyeHeight + 0.05, (UpperEarPosition), eyeHeight,
            1, 1, 2, topEarCurve2, 0, 0, 0, 0]);


        earRightPoints.push((UpperEarPosition), eyeHeight);
        fillEar("right");
        InnerEarDetails(earRightPoints, "right")
        rightEarPotentialHairBounds = earRightPoints.slice(2);
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
function InnerEarDetails(earPointDetails, eartype) {
    if (eartype === "left") {
        gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
        gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);

        for (let point = earPointDetails.length - 1; point >= 9; point -= 2) {
            if (point > 11) {
                curveAnimation(20, earPointDetails[point - 3], earPointDetails[point - 2] - 0.04, earPointDetails[point - 1] - 0.01, earPointDetails[point] - 0.1
                    , 1, 1, 4, 0.3, 0, 0, 0, 0);
                curveAnimation(20, earPointDetails[0] - 0.015, earPointDetails[1] - 0.115, earPointDetails[point - 1] - 0.01, earPointDetails[point] - 0.1,
                    1, 1, 1, 0, 0, 0, 0, 0);
            }
            else if (point > 9) {
                curveAnimation(20, earPointDetails[point - 1], earPointDetails[point] - 0.04, earPointDetails[point - 3] + 0.01, earPointDetails[point - 2] - 0.04,
                    1, 1, 2, 0.5, 0, 0, 0, 0);
            }


        }

        // inner curve
        curveAnimation(20, earPointDetails[10], earPointDetails[11] - 0.18, earPointDetails[12] - 0.01, earPointDetails[13] - 0.1,
            1, 1, 1, 0, 0, 0, 0, 0);
        curveAnimation(20, earPointDetails[10], earPointDetails[11] - 0.18, earPointDetails[8] + 0.02, earPointDetails[9] - 0.1,
            1, 1, 3, 0, 0, 0, 0, 0);
        //
        curveAnimation(20, earPointDetails[4] - 0.01, earPointDetails[5] + 0.08, earPointDetails[0] - 0.015, earPointDetails[1] - 0.115,
            1, 1, 3, 0, 0, 0, 0, 0);
        curveAnimation(20, earPointDetails[4] - 0.01, earPointDetails[5] + 0.08, earPointDetails[0] - 0.04, earPointDetails[1] - 0.115,
            1, 1, 3, 0, 0, 0, 0, 0);
        curveAnimation(20, earPointDetails[0] - 0.01, earPointDetails[1] - 0.01, earPointDetails[0] - 0.04, earPointDetails[1] - 0.115,
            1, 1, 3, 0, 0, 0, 0, 0);


    } else if (eartype === "right") {
        gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
        gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);

        for (let point = earPointDetails.length - 1; point >= 9; point -= 2) {
            if (point > 11) {
                curveAnimation(20, earPointDetails[point - 3], earPointDetails[point - 2] - 0.04, earPointDetails[point - 1] + 0.01, earPointDetails[point] - 0.1
                    , 1, 1, 2, 0.3, 0, 0, 0, 0);
                curveAnimation(20, earPointDetails[0], earPointDetails[1] - 0.115, earPointDetails[point - 1] + 0.01, earPointDetails[point] - 0.1,
                    1, 1, 3, 0, 0, 0, 0, 0);
            }
            else if (point > 9) {
                curveAnimation(20, earPointDetails[point - 1], earPointDetails[point] - 0.04, earPointDetails[point - 3] - 0.01, earPointDetails[point - 2] - 0.04,
                    1, 1, 4, 0.5, 0, 0, 0, 0);
            }


        }

        // inner curve
        curveAnimation(20, earPointDetails[10], earPointDetails[11] - 0.18, earPointDetails[12] + 0.01, earPointDetails[13] - 0.1,
            1, 1, 3, 0, 0, 0, 0, 0);
        curveAnimation(20, earPointDetails[10], earPointDetails[11] - 0.18, earPointDetails[8] - 0.02, earPointDetails[9] - 0.1,
            1, 1, 1, 0);
        //lower inner curve
        curveAnimation(20, earPointDetails[4] + 0.01, earPointDetails[5] + 0.08, earPointDetails[0], earPointDetails[1] - 0.115,
            1, 1, 1, 0, 0, 0, 0, 0);
        //first half lower inner curve
        curveAnimation(20, earPointDetails[4] + 0.01, earPointDetails[5] + 0.08, earPointDetails[0] + 0.025, earPointDetails[1] - 0.2,
            1, 1, 1, 0, 0, 0, 0, 0);
        //second half upper inner curve
        curveAnimation(20, earPointDetails[0], earPointDetails[1] - 0.12, earPointDetails[0] + 0.025, earPointDetails[1] - 0.2,
            1, 1, 4, 0, 0, 0, 0, 0);

    }
}
function DrawFace(copies, a, b, h, k) {
    gl.uniform3fv(uColor1, [0.988, 0.906, 0.839]);
    gl.uniform3fv(uColor2, [(0.988 * 0.3), (0.906 * 0.3), (0.839 * 0.3)]);
    hairPoints[0] = 0;
    hairPoints[1] = (k - b);
    elipseAnimation(copies, a, b, h, k);
    UpperTheta = Math.sinh((eyeHeight - k) / b);
    UpperEarPosition = h + a * Math.cos(UpperTheta);
    LowerTheta = Math.sinh((noseHeight - k) / b);
    LowerEarPosition = h + a * Math.cos(LowerTheta);
    EditFace();

    function EditFace() {
        gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
        gl.uniform3fv(uColor2, [0.1, 0.1, 0.1]);

        // sketch line left check
        for (let startVX = 0, startVY = -0.9, endVX = - 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {


            curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 3, 0.48, 0, 0, 0, 0);
        }
        for (let startVX = -0.45, startVY = -0.45, endVX = - 0.52, endVY = -0.05, copies = 0; copies < 30; copies++, startVX -= 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {

            if (copies == 0) {
                earLeftPoints.push(endVX, endVY);
            }
            curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 3, 0.7, 0, 0, 0, 0);
        }
        // sketch line right check
        for (let startVX = 0, startVY = -0.9, endVX = 0.46, endVY = -0.44, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {
            curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 1, 0.5, 0, 0, 0, 0);
        }
        for (let startVX = 0.46, startVY = -0.45, endVX = 0.53, endVY = 0.05, copies = 0; copies < 30; copies++, startVX += 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {


            if (copies == 0) {
                earRightPoints.push(endVX, endVY);
            }

            curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 1, 0.7, 0, 0, 0, 0);
        }
    }

}


function DrawNose(first1, first2, second1, second2, third1, third2, fourth1, fourth2) {
    // Drawing the nose using WebGL
    noseHeight = second2;
    gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
    gl.uniform3fv(uColor2, [0.1, 0.1, 0.1])
    lineAnimation(first1, first2, second1, second2);
    lineAnimation(third1, third2, fourth1, fourth2);
}
function DrawMouth() {
    gl.uniform3fv(uColor1, [0.1, 0.1, 0.1]);
    gl.uniform3fv(uColor2, [0.1, 0.1, 0.1])
    curveAnimation(10, 0.0, -0.5, -0.10, -0.48, 1, 1, 3, 0, 0, 0, 0);
    curveAnimation(10, 0.0, -0.5, 0.10, - 0.48, 1, 1, 1, 0, 0, 0, 0);
    curveAnimation(10, 0.0, -0.54, -0.035, -0.53, 1, 1, 3, 0, 0, 0, 0);
    curveAnimation(10, 0.0, -0.54, 0.03, - 0.53, 1, 1, 1, 0, 0, 0, 0);

}
function DrawEye() {
    DrawWhitesEye(40, 0.1, 0.15, 0.25, 0.1);

    //eye iris drawing
    gl.uniform3fv(uColor1, [0, 0, 0]);
    gl.uniform3fv(uColor2, [0, 0, 0]);
    elipseAnimation(20, 0.07, 0.15, 0.25, 0.1);
    elipseAnimation(20, 0.07, 0.15, -0.25, 0.1);
    hairPoints.push(0.25, 0.1);
    hairPoints.push(-0.25, 0.1);
    //eye shine drawing
    gl.uniform3fv(uColor1, [1, 1, 1]);
    gl.uniform3fv(uColor2, [(1 * 0.3), (1 * 0.3), (1 * 0.3)]);
    circleAnimation(100, 0.02, 0.22, 0.22);
    circleAnimation(100, 0.02, -0.280, 0.22);
    //eye color drawing
    gl.uniform3fv(uColor1, [0.386, 0.738, 0.990]);
    gl.uniform3fv(uColor2, [0.386 * 0.5, 0.738 * 0.5, 0.990 * 0.5]);
    circleAnimation(50, 0.04, 0.25, -0.02);
    circleAnimation(50, 0.04, -0.25, -0.02);
    //Right eye
    gl.uniform3fv(uColor1, [0, 0, 0]);
    gl.uniform3fv(uColor2, [0, 0, 0])
    //right eyelashes left half line

    for (let startVX = 0.25, startVY = 0.25, endVX = 0.35, endVY = 0.05, copies = 0; copies < 10; copies++, startVX += 0.0001, startVY += 0.001, endVX += 0.003, endVY += 0.005) {

        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 4, 0, 0, 0, 0, 0);
    }
    //right eyelashes left half line

    for (let startVX = 0.38, startVY = 0.1, endVX = 0.33, endVY = 0.02, copies = 0; copies < 10; copies++, startVX += 0.001, startVY -= 0.005, endVX += 0.001, endVY -= 0.001) {
        lineAnimation(startVX, startVY, endVX, endVY);
    }
    //right eyelashes left half curve

    for (let startVX = 0.25, startVY = 0.25, endVX = 0.14, endVY = 0.15, copies = 0; copies < 10; copies++, startVX -= 0.0001, startVY += 0.001, endVX -= 0.001, endVY += 0.004) {

        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 2, 0, 0, 0, 0, 0);
    }
    //eye upper line

    for (let startVX = 0.15, startVY = 0.30, endVX = 0.35, endVY = 0.25, copies = 0; copies < 5; copies++, startVX -= 0.001, startVY += 0.001, endVX += 0.001, endVY += 0.001) {

        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 4, 0, 0, 0, 0, 0);
    }
    lineAnimation(0.15, 0.30, 0.12, 0.25);
    //eye lower line

    for (let startVX = 0.21, startVY = -0.05, endVX = 0.29, endVY = -0.05, copies = 0; copies < 10; copies++, startVX -= 0.001, startVY -= 0.001, endVX += 0.001, endVY -= 0.001) {

        lineAnimation(startVX, startVY, endVX, endVY);

    }

    //left eyelashes left half curve
    for (let startVX = -0.25, startVY = 0.25, endVX = -0.35, endVY = 0.05, copies = 0; copies < 10; copies++, startVX += 0.001, startVY += 0.001, endVX -= 0.003, endVY += 0.005) {

        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 4, 0, 0, 0, 0, 0);

    }
    //left eyelashes left half line
    for (let startVX = -0.38, startVY = 0.1, endVX = -0.34, endVY = 0.03, copies = 0; copies < 10; copies++, startVX -= 0.001, startVY -= 0.005, endVX -= 0.001, endVY -= 0.001) {
        lineAnimation(startVX, startVY, endVX, endVY);
    }
    //left eyelashes left half curve
    for (let startVX = -0.25, startVY = 0.25, endVX = -0.14, endVY = 0.15, copies = 0; copies < 10; copies++, startVX -= 0.0001, startVY += 0.001, endVX += 0.001, endVY += 0.004) {

        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 4, 0, 0, 0, 0, 0);
    }
    //eye upper line
    for (let startVX = -0.15, startVY = 0.30, endVX = -0.35, endVY = 0.25, copies = 0; copies < 10; copies++, startVX += 0.001, startVY += 0.001, endVX += 0.001, endVY += 0.001) {
        curveAnimation(10, startVX, startVY, endVX, endVY, 1, 1, 3, 0, 0, 0, 0, 0);
    }
    lineAnimation(-0.15, 0.30, -0.12, 0.25);
    //eye lower line
    for (let startVX = -0.21, startVY = -0.05, endVX = - 0.29, endVY = -0.05, copies = 0; copies < 10; copies++, startVX += 0.001, startVY -= 0.001, endVX -= 0.001, endVY -= 0.001) {

        lineAnimation(startVX, startVY, endVX, endVY);

    }

    function DrawWhitesEye(copies, a, b, h, k) {
        eyeHeight = k;

        gl.uniform3fv(uColor1, [1, 1, 1]);
        gl.uniform3fv(uColor2, [(1 * 0.3), (1 * 0.3), (1 * 0.3)]);
        elipseAnimation(copies, a, b, h, k);
        elipseAnimation(copies, a, b, (-1 * h), k);
    }

}
function DrawEyeBrows() {
    //right eyebrow line
    gl.uniform3fv(uColor1, [0, 0, 0]);
    gl.uniform3fv(uColor2, [0, 0, 0]);
    //right eyebrow line

    curveAnimation(10, 0.13, 0.50, 0.38, 0.45, 1, 1, 4, 0, 0, 0, 0, 0);


    //Left Eye drawing\

    //left eyebrow line
    curveAnimation(10, -0.13, 0.50, -0.38, 0.45, 1, 1, 2, 0, 0, 0, 0, 0);

}
function toggleColor(uColor1, uColor2, color) {
    // Set the uniform value
    gl.uniform3fv(uColor1, color);
    gl.uniform3fv(uColor2, color);
}
function shapeObject(shapeTypeArray, coordinate_array) {
    this.shapeTypeArray = shapeTypeArray;
    this.coordinate_array = coordinate_array;
}

export { DrawHair, DrawEar, DrawFace, DrawNose, DrawMouth, DrawEye, DrawEyeBrows };