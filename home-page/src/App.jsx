import { useState } from 'react'
import './App.css'

import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Progresso from './components/Progresso'
import TreinoCasa from './components/TreinoCasa'
import TreinoAcademia from './components/TreinoAcademia'
import Corrida from './components/Corrida'
import Cronograma from './components/Cronograma'


function App() {
  const [telaAtual, setTelaAtual] = useState('progresso')

  const [menuAberto, setMenuAberto] = useState(true)

  // switch case para mudar o state da página do conteúdo principal selecionado
  function renderizarConteudo() {
    switch (telaAtual) {
      case 'progresso':
        return <Progresso />
      case 'cronograma':
        return <Cronograma />
      case 'casa':
        return <TreinoCasa />
      case 'corrida':
        return <Corrida />
      case 'academia':
        return <TreinoAcademia />
      default:
        return <Progresso />
    }
  }

  return (
    // h-screen = app ocupando toda a tela, overflow hidden = sem scrollbar
    // flex-1 é para o aside e o progresso ocuparem todo o espaço que sobrar entre o header e o footer
    <div className='h-screen flex flex-col overflow-hidden'>
      <Navbar setMenuAberto={setMenuAberto} />
      <div className='flex flex-1 overflow-hidden'>
        <Aside
          telaAtual={telaAtual}
          setTelaAtual={setTelaAtual}
          menuAberto={menuAberto} />
          
        <motion.div

          key={telaAtual}

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          className='flex-1 bg-black h-full flex justify-center'
        >

          {renderizarConteudo()}

        </motion.div>

    </div>
    </div >
  )
}

export default App
