function encryptTransposeCipher(plainText: string, key: number): string {
  const numRows = Math.ceil(plainText.length / key);
  const matrix: string[][] = [];

  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }

  let index = 0;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < key; j++) {
      if (index < plainText.length) {
        matrix[i][j] = plainText[index++];
      } else {
        const asciiValue = ((index - plainText.length) % 26) + 97;
        matrix[i][j] = String.fromCharCode(asciiValue);
      }
    }
  }

  let cipherText = "";
  for (let i = 0; i < key; i++) {
    for (let j = 0; j < numRows; j++) {
      cipherText += matrix[j][i];
    }
  }

  return cipherText;
}

function decryptTransposeCipher(cipherText: string, key: number): string {
  return encryptTransposeCipher(cipherText, Math.ceil(cipherText.length / key));
}

export { encryptTransposeCipher, decryptTransposeCipher };
