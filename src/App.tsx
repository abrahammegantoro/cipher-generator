import { useState } from 'react'
import './App.css'
import { encryptVigenereCipher, decryptVigenereCipher } from './utils/vigenereCipher'
import { encryptExtendedVigenereCipher, decryptExtendedVigenereCipher } from './utils/extendedVigenereCipher'
import { encryptAutoKeyVigenereCipher, decryptAutoKeyVigenereCipher } from './utils/autoKeyVigenereCipher'

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
      <p>VRJOEEVEEGWEFOSMAVJMSZCNDMLQBDBQQD</p>
    </div>
  )
}

export default App
