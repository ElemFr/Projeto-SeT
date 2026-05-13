import Navbar from './components/Navbar'
import './App.css'
import LoginForms from './components/LoginForms'


function App() {
  return(
    <div className='min-h-screen bg-black'>
      <Navbar/>

      <main className='flex items-center justify-center bg-linear-to-b from-[#050505] to-[#90100B] min-h-[90vh]'>
        <LoginForms/>
      </main>
    </div>


  )
}

export default App