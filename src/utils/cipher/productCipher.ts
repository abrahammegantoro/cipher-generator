import {
  decryptTransposeCipher,
  encryptTransposeCipher,
} from "./transposeCipher";
import { decryptVigenereCipher, encryptVigenereCipher } from "./vigenereCipher";

function encryptProductCipher(text: string, key: string, column: number): string {
  if (key.length === 0) return text;
  return encryptTransposeCipher(encryptVigenereCipher(text, key), column);
}

function decryptProductCipher(text: string, key: string, column: number): string {
  if (key.length === 0) return text;
  return decryptVigenereCipher(decryptTransposeCipher(text, column), key);
}

export { encryptProductCipher, decryptProductCipher };
