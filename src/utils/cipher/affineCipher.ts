import { removeNonAplhabet } from "../string";

export function encodeAffine(text: string, a: number, b: number) {
  text = removeNonAplhabet(text);
  
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((a * (charCode - 65) + b) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((a * (charCode - 97) + b) % 26) + 97);
    } else {
      result += text[i];
    }
  }
  return result;
}

function modInverse(a: number, m: number) {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) {
      return i;
    }
  }
  return 1;
}

export function decodeAffine(text: string, a: number, b: number) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(
        ((modInverse(a, 26) * (charCode - 65 - b + 26)) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(
        ((modInverse(a, 26) * (charCode - 97 - b + 26)) % 26) + 97
      );
    } else {
      result += text[i];
    }
  }
  return result;
}
