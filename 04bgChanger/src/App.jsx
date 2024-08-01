import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2">
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
            <button className="border border-black px-4 py-1 rounded-lg shadow-xl" style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-lg text-white shadow-xl" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>Brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
