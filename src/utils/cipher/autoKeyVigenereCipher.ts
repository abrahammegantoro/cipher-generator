import { encryptVigenereCipher } from "./vigenereCipher";

function encryptAutoKeyVigenereCipher(message: string, key: string) {
  if (key.length < message.length) {
    let j = 0;
    for (let i = key.length; i < message.length; i++) {
      key += message[j];
      j++;
    }
  }

  const result = encryptVigenereCipher(message, key);
  return result;
}

function decryptAutoKeyVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    const decryptedChar = String.fromCharCode(((26 + charCode - keyChar) % 26) + 97);
    
    result += decryptedChar;
    key += decryptedChar;
  }

  return result;
}

export { encryptAutoKeyVigenereCipher, decryptAutoKeyVigenereCipher };
