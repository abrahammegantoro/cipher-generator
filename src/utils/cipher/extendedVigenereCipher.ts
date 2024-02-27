function encryptExtendedVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    const encryptedChar = (charCode + keyChar) % 256;
    result += String.fromCharCode(encryptedChar);
  }
  console.log(result[0], result.charCodeAt(0));
  return result;
}

function decryptExtendedVigenereCipher(message: string, key: string) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);

    const decryptedChar = (256 + charCode - keyChar) % 256;
    result += String.fromCharCode(decryptedChar);
  }
  return result;
}

function encryptExtendedVigenerecipherUint8Array(
  uint8Array: Uint8Array,
  key: string
): Uint8Array {
  const cipheredArray = new Uint8Array(uint8Array.length);
  console.log(key)
  for (let i = 0; i < uint8Array.length; i++) {
    const k = key[i % key.length].charCodeAt(0);
    cipheredArray[i] = (uint8Array[i] + k) % 256;
  }
  return cipheredArray;
}

function decryptExtendedVigenerecipherUint8Array(
  uint8Array: Uint8Array,
  key: string
): Uint8Array {
  const decryptedArray = new Uint8Array(uint8Array.length);
  for (let i = 0; i < uint8Array.length; i++) {
    const k = key[i % key.length].charCodeAt(0);
    decryptedArray[i] = (uint8Array[i] - k) % 256;
  }

  return decryptedArray;
}

export {
  encryptExtendedVigenereCipher,
  decryptExtendedVigenereCipher,
  encryptExtendedVigenerecipherUint8Array,
  decryptExtendedVigenerecipherUint8Array,
};
