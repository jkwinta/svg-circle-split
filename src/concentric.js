import {svgSize, newCircle} from './svg.js';

function getEqualRadii(numberOfCircles) {
    const numToOne = [];
    for (let i = numberOfCircles; i > 0; i--) {
        numToOne.push(i);
    }
    return numToOne.map(n => n / numberOfCircles);
}

function getEqualAreaRadii(numberOfCircles) {
    const numToOne = [];
    for (let i = numberOfCircles; i > 0; i--) {
        numToOne.push(i);
    }
    return numToOne.map(n => Math.sqrt(n / numberOfCircles));
}

function getAverageRadii(numberOfCircles) {
    const r1 = getEqualRadii(numberOfCircles);
    const r2 = getEqualAreaRadii(numberOfCircles);
    const result = [];
    for (let i = 0; i < r1.length; i++) {
        result[i] = (r1[i] + r2[i]) / 2;
    }
    return result;
}


function makeCircles(size, colours, radii) {
    const result = [];
    for (let i = 0; i < colours.length; i++) {
        result.push(newCircle(size, colours[i], radii[i]));
    }
    return result;
}

function circlesByRadiiGenerator(size, colours, radiiGenerator) {
    return makeCircles(size, colours, radiiGenerator(colours.length));
}

function addCircles(svg, colours, radiiGenerator) {
    const size = svgSize(svg);
    const circles = circlesByRadiiGenerator(size, colours, radiiGenerator);
    for (let circle of circles) {
        svg.appendChild(circle);
    }
}


export function addEqualRadiiCircles(svg, colours) {
    addCircles(svg, colours, getEqualRadii);
}

export function addEqualAreaCircles(svg, colours) {
    addCircles(svg, colours, getEqualAreaRadii);
}

export function addAverageCircles(svg, colours) {
    addCircles(svg, colours, getAverageRadii);
}
