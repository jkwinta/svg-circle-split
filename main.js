import { newSvg, addCircle } from "./src/svg.js";
import { addPie } from "./src/pie.js";

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
    let svg = newSvg(400);
    addPie(svg, COLOURS.slice(0, i + 1));
    d.appendChild(svg);
}
