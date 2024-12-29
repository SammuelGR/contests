var input = require("fs").readFileSync("./input/stdin", "utf8");
var lines = input.split("\n");

const a = parseFloat(lines.shift()) * 3.5;
const b = parseFloat(lines.shift()) * 7.5;

const result = (a + b) / 11;

console.log(`MEDIA = ${result.toFixed(5)}`);
