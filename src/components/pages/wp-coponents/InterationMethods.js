import { set } from "nerdamer";
import { useState } from "react";
let width, setWidth, height, setHeight;
let isDragging, setIsDragging;
function SetState() {
    [height, setHeight] = useState(260);
    [width, setWidth] = useState(250);
    [isDragging, setIsDragging] = useState(false);
}

function handleMouseUp() {
    setIsDragging(false);
}
function handleMouseMove(e) {

    if (!isDragging) return;

    // limit width so it doesn't break layout
    const newWidth = Math.max(150, Math.min(600, e.clientX));
    setWidth(newWidth);
    const newHeight = Math.max(150, Math.min(600, e.clientY));
    setHeight(newHeight);
}
function handleMouseDown(e) {
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
}
function handleMouseRight(e) {
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);

}
export { SetState, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseRight, width, isDragging, height };