const readline = require("readline");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const lines = [];

r.on("line", function (line) {
  lines.push(line);

  if (lines.length === 2) console.log(main(lines));
});

function main(input) {
  const lengthValue = parseInt(input[0]);
  const receivedValues = String(input[1])
    .split(" ")
    .map((value) => parseInt(value))
    .sort((a, b) => a - b);

  if (lengthValue === 2) return receivedValues[0] === 1 ? 2 : 1;

  for (let i = 1; i < lengthValue; i++) {
    if (i === lengthValue - 1 && receivedValues[i - 1] !== lengthValue)
      return lengthValue;
    if (receivedValues[i - 1] !== i) return i;
  }
}
