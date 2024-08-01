import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyButton, setCopyButton] = useState("copy");

  // useRef (Reference) hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => { // useCallback kisi bhi cheez ko optimize krne k liye | callback dependencies ko apni cache yani memory me rakhta ha | ye function ko run nahi krta
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
    setCopyButton("copied");
  }, [password]);
  
  useEffect(() => { // function run krta ha page reload hone per or dependencies k change hone per
    passwordGenerator();
    setCopyButton("copy");
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            ref={passwordRef}
            placeholder='Password'
            className='w-full py-1 px-3 outline-none' readOnly />
          <button
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           onClick={copyPasswordToClipboard}
          >{copyButton}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6} max={50} 
             value={length} 
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={numAllowed}
             onChange={() => {
              setNumAllowed((prev) => !prev) //concept from interview question video
             }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={charAllowed}
             onChange={() => {
              setCharAllowed((prev) => !prev) //concept from interview question video
             }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
