import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginForms from './pages/LoginForms'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForms />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App