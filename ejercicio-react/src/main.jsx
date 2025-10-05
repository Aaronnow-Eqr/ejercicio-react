import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Pokemon } from './pages/Pokemon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/" element={< Pokemon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
