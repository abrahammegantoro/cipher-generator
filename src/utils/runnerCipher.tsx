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
  text: string | Uint8Array,
  key: string,
  affineM: number,
  affineB: number,
  column: number
) => {
  if (type === "vigenere") {
    return encryptVigenereCipher(text as string, key);
  } else if (type === "extendedvigenere") {
    return encryptExtendedVigenereCipher(text as Uint8Array, key);
  } else if (type === "autokey") {
    return encryptAutoKeyVigenereCipher(text as string, key);
  } else if (type === "affine") {
    return encodeAffine(text as string, affineM, affineB);
  } else if (type === "playfair") {
    return encryptPlayfairCipher(text as string, key);
  } else if (type === "product") {
    return encryptProductCipher(text as string, key, column);
  }
};

const decryptText = (
  type: string,
  text: string | Uint8Array,
  key: string,
  affineM: number,
  affineB: number,
  column: number
) => {
  if (type === "vigenere") {
    return decryptVigenereCipher(text as string, key);
  } else if (type === "extendedvigenere") {
    return decryptExtendedVigenereCipher(text, key);
  } else if (type === "autokey") {
    return decryptAutoKeyVigenereCipher(text as string, key);
  } else if (type === "affine") {
    return decodeAffine(text as string, affineM, affineB);
  } else if (type === "playfair") {
    return decryptPlayfairCypher(text as string, key);
  } else if (type === "product") {
    return decryptProductCipher(text as string, key, column);
  }
};

export { encryptText, decryptText };
