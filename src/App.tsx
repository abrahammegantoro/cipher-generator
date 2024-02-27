import { useState } from "react";
import inputSection from "./utils/InputSection";
import { decryptText, encryptText } from "./utils/runnerCipher";

function App() {
  const [encrypt, setEncrypt] = useState(true);
  const [type, setType] = useState("vigenere");
  const [affineM, setAffineM] = useState(1);
  const [affineB, setAffineB] = useState(1);
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [column, setColumn] = useState(0);
  const [isFile, setIsFile] = useState(false);

  const handleDownload = () => {
    const content =
      (encrypt
        ? encryptText(type, text, key, affineM, affineB, column)
        : decryptText(type, text, key, affineM, affineB, column)) ?? "";
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
  };

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        const content = reader.result;
        if (file.type === "text/plain") {
          setText(content as string);
        } else {
          if (type === "extendedvigenere") {
            const byteArray = new Uint8Array(content as ArrayBuffer);
            setText(byteArray.join(" "));
          } else {
            setText(content as string);
          }
        }
      };

      reader.readAsText(file);
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

          <div className="flex flex-col gap-4">
            {inputSection(
              type,
              encrypt,
              isFile,
              text,
              key,
              column,
              affineM,
              affineB,
              handleFileUpload,
              setKey,
              setColumn,
              setText,
              setAffineM,
              setAffineB,
              setIsFile
            )}
          </div>
        </div>

        <div className="bg-white p-8 w-96 flex flex-col gap-4 rounded-xl">
          {isFile && (
            <>
              <div className="">
                <strong className="text-center">
                  {encrypt ? "Plain Text" : "Ciphertext"}
                </strong>
              </div>

              <textarea
                className="border border-gray-200 p-4 rounded-lg h-full"
                value={text}
                disabled
              />
            </>
          )}
          <div className="">
            <strong className="text-center">
              {encrypt ? "Ciphertext" : "Plain Text"}
            </strong>
          </div>

          <textarea
            className="border border-gray-200 p-4 rounded-lg h-full"
            value={
              encrypt
                ? encryptText(type, text, key, affineM, affineB, column)
                : decryptText(type, text, key, affineM, affineB, column)
            }
            disabled
          />

          <button
            className="bg-blue-400 hover:bg-blue-500 transition ease-in-out duration-200 p-4 text-white font-semibold rounded-lg"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;