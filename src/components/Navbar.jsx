import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Importa ícones de menu e fechar

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between items-center p-5 bg-custom6 h-16 border-b-2 border-customGray z-10 overflow-y-hidden'>
      <h1 className={`text-3xl sm:text-2xl text-custom7 font-bold ${isVisible ? 'opacity-100 translate-x-7' : 'opacity-0 translate-x-0'} transition-all duration-500`}>
        ALAN NUNES
      </h1>
      <div className='hidden sm:flex items-center'>
        <button onClick={toggleMenu} className='text-5xl text-custom7'>
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      <ul className={`flex sm:hidden space-x-4 text-lg text-custom2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} transition-all duration-500`}>
        <li className='transition-transform transform hover:scale-105'>
          <a href="#home" className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Home</a>
        </li>
        <li className='transition-transform transform hover:scale-105'>
          <a href="#sobre" className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Sobre</a>
        </li>
        <li className='transition-transform transform hover:scale-105'>
          <a href="#skills" className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Skills</a>
        </li>
        <li className='transition-transform transform hover:scale-105'>
          <a href="#projects" className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Projetos</a>
        </li>
        <li className='transition-transform transform hover:scale-105'>
          <a href="#contatos" className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Contato</a>
        </li>
      </ul>

      <div className={`fixed inset-0 bg-custom-gradient opacity-85 z-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:w-full`}>
        <div className='flex justify-end p-2 sm:mr-3'>
          <button onClick={toggleMenu} className='text-5xl  text-custom7'>
            <HiX />
          </button>
        </div>
        <ul className='flex flex-col items-center space-y-8 font-extrabold text-4xl text-custom3 hover:text-custom7 mt-16'>
          <li className='transition-transform transform hover:scale-105'>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Home</a>
          </li>
          <li className='transition-transform transform hover:scale-105'>
            <a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')} className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Sobre</a>
          </li>
          <li className='transition-transform transform hover:scale-105'>
            <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Skills</a>
          </li>
          <li className='transition-transform transform hover:scale-105'>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Projetos</a>
          </li>
          <li className='transition-transform transform hover:scale-105'>
            <a href="#contatos" onClick={(e) => handleLinkClick(e, 'contatos')} className='hover:text-customHighlight transition-colors px-3 py-1 rounded'>Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
