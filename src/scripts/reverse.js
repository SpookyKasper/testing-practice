export default function reverse(string) {
  const splitedString = string.split("");
  const reversedArray = splitedString.reverse();
  const reversedString = reversedArray.join("");
  return reversedString;
}
