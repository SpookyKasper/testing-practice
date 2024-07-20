export default function analyzeArray(array) {
  const length = array.length;
  if (length === 0) {
    throw new Error("Array must contain at least one value");
  }
  const summedArray = array.reduce((acc, curr) => acc + curr);
  const sortedArray = array.sort((a, b) => a - b);

  const average = summedArray / length;
  const min = sortedArray[0];
  const max = sortedArray.slice(-1)[0];
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
