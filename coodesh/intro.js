function sumOfMinimums(array) {
  const minimumValues = array.map((chunk) => {
    const minimumValue = chunk.sort((a, b) => a - b);

    return minimumValue[0];
  });

  let sum = 0;
  minimumValues.forEach((chunk) => (sum += chunk));
  return sum;
}

const subjectValues = [
  [5, 4, 2, 9],
  [7, 9, 15],
  [6, 9, 11, 17],
];

console.log(sumOfMinimums(subjectValues));
