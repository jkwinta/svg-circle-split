import { SVG_NAMESPACE } from './svg.js';

// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

function pointOnCircle(size, angle) {
    const radius = size / 2;
    const x = Math.sin(angle) * radius + radius;
    const y = Math.cos(angle) * radius + radius;
    return `${x} ${y}`;
}

function wedgePathD(size, startAngle, stopAngle) {
    const radius = size / 2;
    const centre = `${radius} ${radius}`;
    const startPoint = pointOnCircle(size, startAngle);
    const stopPoint = pointOnCircle(size, stopAngle);
    // M: move to
    // L: line to 
    // Z: close path
    // A/a: arc
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    // a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
    let result = [
        'M', centre,
        'L', startPoint,
        'A', radius, radius, 0, 0, 0, stopPoint,
        'Z',
    ];
    return result.join(' ');
}

function wedge(size, colour, startAngle, stopAngle) {
    const result = document.createElementNS(SVG_NAMESPACE, 'path');
    result.setAttribute('d', wedgePathD(size, startAngle, stopAngle));
    result.setAttribute('fill', colour);
    return result;
}

function evenPie(size, colours) {
    return pie(size, colours, colours.map(() => 1));
}

function pie(size, colours, weights) {
    const totalWeight = weights.reduce((x, y) => x + y);
    const radians = weights.map(w => w * 2 * Math.PI / totalWeight);
    // 0 is at 6 o'clock/due south, and positive value is counter-clockwise
    // I want to start at the top left (end at 12-noon/due north), and proceed clockwise
    let start = Math.PI;
    let stop = Math.PI + radians[0];
    let result = [];
    for (let i = 0; i < colours.length; i++) {
        result.push(wedge(size, colours[i], start, stop));
        stop = start;
        start -= radians[i + 1];
    }
    return result;
}


export function addPie(svg, colours) {
    // TODO: fails for 1 colour
    const size = svg.width.baseVal.value;
    const wedges = evenPie(size, colours);
    for (let wedge of wedges) {
        svg.appendChild(wedge);
    }
}