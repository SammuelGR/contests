var input = require("fs").readFileSync("./input/stdin", "utf8");
var lines = input.split("\n");

const a = parseFloat(lines.shift()) * 2;
const b = parseFloat(lines.shift()) * 3;
const c = parseFloat(lines.shift()) * 5;

const result = (a + b + c) / 10;

console.log(`MEDIA = ${result.toFixed(1)}`);
