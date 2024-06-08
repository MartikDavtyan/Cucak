import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cucak from "./companents/Cucak"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TodoList</h1>
      <Cucak />
    </>
  )
}

export default App
