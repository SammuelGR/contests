var input = require("fs").readFileSync("./input/stdin", "utf8");
var lines = input.split("\n");

const r = parseFloat(lines.shift());

const pi = 3.14159;

const result = pi * (r * r);

console.log(`A=${result.toFixed(4)}`);
