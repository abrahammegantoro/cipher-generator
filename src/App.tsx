import { useState } from "react";
import {
  encryptVigenereCipher,
  decryptVigenereCipher,
} from "./utils/cipher/vigenereCipher";
import {
  encryptExtendedVigenereCipher,
  decryptExtendedVigenereCipher,
} from "./utils/cipher/extendedVigenereCipher";
import {
  encryptAutoKeyVigenereCipher,
  decryptAutoKeyVigenereCipher,
} from "./utils/cipher/autoKeyVigenereCipher";
import { decodeAffine, encodeAffine } from "./utils/cipher/affineCipher";
import {
  decryptProductCipher,
  encryptProductCipher,
} from "./utils/cipher/productCipher";

function App() {
  const [encrypt, setEncrypt] = useState(true);
  const [type, setType] = useState("vigenere");
  const [affineM, setAffineM] = useState(1);
  const [affineB, setAffineB] = useState(1);
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [column, setColumn] = useState(0);
  const [isFile, setIsFile] = useState(false);

  const inputSection = (type: string) => {
    if (
      type === "vigenere" ||
      type === "autokey" ||
      type === "extendedvigenere" ||
      type === "product" ||
      type === "playfair"
    ) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-around">
            <strong
              className={`cursor-pointer ${
                !isFile ? "text-blue-200" : "text-black"
              }`}
              onClick={() => {
                setIsFile(false);
              }}
            >
              {encrypt ? "Plain Text" : "Ciphertext"}
            </strong>
            <p>or</p>
            <strong
              className={`cursor-pointer ${
                isFile ? "text-blue-200" : "text-black"
              }`}
              onClick={() => {
                setIsFile(true);
              }}
            >
              File
            </strong>
          </div>
          {!isFile ? (
            <textarea
              className="border border-gray-200 min-h-48 p-4 text-base rounded-lg"
              placeholder="Enter your text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          )}

          <strong>Key</strong>
          <textarea
            className="border border-gray-200 p-4 text-base rounded-lg"
            placeholder="Enter your key here"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />

          {type === "product" && (
            <>
              <strong>Column</strong>
              <input
                type="number"
                className="border border-gray-200 p-4 text-base rounded-lg"
                placeholder="Enter your k here"
                value={column}
                onChange={(e) => setColumn(parseInt(e.target.value))}
              />
            </>
          )}
        </div>
      );
    } else if (type === "affine") {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-center">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    if (affineM <= 1) return;
                    setAffineM(affineM - 1);
                  }}
                >
                  -
                </p>
                <input
                  type="text"
                  className="border text-center border-gray-200 p-1 w-20 text-base rounded-lg"
                  placeholder=""
                  value={affineM}
                  onChange={(e) => setAffineM(parseInt(e.target.value))}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    if (affineM < 0) return;
                    setAffineM(affineM + 1);
                  }}
                >
                  +
                </p>
              </div>

              <strong>m</strong>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    if (affineB <= 0) return;
                    setAffineB(affineB - 1);
                  }}
                >
                  -
                </p>
                <input
                  type="text"
                  className="border text-center border-gray-200 p-1 w-20 text-base rounded-lg"
                  placeholder=""
                  value={affineB}
                  onChange={(e) => setAffineB(parseInt(e.target.value))}
                />
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    if (affineB < 0) return;
                    setAffineB(affineB + 1);
                  }}
                >
                  +
                </p>
              </div>
              <strong>b</strong>
            </div>
          </div>

          <div className="flex gap-2 justify-around">
            <strong
              className={`cursor-pointer ${
                !isFile ? "text-blue-200" : "text-black"
              }`}
              onClick={() => {
                setIsFile(false);
              }}
            >
              {encrypt ? "Plain Text" : "Ciphertext"}
            </strong>
            <p>or</p>
            <strong
              className={`cursor-pointer ${
                isFile ? "text-blue-200" : "text-black"
              }`}
              onClick={() => {
                setIsFile(true);
              }}
            >
              File
            </strong>
          </div>
          {!isFile ? (
            <textarea
              className="border border-gray-200 min-h-48 p-4 text-base rounded-lg"
              placeholder="Enter your text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PDF
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      );
    }
  };

  const encryptText = () => {
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

  const decryptText = () => {
    if (type === "vigenere") {
      return decryptVigenereCipher(text, key);
    } else if (type === "extendedvigenere") {
      return decryptExtendedVigenereCipher(text, key);
    } else if (type === "autokey") {
      return decryptAutoKeyVigenereCipher(text, key);
    } else if (type === "affine") {
      return decodeAffine(text, affineM, affineB);
    } else if (type === "playfair") {
      return "Playfair Cipher";
    } else if (type === "product") {
      return decryptProductCipher(text, key, column);
    }
  };

  return (
    <div className="bg-blue-200 flex flex-col gap-12 p-14 items-center justify-center min-h-screen">
      <div className="flex gap-4 text-4xl font-semibold">
        <div
          className={`cursor-pointer ${
            encrypt ? "bg-white text-blue-200" : "bg-transparent text-white"
          } p-4 rounded-lg`}
          onClick={() => setEncrypt(true)}
        >
          <h1 className="">Encryption</h1>
        </div>
        <div
          className={`cursor-pointer ${
            !encrypt ? "bg-white text-blue-200" : "bg-transparent text-white"
          } p-4 rounded-lg`}
          onClick={() => setEncrypt(false)}
        >
          <h1>Decryption</h1>
        </div>
      </div>

      <div className="flex gap-8 text-xl min-h-[28rem]">
        <div className="bg-white p-8 w-96 flex flex-col gap-4 rounded-xl">
          <select
            className="outline-none mb-6 font-bold"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="vigenere">Vigenere Cipher</option>
            <option value="extendedvigenere">Extended Vigenere Cipher</option>
            <option value="autokey">Auto Key Vigenere Cipher</option>
            <option value="affine">Affine Cipher</option>
            <option value="playfair">Playfair Cipher</option>
            <option value="product">Product Cipher</option>
          </select>

          <div className="flex flex-col gap-4">{inputSection(type)}</div>
        </div>

        <div className="bg-white p-8 w-96 flex flex-col gap-4 rounded-xl">
          <div className="">
            <strong className="text-center">
              {encrypt ? "Ciphertext" : "Plain Text"}
            </strong>
          </div>

          <textarea
            className="border border-gray-200 p-4 rounded-lg h-full"
            value={encrypt ? encryptText() : decryptText()}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
