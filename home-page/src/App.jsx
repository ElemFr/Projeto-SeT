import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Progresso from './components/Progresso'
import TreinoCasa from './components/TreinoCasa'
import TreinoAcademia from './components/TreinoAcademia'
import Corrida from './components/Corrida'


function App() {
  const [count, setCount] = useState(0)

  return (
    // h-screen = app ocupando toda a tela, overflow hidden = sem scrollbar
    // flex-1 é para o aside e o progresso ocuparem todo o espaço que sobrar entre o header e o footer
    <div className='h-screen flex flex-col overflow-hidden'>
    <Navbar/>
    <div className='flex flex-1 overflow-hidden'> 
    <Aside/>
    <TreinoCasa/>
    </div>
    </div>
  )
}

export default App
