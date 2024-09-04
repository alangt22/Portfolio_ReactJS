import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Sobre from './components/Sobre.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contatos from './components/Contatos.jsx'
import './index.css'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Header/>
    <Sobre/>
    <Skills/>
    <Projects/>
    <Contatos/>
  </StrictMode>,
)
