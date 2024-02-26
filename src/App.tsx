import { useState } from 'react'
import './App.css'
import { encryptVigenereCipher, decryptVigenereCipher } from './utils/cipher/vigenereCipher'
import { encryptExtendedVigenereCipher, decryptExtendedVigenereCipher } from './utils/cipher/extendedVigenereCipher'
import { encryptAutoKeyVigenereCipher, decryptAutoKeyVigenereCipher } from './utils/cipher/autoKeyVigenereCipher'

function App() {
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </input>
      <p>Encrypted: {decryptAutoKeyVigenereCipher(text, "indo")}</p>
    </div>
  )
}

export default App
