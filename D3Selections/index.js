import * as d3 from "https://cdn.skypack.dev/d3@7";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

let t = 0;
setInterval(() => {
    const data = d3.range(20).map(d => ({
        x: d * 40 + 100,
        y: height / 2 + Math.sin(d * 0.5 + t) * 120,
        r: 50
    }));

    const circle = svg
        .selectAll('circle')
        .data(data);

    circle.enter()
        .append('circle')
        .attr('r', (d) => d.r);

    circle.attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('fill', `rgb(${Math.random() * t},${Math.random() * t},${Math.random() * t})`);

    t += 0.5;
}, 1000 / 60);
