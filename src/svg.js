export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export function newSvg(size) {
    const result = document.createElementNS(SVG_NAMESPACE, 'svg');
    result.setAttribute('viewBox', `0 0 ${size} ${size}`);
    result.setAttribute('height', size);
    result.setAttribute('width', size);
    // result.setAttribute('display', 'block');
    return result
}

export function newCircle(size, colour, radiusPercentage = 1.0) {
    const radius = size / 2;
    const circle = document.createElementNS(SVG_NAMESPACE, 'circle');
    circle.setAttribute('fill', colour);
    circle.setAttribute('cx', radius);
    circle.setAttribute('cy', radius);
    circle.setAttribute('r', radius * radiusPercentage);
    return circle;
}

export function svgSize(svg) {
    return svg.width.baseVal.value;
}

export function addCircle(svg, colour, radiusPercentage = 1.0) {
    const size = svgSize(svg);
    const radius = size / 2;
    const circle = document.createElementNS(SVG_NAMESPACE, 'circle');
    circle.setAttribute('fill', colour);
    circle.setAttribute('cx', radius);
    circle.setAttribute('cy', radius);
    circle.setAttribute('r', radius * radiusPercentage);
    svg.appendChild(circle);
}
