import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import alan from '/assets/header/alan.jpg';

const Header = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const text = "Olá, Sou Alan Nunes";
  const speed = 100; 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, displayedText]);

  return (
    <section className='relative flex flex-col items-center p-4 mt-12 sm:mt-2 mb-20 overflow-x-hidden'>
      <div id="home" className='flex justify-between sm:flex sm:flex-col mb-20  mt-20 sm:mt-0 items-center w-full max-w-screen-sm scroll-mt-60'>
        <div className='mt-12 m-10'>
          <div className='p-5 text-center'>
            <h1 className='text-7xl sm:text-3xl font-extrabold sm:mt-10'>
              <span className='inline-block border-r-2  border-customBlue animate-blink'>
                {displayedText}
              </span>
            </h1>
            <p className='text-2xl sm:text-base p-2 sm:mb-0 text-custom3'>Desenvolvedor Full-Stack</p>
          </div>
          <div className='flex ml-44 sm:ml-0 sm:flex-col sm:p-28 gap-4  sm:gap-6 p-5'>
            <button 
              className={`bg-custom5 text-custom4 w-56 sm:w-40  h-10 rounded-full flex items-center justify-center text-xl hover:bg-custom7 transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
              <a href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-custom4">Whatsapp</a>
            </button>
            <button 
              className={`bg-custom5 text-custom4 w-56 sm:w-40 h-10 rounded-full flex items-center justify-center text-xl hover:bg-custom7 transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
              <a href="https://drive.google.com/file/d/1jNZ0kqJyoweke--Ryl7KWXXaPDAE6IJy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-custom4">Currículo PDF</a>
            </button>
          </div>
        </div>
        <div className=''>
          <img 
            src={alan} 
            alt="Header"
            className={`w-72 h-72 sm:h-52 object-cover object-top mr-44 sm:mr-8 sm:w-52 m-10 sm:mb-20 sm:mt-0 rounded-full mt-12 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 animated-border`}
          />
              <div className='flex text-center justify-center mr-32 sm:mr-0 gap-5 mt-2 text-custom7'>
                      <a className='text-4xl icon-hover' href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                      <a className='text-4xl icon-hover' href="http://www.linkedin.com/in/alan-nunes-7b3440273" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a className='text-4xl icon-hover' href="https://github.com/alangt22" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                      </a>
              </div>
              <span className='flex text-center  mr-32 sm:mr-2 justify-center font-bold text-custom2 mt-2'>
                      alansilva2896@gmail.com
              </span>
          
        </div>
      </div>
    </section>
  );
}

export default Header;
