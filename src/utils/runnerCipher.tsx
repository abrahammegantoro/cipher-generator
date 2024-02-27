import { decodeAffine, encodeAffine } from "./cipher/affineCipher";
import {
  decryptAutoKeyVigenereCipher,
  encryptAutoKeyVigenereCipher,
} from "./cipher/autoKeyVigenereCipher";
import {
  decryptExtendedVigenereCipher,
  encryptExtendedVigenereCipher,
} from "./cipher/extendedVigenereCipher";
import {
  decryptPlayfairCypher,
  encryptPlayfairCipher,
} from "./cipher/playfairCipher";
import {
  decryptProductCipher,
  encryptProductCipher,
} from "./cipher/productCipher";
import {
  decryptVigenereCipher,
  encryptVigenereCipher,
} from "./cipher/vigenereCipher";

const encryptText = (
  type: string,
  text: string,
  key: string,
  affineM: number,
  affineB: number,
  column: number
) => {
  if (type === "vigenere") {
    return encryptVigenereCipher(text, key);
  } else if (type === "extendedvigenere") {
    return encryptExtendedVigenereCipher(text, key);
  } else if (type === "autokey") {
    return encryptAutoKeyVigenereCipher(text, key);
  } else if (type === "affine") {
    return encodeAffine(text, affineM, affineB);
  } else if (type === "playfair") {
    return encryptPlayfairCipher(text, key);
  } else if (type === "product") {
    return encryptProductCipher(text, key, column);
  }
};

const decryptText = (
  type: string,
  text: string,
  key: string,
  affineM: number,
  affineB: number,
  column: number
) => {
  if (type === "vigenere") {
    return decryptVigenereCipher(text, key);
  } else if (type === "extendedvigenere") {
    return decryptExtendedVigenereCipher(text, key);
  } else if (type === "autokey") {
    return decryptAutoKeyVigenereCipher(text, key);
  } else if (type === "affine") {
    return decodeAffine(text, affineM, affineB);
  } else if (type === "playfair") {
    return decryptPlayfairCypher(text, key);
  } else if (type === "product") {
    return decryptProductCipher(text, key, column);
  }
};

export { encryptText, decryptText };
