import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './componentes/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LandingPage />
  </StrictMode>,
)
