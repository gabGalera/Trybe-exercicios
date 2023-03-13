"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getCircleArea = exports.getTrapezeArea = exports.getRhombusArea = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function getRhombusArea(BiggerDiagonal, SmallerDiagonal) {
    return BiggerDiagonal * SmallerDiagonal / 2;
}
exports.getRhombusArea = getRhombusArea;
function getTrapezeArea(BiggerBase, SmallerBase, height) {
    return ((BiggerBase + SmallerBase) * height) / 2;
}
exports.getTrapezeArea = getTrapezeArea;
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}
exports.getCircleArea = getCircleArea;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
;
