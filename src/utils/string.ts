function removeNonAplhabet(input: string) {
  return input.replace(/[^a-zA-Z]/g, "");
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

export { removeNonAplhabet, removeDuplicates, replaceChar };
