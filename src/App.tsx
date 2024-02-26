import { useState } from "react";
import "./App.css";
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

function App() {
  const [text, setText] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [textAffine, setTextAffine] = useState("");
  const [resultAffine, setResultAffine] = useState("Enter your text first!");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <p>Encrypted: {decryptAutoKeyVigenereCipher(text, "indo")}</p>

      <div>
        <h1>Affine Cipher</h1>
        <div className="flex gap-8 items-center">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <h3>a: </h3>
              <input
                type="number"
                className="border border-gray-400 p-2 rounded-lg"
                placeholder="Enter a"
                onChange={(e) => {
                  setA(parseInt(e.target.value));
                }}
              />
            </div>

            <div className="flex gap-6 items-center">
              <h3>b: </h3>
              <input
                type="number"
                className="border border-gray-400 p-2 rounded-lg"
                placeholder="Enter b"
                onChange={(e) => {
                  setB(parseInt(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-6 items-center">
              <h3>Enter your text: </h3>
              <input
                type="text"
                className="border border-gray-400 p-2 rounded-lg"
                placeholder="Enter your text"
                onChange={(e) => {
                  setTextAffine(e.target.value);
                }}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setResultAffine(encodeAffine(textAffine, a, b));
                }}
              >
                <h3>Encode</h3>
              </button>

              <button
                onClick={() => {
                  setResultAffine(decodeAffine(textAffine, a, b));
                }}
              >
                <h3>Decode</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3>Result: {resultAffine}</h3>
    </div>
  );
}

export default App;
