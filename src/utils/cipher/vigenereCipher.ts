import { removeNonAplhabet, isUpperCase } from "../string";

function encryptVigenereCipher(message: string, key: string) {
  message = removeNonAplhabet(message);
  if (key.length === 0) return message;
  
  key = removeNonAplhabet(key);
  
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    if (isUpperCase(message[i]) && isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((charCode - 65 + keyChar - 65) % 26) + 65);
    } else if (!isUpperCase(message[i]) && !isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((charCode - 97 + keyChar - 97) % 26) + 97);
    } else if (isUpperCase(message[i]) && !isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((charCode - 65 + keyChar - 97) % 26) + 65);
    } else {
      result += String.fromCharCode(((charCode - 97 + keyChar - 65) % 26) + 97);
    }
  }
  return result;
}

function decryptVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    if (isUpperCase(message[i]) && isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((26 + charCode - keyChar) % 26) + 65);
    } else if (!isUpperCase(message[i]) && !isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((26 + charCode - keyChar) % 26) + 97);
    } else if (isUpperCase(message[i]) && !isUpperCase(key[i % key.length])) {
      result += String.fromCharCode(((26 + charCode - keyChar + 32) % 26) + 65);
    } else {
      result += String.fromCharCode(((26 + charCode - keyChar - 32) % 26) + 97);
    }
  }
  return result;
}

export { encryptVigenereCipher, decryptVigenereCipher };
