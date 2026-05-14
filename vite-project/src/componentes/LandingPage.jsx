import { useState } from 'react'
import { motion, spring } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'
import logoB from '../img/logoB.png'
import logoST from '../img/logoST.png'
import alter from '../img/alter.png'
import corrida from '../img/corrida.png'
import flexivel from '../img/flexivel.png'
import graciane from '../img/graciane.png'
import matheus from '../img/matheus.png'
import zilu from '../img/zilu.png'
import juliana from '../img/juliana.png'

let G = <p>"Os treinos para iniciantes ajudaram muito na minha rotina."</p>
let M = <p>"Gostei porque o app passa uma vibe motivadora sem ser complicado."</p>
let Z = <p>"Achei muito legal poder acompanhar minha evolução no aplicativo."</p>
let J = <p>"As metas diarias me motivam a continuiar treinando."</p>

const images = [
  graciane,
  matheus,
  zilu,
  juliana
]
const frases = [
  G,
  M,
  Z,
  J
]

function LandingPage() {

  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 &&frases.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div> 
      <nav className='flex flex-row bg-black justify-between items-center'>
        <div className='flex flex-row justify-between gap-5 items-center'>

          <img src={logo} alt="logo" />
          <img src={logoB} alt="logoB" />

        </div>
        
        <div className='flex flex-row gap-5 items-center'>

          <p>Treinos</p>
          <p>Ajuda</p>
          <button onClick={() => navigate('/login')}
          className='text-[#FF0000] hover:border-y-4 px-4 py-1'>Logar</button> { /*linkar componente de login: LoginForms*/ }
          
        </div>
      </nav>
      <section className='flex flex-row justify-between gap-10'>
        <div className='flex flex-col justify-center gap-5 px-20'>

          <h2 className='w-80 align-text-bottom font-bold text-4xl'>Less planning more progress.</h2>
          <p className='align-text-bottom'>Treinos simples, resultados reais. Comece no seu ritmo, acompanhe sua evolução e transforme pequenos hábitos em grandes mudanças</p>

        </div>
        <div>

          <img src={logoST} alt="logoST" />

        </div>
      </section> 
      <section > 
        <div className='flex flex-col gap-5'>
          <div className='flex text-center justify-center'>

            <h2 className='font-bold text-2xl w-110 py-20'>Planeje um treino com base nas suas <span className='text-red-600 text-3xl'>PREFERÊNCIAS</span></h2>

          </div>
          <div className='flex justify-between'>

            <img src={alter} alt="pessoa com alter" />
            <img src={flexivel} alt="pessoa fazendo flexão" />
            <img src={corrida} alt="dupla correndo pagar as conta"/>

          </div>
        </div>
        <div >

          <p className='font-bold text-2xl py-20'>Veja oque os nossos usuários tem a dizer sobre nosso aplicativo:</p>

          {/*Carrousel pararelo de imagens*/}
          
          <div className='relative flex flex-col items-center py-20'>
            <div className='overflow-hidden rounded-4xl'>
              <motion.div className="flex" 
                initial={{ x:0 }} 
                animate={{ x:-currentIndex * 320 }}
                transition={{type:spring, stiffness:320, damping:40 }}>
                {images.map((image, index) => (
                  <motion.div className="min-w-full w-20" key={index}>
                    <img 
                      src={image} 
                      className='w-full h-full object-cover rounded'
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/*Carrousel pararelo de frases*/}

            <div className='overflow-hidden text-center py-10'>
              <motion.div className="flex" 
                initial={{ x:0 }} 
                animate={{ x:-currentIndex * 320 }}
                transition={{type:spring, stiffness:320, damping:40 }}>
                {frases.map((frase, index) => (
                  <motion.div className="min-w-full w-20" key={index}>
                    <p>{frase}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className='flex flex-row w-full justify-between mt-6'>
              <button
                onClick={prevSlide} 
                className='bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70'>

                <p className='text-black text-2xl'>+--</p>

              </button>
              <div className='flex flex-row gap-3'>

                {images.map((_, index) => (
                  <p
                    key={index} 
                    className={`cursor-pointer text-2xl ${index === currentIndex ? "text-gray-800" : "text-gray-400"
                    }`}
                  >*</p>
                ))}

              </div>
              <button 

                onClick={nextSlide}
                className='bg-gray-100 p-3 rounded-full shadow transition-all hover:opacity-70'>
                <p className='text-black text-2xl'>--+</p>

              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='flex flex-row justify-between gap-5 items-center'>
          <div className='flex items-center'>

            <img src={logo} alt="logo" />
            <img src={logoB} alt="logoB" className='h-10'/>

          </div>
          <div className='text-center'>

            <h2 className='text-2xl'>Devs:</h2>
            <p>Jessica</p>
            <p>Elem</p>
            <p>Guilherme</p>
            <p>Joel</p>

          </div>

        </div>
      </footer>
    </div>
  );
}

export default LandingPage;