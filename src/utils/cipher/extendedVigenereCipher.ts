function encryptExtendedVigenereCipher(
  message: string | Uint8Array,
  key: string
): string | Uint8Array {
  if (typeof message === 'string') {
    let result = '';
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);

      const encryptedChar = (charCode + keyChar) % 256;
      result += String.fromCharCode(encryptedChar);
    }
    return result;
  } else if (message instanceof Uint8Array) {
    const cipheredArray = new Uint8Array(message.length);
    for (let i = 0; i < message.length; i++) {
      const k = key.charCodeAt(i % key.length);
      cipheredArray[i] = (message[i] + k) % 256;
    }

    return cipheredArray;
  } else {
    throw new Error('Invalid message type. Message must be a string or a Uint8Array.');
  }
}

function decryptExtendedVigenereCipher(
  message: string | Uint8Array,
  key: string
): string | Uint8Array {
  if (typeof message === 'string') {
    let result = '';
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);

      const decryptedChar = (256 + charCode - keyChar) % 256;
      result += String.fromCharCode(decryptedChar);
    }
    return result;
  } else if (message instanceof Uint8Array) {
    const decryptedArray = new Uint8Array(message.length);
    for (let i = 0; i < message.length; i++) {
      const k = key.charCodeAt(i % key.length);
      decryptedArray[i] = (message[i] - k) % 256;
    }
    return decryptedArray;
  } else {
    throw new Error('Invalid message type. Message must be a string or a Uint8Array.');
  }
}

export {
  encryptExtendedVigenereCipher,
  decryptExtendedVigenereCipher,
};
