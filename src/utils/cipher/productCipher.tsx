import {
  decryptTransposeCipher,
  encryptTransposeCipher,
} from "./transposeCipher";
import { decryptVigenereCipher, encryptVigenereCipher } from "./vigenereCipher";

function encryptProductCipher(text: string, key: string): string {
  if (key.length === 0) return text;
  return encryptTransposeCipher(encryptVigenereCipher(text, key), key.length);
}

function decryptProductCipher(text: string, key: string): string {
  if (key.length === 0) return text;
  return decryptVigenereCipher(decryptTransposeCipher(text, key.length), key);
}

export { encryptProductCipher, decryptProductCipher };
