import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Aside/>
    </div>
  )
}

export default App
