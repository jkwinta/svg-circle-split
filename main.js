import { newSvg, addCircle } from "./src/svg.js";
import { addPie } from "./src/pie.js";

import { addEqualRadiiCircles, addEqualAreaCircles, addAverageCircles } from './src/concentric.js';

const d = document.querySelector('div');
const COLOURS = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'orange',

    'purple',
    'teal',

    'aqua',
    'silver',
    'indigo',
    'violet',
    'brown',
    'grey',
];
for (let i = 0; i < COLOURS.length; i++) {
    for (let f of [addPie, addEqualRadiiCircles, addEqualAreaCircles, addAverageCircles]) {
        let svg = newSvg(400);
        f(svg, COLOURS.slice(0, i + 1));
        d.appendChild(svg);
    }
    // let svg = newSvg(400);
    // addPie(svg, COLOURS.slice(0, i + 1));
    // addEqualRadiiCircles(svg, COLOURS.slice(0, i + 1));
    // addEqualAreaCircles(svg, COLOURS.slice(0, i + 1));
    // addAverageCircles(svg, COLOURS.slice(0, i + 1));
    // d.appendChild(svg);
}
