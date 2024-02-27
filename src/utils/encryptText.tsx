import { encodeAffine } from "./cipher/affineCipher";
import { encryptAutoKeyVigenereCipher } from "./cipher/autoKeyVigenereCipher";
import { encryptExtendedVigenereCipher } from "./cipher/extendedVigenereCipher";
import { encryptVigenereCipher } from "./cipher/vigenereCipher";

const encryptText = (text: string) => {
  if (type === "vigenere") {
    return encryptVigenereCipher(text, key);
  } else if (type === "extendedvigenere") {
    return encryptExtendedVigenereCipher(text, key);
  } else if (type === "autokey") {
    return encryptAutoKeyVigenereCipher(text, key);
  } else if (type === "affine") {
    return encodeAffine(text, affineM, affineB);
  } else if (type === "playfair") {
    return "Playfair Cipher";
  } else if (type === "product") {
    return encryptProductCipher(text, key, column);
  }
};
