function removeNonAplhabet(input: string) {
  return input.replace(/[^a-zA-Z]/g, "");
}

function removeNonAlphabetExceptSpace(input: string) {
  return input.replace(/[^a-zA-Z\s]/g, "");
}

function removeChar(input: string, char: string) {
  return input
    .split("")
    .filter((item) => item !== char)
    .join("");
}

function isUpperCase(char: string | undefined) {
  return char && char === char.toUpperCase();
}

function isLowerCase(char: string) {
  return char === char.toLowerCase();
}

function isAlphabetic(char: string) {
  return char.match(/[a-z]/i);
}

function removeDuplicates(input: string) {
  return input
    .split("")
    .filter((item, index, array) => array.indexOf(item) === index)
    .join("");
}

function replaceChar(input: string, char: string, newChar: string) {
  return input
    .split("")
    .map((item) => (item === char ? newChar : item))
    .join("");
}

function bigram(input: string) {
  let position = 0;
  let temp = "";
  const result = [];

  while (position < input.length) {
    if (temp.length == 0) {
      temp += input.charAt(position);
    } else if (temp.length == 1) {
      if (temp.charAt(0) == input.charAt(position)) {
        if (temp.charAt(0) === "x") {
          temp += "z";
        } else {
          temp += "x";
        }
        result.push(temp);
        temp = "";
        position--;
      } else {
        temp += input.charAt(position);
        result.push(temp);
        temp = "";
      }
    }
    position++;
  }

  if (temp.length == 1) {
    if (temp.charAt(0) === "x") {
      temp += "z";
    } else {
      temp += "x";
    }
    result.push(temp);
  }

  return result;
}

function uint8ArrayToAscii(uint8Array: Uint8Array) {
  let result = "";
  for (let i = 0; i < uint8Array.length; i++) {
    result += String.fromCharCode(uint8Array[i]);
  }

  return result;
}

function uint8ArrayToString(uint8Array: Uint8Array): string {
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder().decode(uint8Array);
  }

  let result = "";
  for (let i = 0; i < uint8Array.length; i++) {
    result += String.fromCharCode(uint8Array[i]);
  }
  return result;
}

function convertArrayToAscii(cipheredArray: Uint8Array): string {
  let asciiString = "";
  for (let i = 0; i < cipheredArray.length; i++) {
    asciiString += String.fromCharCode(cipheredArray[i]);
  }
  return asciiString;
}

export {
  removeNonAplhabet,
  removeNonAlphabetExceptSpace,
  removeChar,
  removeDuplicates,
  replaceChar,
  bigram,
  isUpperCase,
  isLowerCase,
  isAlphabetic,
  uint8ArrayToAscii,
  uint8ArrayToString,
  convertArrayToAscii,
};
