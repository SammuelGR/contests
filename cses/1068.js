const readline = require("readline");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

r.on("line", function (line) {
  const value = line.trim();
  console.log(...main(parseInt(value)));
});

function main(input) {
  const values = [input];
  let currentValue = input;

  while (currentValue !== 1) {
    if (currentValue % 2 === 0) {
      currentValue /= 2;
    } else {
      currentValue = currentValue * 3 + 1;
    }
    values.push(currentValue);
  }

  return values;
}
