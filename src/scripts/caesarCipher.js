import _ from "lodash";

export default function caesarCipher(string, factor) {
  const splittedString = string.split("");
  const cipheredArray = splittedString.map((char) => {
    return isLetter(char) ? cipherLetter(char, factor) : char;
  });
  const joinedString = cipheredArray.join("");
  return joinedString;
}

const cipherLetter = (char, factor) => {
  const charCode = char.charCodeAt(0);
  const charCodePlusFactor = charCode + factor;
  const min = isLowerCaseLetter(charCode) ? 97 : 65;
  const max = isLowerCaseLetter(charCode) ? 122 : 90;
  const wrappedCharCode = wrapCharCode(charCodePlusFactor, min, max);
  const convertToChar = String.fromCharCode(wrappedCharCode);
  return convertToChar;
};

const wrapCharCode = (charCode, min, max) => {
  if (charCode > max) {
    charCode -= 26;
  } else if (charCode < min) {
    charCode += 26;
  }
  return charCode;
};

const isLowerCaseLetter = (charCode) => {
  const lowerCaseCharCode = _.range(97, 123);
  return lowerCaseCharCode.includes(charCode);
};

const isLetter = (char) => {
  const regex = /[a-zA-Z]/;
  return regex.test(char);
};
