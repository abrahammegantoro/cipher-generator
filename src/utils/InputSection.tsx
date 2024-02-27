const inputSection = (
  type: string,
  encrypt: boolean,
  isFile: boolean,
  text: string,
  key: string,
  column: number,
  affineM: number,
  affineB: number,
  handleFileUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void,
  setKey: (key: string) => void,
  setColumn: (column: number) => void,
  setText: (text: string) => void,
  setAffineM: (affineM: number) => void,
  setAffineB: (affineB: number) => void,
  setIsFile: (isFile: boolean) => void
) => {
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
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PDF</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(event) => handleFileUpload(event, type)}
              />
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

        {!isFile ? (
          <textarea
            className="border border-gray-200 min-h-48 p-4 text-base rounded-lg"
            placeholder="Enter your text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PDF</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(event) => handleFileUpload(event, type)}
              />
            </label>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">PDF</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => handleFileUpload(event, type)}
          />
        </label>
      </div>
    );
  }
};

export default inputSection;
