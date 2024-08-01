import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: 'Ashar',
    age: 19
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-red-600 rounded-xl p-4 text-black'>Tailwind test</h1>
      <br/><br/>
      <Card username='chaiaurcode'/>
    </>
  )
}

export default App
