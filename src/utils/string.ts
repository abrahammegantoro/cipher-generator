function removeNonAplhabet(input: string) {
  return input.replace(/[^a-zA-Z]/g, "");
}

function removeChar(input: string, char: string) {
  return input.split("").filter((item) => item !== char).join("");
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
        temp += "x";
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
    temp += "x";
    result.push(temp);
  }

  return result;
}

export { removeNonAplhabet, removeChar, removeDuplicates, replaceChar, bigram };
