import { useState } from "react";
let width, setWidth, height, setHeight;
let isDragging, setIsDragging;
let isClicked, setIsClicked;
let isDropped, setIsDropped;
function SetState() {
    [height, setHeight] = useState(260);
    [width, setWidth] = useState(250);
    [isDragging, setIsDragging] = useState(false);
    [isClicked, setIsClicked] = useState(false);
    [isDropped, setIsDropped] = useState(false);

}
function handleMouseEnter() {
    setIsDropped(true);
}
function handleMouseLeave() {
    setIsDropped(false);
}
function handleClick() {
    setIsClicked(false);
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

export { SetState, handleClick, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseRight, handleMouseEnter, handleMouseLeave, width, isDragging, height, isDropped, setIsDropped, isClicked, setIsClicked };