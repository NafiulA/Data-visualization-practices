import * as d3 from "https://cdn.skypack.dev/d3@7";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svg
    .append('g')
    .selectAll('rect')
    .data(d3.range(height))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', width)
    .attr('height', 10)
    .attr('mask', 'url(#mask-1)');

svg
    .append('g')
    .selectAll('rect')
    .data(d3.range(width))
    .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#mask-2)');

//or we can use class selections

const renderMask = (id, inverted) => {
    const mask = svg.append('mask').attr('id', id);

    mask
        .append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', inverted ? 'white' : 'black');

    mask
        .selectAll('g')
        .data(d3.range(d3.symbols.length))
        .join((enter) =>
            enter
                .append('g')
                .attr(
                    'transform',
                    (d) =>
                        `translate(${d * 125 + 100},${height / 2})`
                )
                .append('path')
                .attr('d', (d) =>
                    d3.symbol(d3.symbols[d], 9000)()
                )
                .attr(
                    'fill',
                    inverted ? 'black' : 'white'
                )
        );

    // mask
    //   .append('g')
    //   .attr(
    //     'transform',
    //     `translate(${width / 2},${height / 2})`
    //   )
    //   .append('path')
    //   .attr('d', symbol(symbols[1], 100000))
    //   .attr('fill', inverted?'black':'white');
};

renderMask('mask-1', false);
renderMask('mask-2', true);

// const mask = svg
//   .append('mask')
//   .attr('id', 'mask-1');

// mask
//   .append('rect')
//   .attr('width', width)
//   .attr('height', height)
//   .attr('fill', 'black');

// mask
//   .append('g')
//   .attr(
//     'transform',
//     `translate(${width / 2},${height / 2})`
//   )
//   .append('path')
//   .attr('d', symbol(symbols[1], 100000))
//   .attr('fill', 'white');

// const mask2 = svg
//   .append('mask')
//   .attr('id', 'mask-2');

// mask2
//   .append('rect')
//   .attr('width', width)
//   .attr('height', height)
//   .attr('fill', 'white');

// mask2
//   .append('g')
//   .attr(
//     'transform',
//     `translate(${width / 2},${height / 2})`
//   )
//   .append('path')
//   .attr('d', symbol(symbols[1], 100000))
//   .attr('fill', 'black');
