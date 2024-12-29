var input = require("fs").readFileSync("./input/stdin", "utf8");
var lines = input.split("\n");

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseInt(lines.shift());
const D = parseInt(lines.shift());

const result = A * B - C * D;

console.log(`DIFERENCA = ${result}`);
