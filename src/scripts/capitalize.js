export default function capitalize(string) {
  const firstLetter = string[0];
  const capitalizedFirstLetter = firstLetter.toUpperCase();
  const remainingString = string.slice(1);
  const capitalizedString = `${capitalizedFirstLetter}${remainingString}`;
  return capitalizedString;
}
