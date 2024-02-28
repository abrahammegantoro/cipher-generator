import {
  bigram,
  removeChar,
  removeDuplicates,
  removeNonAplhabet,
  replaceChar,
} from "../string";

function generateKeySquare(key: string) {
  key = removeNonAplhabet(key);
  key = removeChar(key, "j");
  key = removeDuplicates(key);

  const alphabet = "abcdefghiklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (key.indexOf(alphabet[i]) === -1) {
      key += alphabet[i];
    }
  }

  return key;
}

function generateMessage(message: string) {
  message = removeNonAplhabet(message);
  message = replaceChar(message, "j", "i");
  return bigram(message);
}

function encryptPlayfairCipher(message: string, key: string) {
  if (key.length === 0) return message;

  key = generateKeySquare(key);
  const finalMessage = generateMessage(message);
  let result = "";

  for (let i = 0; i < finalMessage.length; i++) {
    const firstChar = finalMessage[i].charAt(0);
    const secondChar = finalMessage[i].charAt(1);

    const firstCharRow = Math.floor(key.indexOf(firstChar) / 5);
    const firstCharCol = key.indexOf(firstChar) % 5;
    const secondCharRow = Math.floor(key.indexOf(secondChar) / 5);
    const secondCharCol = key.indexOf(secondChar) % 5;

    if (firstCharRow === secondCharRow) {
      result += key.charAt(firstCharRow * 5 + ((firstCharCol + 1) % 5));
      result += key.charAt(secondCharRow * 5 + ((secondCharCol + 1) % 5));
    } else if (firstCharCol === secondCharCol) {
      result += key.charAt(((firstCharRow + 1) % 5) * 5 + firstCharCol);
      result += key.charAt(((secondCharRow + 1) % 5) * 5 + secondCharCol);
    } else {
      result += key.charAt(firstCharRow * 5 + secondCharCol);
      result += key.charAt(secondCharRow * 5 + firstCharCol);
    }
  }

  return result;
}

function decryptPlayfairCypher(message: string, key: string) {
  if (key.length === 0) return message;

  key = generateKeySquare(key);
  const finalMessage = bigram(message);
  let result = "";

  for (let i = 0; i < finalMessage.length; i++) {
    const firstChar = finalMessage[i].charAt(0);
    const secondChar = finalMessage[i].charAt(1);

    const firstCharRow = Math.floor(key.indexOf(firstChar) / 5);
    const firstCharCol = key.indexOf(firstChar) % 5;
    const secondCharRow = Math.floor(key.indexOf(secondChar) / 5);
    const secondCharCol = key.indexOf(secondChar) % 5;

    if (firstCharRow === secondCharRow) {
      result += key.charAt(firstCharRow * 5 + ((firstCharCol - 1) % 5));
      result += key.charAt(secondCharRow * 5 + ((secondCharCol - 1) % 5));
    } else if (firstCharCol === secondCharCol) {
      result += key.charAt(((firstCharRow - 1) % 5) * 5 + firstCharCol);
      result += key.charAt(((secondCharRow - 1) % 5) * 5 + secondCharCol);
    } else {
      result += key.charAt(firstCharRow * 5 + secondCharCol);
      result += key.charAt(secondCharRow * 5 + firstCharCol);
    }
  }

  return result;
}

export { encryptPlayfairCipher, decryptPlayfairCypher };
