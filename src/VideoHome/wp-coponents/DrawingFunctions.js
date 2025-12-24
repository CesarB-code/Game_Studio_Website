
import { gl } from "/Users/cesarbarrera/Documents/GitHub/Game_Studio_Website/src/VideoHome/VideoHome.js";
// Triangle vertices
let vertices = new Float32Array([
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0
]);
let triangle = new Float32Array([
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0
]);
let rectangle = new Float32Array([
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0,
    0.0, 0.0
]);

let curvePoints = new Float32Array([
    0.0, 0.0,
    0.0, 0.0
]);;

let vertex;
let once = true;
function triangleAnimation(point1X, point1Y, point2X, point2Y, point3X, point3Y) {
    triangle[0] = point1X;
    triangle[1] = point1Y;
    triangle[2] = point2X;
    triangle[3] = point2Y;
    triangle[4] = point3X;
    triangle[5] = point3Y;
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, triangle);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}
// rectangle drawing function
function rectangleAnimation(point1X, point1Y, point2X, point2Y, point3X, point3Y, point4X, point4Y, point5X, point5Y, point6X, point6Y) {
    rectangle[0] = point1X;
    rectangle[1] = point1Y;
    rectangle[2] = point2X;
    rectangle[3] = point2Y;
    rectangle[4] = point3X;
    rectangle[5] = point3Y;
    rectangle[6] = point4X;
    rectangle[7] = point4Y;

    gl.bufferData(gl.ARRAY_BUFFER, rectangle, gl.STATIC_DRAW);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);


}
// curve drawing function
function curveAnimation(lineCount, startX, startY, EndX, EndY, shiftMoreX, shiftMoreY, curveType, shrinkCruve) {


    let shrIStrX, shrIStrY, values, k1, k2, m1, m2, lineCountOffset;
    k1 = 2 / lineCount;
    k2 = 1 / lineCount;
    if (curveType == 1 || curveType == 3) {
        m1 = (k1 - 1) / (k1);
        m2 = (k2 - 1) / (k2);
    }
    else if (curveType == 2 || curveType == 4) {
        m1 = (1 - k1) / (k1);
        m2 = (1 - k2) / (k2);
    }

    lineCountOffset = (lineCount - 1) / lineCount;

    values = shiftNumbers(startX, startY, EndX, EndY, k1, k2, m1, m2, lineCountOffset, lineCount, curveType);
    shrIStrX = values[0];
    shrIStrY = values[1];

    CurveSeriesPointsDrawing(startX, startY, EndX, EndY, shrIStrX, shrIStrY, lineCountOffset, lineCount, shiftMoreX, shiftMoreY, curveType, shrinkCruve);




}
// line drawing function
function lineAnimation(startX, startY, EndX, EndY) {
    vertices = new Float32Array([startX, startY, EndX, EndY]);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
    gl.drawArrays(gl.LINE_STRIP, 0, 2);

}

// circle drawing function
function circleAnimation(number, radius, h, k) {
    let angle = (360 / number) * (Math.PI / 180);


    for (let i = 0; i < number; i++) {
        if (i == 0) {
            let x = h + (radius * Math.cos(angle));
            let y = k + (radius * Math.sin(angle))
            vertices = new Float32Array([h, k, h + radius, k, x, y]);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
            gl.drawArrays(gl.TRIANGLES, 0, 3);

        }
        else if (i == number - 1) {
            let x = h + (radius * Math.cos(360 * (Math.PI / 180)));
            let y = k + (radius * Math.sin(360 * (Math.PI / 180)))
            let updatedPositions = new Float32Array([h, k, vertices[4], vertices[5], x, y]);


            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
        else {
            let temp1 = vertices[4];
            let temp2 = vertices[5];
            let x = h + (radius * Math.cos(angle));
            let y = k + (radius * Math.sin(angle));
            const updatedPositions = new Float32Array([h, k, temp1, temp2, x, y]);

            vertices = updatedPositions;
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);


        }

        angle += (360 / number) * (Math.PI / 180);
    }


}
// semi circle drawing function
function semiCircleAnimation(number, radius, h, k) {
    let angle = (180 / number) * (Math.PI / 180);


    for (let i = 0; i < number; i++) {
        if (i == 0) {
            let x = h + (radius * Math.cos(angle));
            let y = k + (radius * Math.sin(angle))
            vertices = new Float32Array([h, k, h + radius, k, x, y]);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
            gl.drawArrays(gl.TRIANGLES, 0, 3);

        }
        else if (i == number - 1) {
            let x = h + (radius * Math.cos(180 * (Math.PI / 180)));
            let y = k + (radius * Math.sin(180 * (Math.PI / 180)))
            let updatedPositions = new Float32Array([h, k, vertices[4], vertices[5], x, y]);


            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
        else {
            let temp1 = vertices[4];
            let temp2 = vertices[5];
            let x = h + (radius * Math.cos(angle));
            let y = k + (radius * Math.sin(angle));
            const updatedPositions = new Float32Array([h, k, temp1, temp2, x, y]);

            vertices = updatedPositions;
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);


        }

        angle += (180 / number) * (Math.PI / 180);
    }


}
// elipse drawing function
function elipseAnimation(number, a, b, h, k) {



    let angle = (360 / number) * (Math.PI / 180);

    for (let i = 0; i < number; i++) {
        if (i == 0) {
            let x = h + (a * Math.cos(angle));
            let y = k + (b * Math.sin(angle));
            vertices = new Float32Array([Math.round(h * 100) / 100, Math.round(k * 100) / 100,
            Math.round((h + a) * 100) / 100, Math.round(k * 100) / 100, Math.round(x * 100) / 100, Math.round(y * 100) / 100]);
            let FirstX = Math.round(x * 100) / 100;
            let FirstY = Math.round(y * 100) / 100;
            let SecondX = Math.round((h + a) * 100) / 100;

            let SecondY = Math.round(k * 100) / 100;

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            for (let copies = 0; copies < 10; copies++, SecondX -= 0.001, SecondY -= 0.001, FirstX -= 0.001, FirstY -= 0.001) {

                curveAnimation(10, FirstX, FirstY, SecondX, SecondY, 1, 1, 4, 0.6);
            }
        } else if (i == number - 1) {
            let x = h + (a * Math.cos(0));
            let y = k;
            let FirstX = vertices[4];
            let FirstY = vertices[5]
            let SecondX = Math.round((h + a) * 100) / 100;
            let SecondY = Math.round(k * 100) / 100;
            let updatedPositions = new Float32Array([h, k, vertices[4], vertices[5], Math.round((h + a) * 100) / 100, Math.round(k * 100) / 100]);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            for (let copies = 0; copies < 10; copies++, SecondX -= 0.001, SecondY += 0.001, FirstX -= 0.001, FirstY += 0.001) {

                curveAnimation(10, FirstX, FirstY, SecondX, SecondY, 1, 1, 1, 0.6);
            }

        } else {
            let temp1 = vertices[4];
            let temp2 = vertices[5];
            let x = h + (a * Math.cos(angle));
            let y = k + (b * Math.sin(angle));
            const updatedPositions = new Float32Array(
                [Math.round(h * 100) / 100, Math.round(k * 100) / 100,
                Math.round(temp1 * 100) / 100, Math.round(temp2 * 100) / 100,
                Math.round(x * 100) / 100, Math.round(y * 100) / 100]);

            vertices = updatedPositions;
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, updatedPositions);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            let FirstX = Math.round(temp1 * 100) / 100;
            let FirstY = Math.round(temp2 * 100) / 100;
            let SecondX = Math.round((x) * 100) / 100;
            let SecondY = Math.round(y * 100) / 100;
            if ((0 <= angle) && (angle <= (90 * Math.PI / 180))) {
                for (let copies = 0; copies < 10; copies++, SecondX -= 0.001, SecondY -= 0.001, FirstX -= 0.001, FirstY -= 0.001) {
                    curveAnimation(10, SecondX, SecondY, FirstX, FirstY, 1, 1, 4, 0.8);
                }
            }
            else if (((90 * Math.PI / 180) <= angle) && (angle <= (180 * Math.PI / 180))) {
                for (let copies = 0; copies < 10; copies++, SecondX += 0.001, SecondY -= 0.001, FirstX += 0.001, FirstY -= 0.001) {

                    curveAnimation(10, FirstX, FirstY, SecondX, SecondY, 1, 1, 2, 0.8);
                }
            }
            else if (((180 * Math.PI / 180) <= angle) && (angle <= (270 * Math.PI / 180))) {
                for (let copies = 0; copies < 10; copies++, SecondX += 0.001, SecondY += 0.001, FirstX += 0.001, FirstY += 0.001) {

                    curveAnimation(10, SecondX, SecondY, FirstX, FirstY, 1, 1, 3, 0.8);
                }
            }
            else if (((270 * Math.PI / 180) <= angle) && (angle <= (360 * Math.PI / 180))) {
                for (let copies = 0; copies < 10; copies++, SecondX -= 0.001, SecondY += 0.001, FirstX -= 0.001, FirstY += 0.001) {

                    curveAnimation(10, FirstX, FirstY, SecondX, SecondY, 1, 1, 1, 0.8);
                }
            }

        }
        angle += (360 / number) * (Math.PI / 180);
    }


}
// curve drawing function ** y=
function curveLineSegment(k1, k2, startX, startY, EndX, EndY, shrIStrX, shrIStrY, curveType, lineCountOffset, shrinkCruve) {
    let y, x, m1, m2;
    if (curveType == 1) {

        //type 1 curve
        m1 = ((k1) - 1) / (k1);
        m2 = ((k2) - 1) / (k2);
        x = ((((m1 - m2) * shrIStrX * startX) + ((m1 - m2) * lineCountOffset) - k1 + k2) / ((m1 - m2) * shrIStrX));
        y = shrIStrY * ((m1 * ((shrIStrX * ((-x) + startX)) + lineCountOffset)) + 1 - k1) + startY;
        if (shrinkCruve > 0) {
            let newVertx = curveShrink(x, y, startX, startY, EndX, EndY, shrinkCruve, curveType);
            vertex = [newVertx[0], newVertx[1]];

        }
        else {
            vertex = [x, y];
        }





    }
    else if (curveType == 2) {
        //type 2 curve
        m1 = (-k1 + 1) / (k1);
        m2 = (-k2 + 1) / (k2);
        x = (((m2 - m1) * (shrIStrX) * (startX)) + ((m1 - m2) * lineCountOffset) + k1 - k2) / ((m2 - m1) * shrIStrX);
        y = shrIStrY * ((m1 * ((shrIStrX * (x - startX)) + lineCountOffset)) - 1 + k1) + startY;
        if (shrinkCruve > 0) {
            let newVertx = curveShrink(x, y, startX, startY, EndX, EndY, shrinkCruve, curveType);
            vertex = [newVertx[0], newVertx[1]];

        }
        else {
            vertex = [x, y];
        }



    }
    else if (curveType == 3) {
        //type 3 curve
        m1 = ((k1) - 1) / (k1);
        m2 = ((k2) - 1) / (k2);
        x = ((((m1 - m2) * lineCountOffset) - ((m1 - m2) * (shrIStrX) * startX) - k1 + k2) / ((m2 - m1) * shrIStrX));
        y = shrIStrY * (((m1) * ((shrIStrX * (x - startX)) + lineCountOffset)) + 1 - k1) + startY;
        if (shrinkCruve > 0) {
            let newVertx = curveShrink(x, y, startX, startY, EndX, EndY, shrinkCruve, curveType);
            vertex = [newVertx[0], newVertx[1]];

        }
        else {
            vertex = [x, y];
        }




    }
    else if (curveType == 4) {
        //type 4 curve
        m1 = (-k1 + 1) / (k1);
        m2 = (-k2 + 1) / (k2);
        x = (-1) * ((((m1 - m2) * lineCountOffset) + ((m1 - m2) * shrIStrX * startX) + k1 - k2) / ((m2 - m1) * shrIStrX));
        y = shrIStrY * ((m1 * ((shrIStrX * ((-1 * x) + startX)) + lineCountOffset)) - 1 + k1) + startY;
        if (shrinkCruve > 0) {
            let newVertx = curveShrink(x, y, startX, startY, EndX, EndY, shrinkCruve, curveType);
            vertex = [newVertx[0], newVertx[1]];
        }
        else {
            vertex = [x, y];
        }


    }

}




function CurveSeriesPointsDrawing(startX, startY, EndX, EndY, shrIStrX, shrIStrY, lineCountOffset, lineCount, shiftMoreX, shiftMoreY, curveType, shrinkCruve) {

    let k1, k2;


    for (let n = lineCount; n > 1; n--) {
        // console.log(n);
        if (n == lineCount) {
            curvePoints[0] = startX;
            curvePoints[1] = startY;
        }

        else {
            k1 = n / lineCount;
            k2 = (n - 1) / lineCount;

            curveLineSegment(k1, k2, startX, startY, EndX, EndY, shrIStrX, shrIStrY, curveType, lineCountOffset, shrinkCruve);

            curvePoints[2] = vertex[0];
            curvePoints[3] = vertex[1];

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, curvePoints);
            gl.lineWidth(3.0);
            gl.drawArrays(gl.LINE_STRIP, 0, 2);
            curvePoints[0] = curvePoints[2];
            curvePoints[1] = curvePoints[3];
        }

    }




}
function shiftNumbers(startX, startY, EndX, EndY, k1, k2, m1, m2, lineCountOffset, lineCount, curveType) {

    let shrinkX, shrinkY;
    let arrayNumbers = new Array(2);

    if (curveType == 1) {
        shrinkX = (((m1 - m2) * (lineCountOffset)) - k1 + k2) / (((m1 - m2) * EndX) + ((m2 - m1) * startX));
        arrayNumbers[0] = shrinkX;
        shrinkY = (EndY - startY) / ((m1 * ((shrinkX * (startX - EndX)) + lineCountOffset)) + 1 - k1);
        arrayNumbers[1] = shrinkY;
    }
    else if (curveType == 2) {
        shrinkX = (((m1 - m2) * (lineCountOffset)) + k1 - k2) / ((((m2 - m1) * (EndX)) + ((m1 - m2) * startX)));
        arrayNumbers[0] = shrinkX;
        shrinkY = (EndY - startY) / ((m1 * ((shrinkX * (EndX - startX)) + lineCountOffset)) - 1 + k1);
        arrayNumbers[1] = shrinkY;

    }
    else if (curveType == 3) {
        shrinkX = (((m1 - m2) * (lineCountOffset)) - k1 + k2) / (((m2 - m1) * EndX) + ((m1 - m2) * startX));
        arrayNumbers[0] = shrinkX;
        shrinkY = (EndY - startY) / ((m1 * ((shrinkX * (EndX - startX)) + lineCountOffset)) + 1 - k1);
        arrayNumbers[1] = shrinkY;
    }
    else if (curveType == 4) {
        shrinkX = (((m1 - m2) * (lineCountOffset)) + k1 - k2) / (((m1 - m2) * EndX) + ((m2 - m1) * startX));
        arrayNumbers[0] = shrinkX;
        shrinkY = (EndY - startY) / ((m1 * ((shrinkX * (startX - EndX)) + lineCountOffset)) - 1 + k1);
        arrayNumbers[1] = shrinkY;
    }

    return arrayNumbers;
}
//curve shrink function 
function curveShrink(curveX, curveY, startX, startY, EndX, EndY, shrinkAmount, curveType) {

    //First line is y-curveY =m1(x-curveX)
    //Second line is y-StartY = m2(x-startX)

    let newX, newY, m2, m1, x, y, deltaX, deltaY;
    if (curveType == 1) {
        m2 = (EndY - startY) / (EndX - startX);
        m1 = -1;
        x = ((m2 * startX) - (m1 * curveX) + curveY - startY) / (m2 - m1);
        y = m2 * (x - startX) + startY;
        deltaX = Math.abs(x - curveX);
        deltaY = Math.abs(y - curveY);
        newX = curveX - (deltaX * shrinkAmount);
        newY = curveY + (deltaY * shrinkAmount);

    }
    else if (curveType == 2) {
        m2 = (EndY - startY) / (EndX - startX)
        m1 = -1;
        x = ((m2 * startX) - (m1 * curveX) + curveY - startY) / (m2 - m1);
        y = m2 * (x - startX) + startY;
        deltaX = Math.abs(x - curveX);
        deltaY = Math.abs(y - curveY);
        newX = curveX + (deltaX * shrinkAmount);
        newY = curveY - (deltaY * shrinkAmount);

    }
    else if (curveType == 3) {
        m2 = (EndY - startY) / (EndX - startX);
        m1 = 1;
        x = ((m2 * startX) - (m1 * curveX) + curveY - startY) / (m2 - m1);
        y = m2 * (x - startX) + startY;
        deltaX = Math.abs(x - curveX);
        deltaY = Math.abs(y - curveY);
        newX = curveX + (deltaX * shrinkAmount);
        newY = curveY + (deltaY * shrinkAmount);
    }
    else if (curveType == 4) {
        m2 = (EndY - startY) / (EndX - startX);
        m1 = 1;
        x = ((m2 * startX) - (m1 * curveX) + curveY - startY) / (m2 - m1);
        y = m2 * (x - startX) + startY;
        deltaX = Math.abs(x - curveX);
        deltaY = Math.abs(y - curveY);
        newX = curveX - (deltaX * shrinkAmount);
        newY = curveY - (deltaY * shrinkAmount)
    }
    return [newX, newY];
}




export { curveAnimation, lineAnimation, circleAnimation, elipseAnimation, triangleAnimation, rectangleAnimation };