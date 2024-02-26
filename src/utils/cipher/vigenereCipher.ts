function encryptVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    const encryptedChar = (charCode + keyChar - 2 * 97) % 26 + 97;
    result += String.fromCharCode(encryptedChar);
  }
  return result;
}

function decryptVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);
    
    const decryptedChar = (26 + charCode - keyChar) % 26 + 97;
    result += String.fromCharCode(decryptedChar);
  }
  return result;
}

export { encryptVigenereCipher, decryptVigenereCipher };