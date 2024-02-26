function encryptExtendedVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    const encryptedChar = (charCode + keyChar) % 256;
    result += String.fromCharCode(encryptedChar);
  }
  return result;
}

function decryptExtendedVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);
    
    const decryptedChar = ((256 + charCode - keyChar) % 256);
    result += String.fromCharCode(decryptedChar);
  }
  return result;
}

export { encryptExtendedVigenereCipher, decryptExtendedVigenereCipher };
