import logo from './img/logo.png'
import logoB from './img/logoB.png'
import logoST from './img/logoST.png'
import './app.css'

function App() {
  return (
    <div>
      <nav className='flex flex-row bg-black text-white justify-between items-center'>
        <div className='flex flex-row justify-between gap-5 items-center'>

          <img src={logo} alt="logo" />
          <img src={logoB} alt="logoB" />

        </div>
        <div className='flex flex-row gap-5 items-center'>

          <p>Treinos</p>
          <p>Ajuda</p>
          <button className='text-[#FF0000] hover:border-y-4 px-4 py-1'>Logar</button>
          
        </div>
      </nav>
      <section className='flex flex-row border-2' >
        <div className=' flex flex-col text-white justify-center gap-5'>

          <h2 className='w-80 align-text-bottom font-bold text-4xl'>Less planning more progress.</h2>
          <p className='align-text-bottom'>Treinos simples, resultados reais. Comece no seu ritmo, acompanhe sua evolução e transforme pequenos hábitos em grandes mudanças</p>

        </div>
        <div>
          <img src={logoST} alt="logoST" />
        </div>
      </section>
      
    </div>
  );
}

export default App;