import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;
let circles = [];
let circleId = 0;

const width = 800;
const height = 600;
const maxCircles = 10;

async function prepareVis() {
  svg = d3
    .select("#visContainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black");

  svg.on("click", addCircle);
}

function addCircle(event) {

  const [x, y] = d3.pointer(event);

  circles.push({
    id: circleId++,
    x: x,
    y: y,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });

  if (circles.length > maxCircles) {
    circles.shift();
  }

  drawCircles();
}

function drawCircles() {

  const circleSelection = svg.selectAll("circle")
    .data(circles, d => d.id);

  circleSelection
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 0)
    .attr("fill", d => d.color)
    .transition()
    .duration(300)
    .attr("r", 15);

  circleSelection
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);

  circleSelection
    .exit()
    .remove();
}

async function runApp() {
  await prepareVis();
}

runApp();