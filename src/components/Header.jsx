import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import alan from '/assets/header/alan.jpg';
import { Helmet } from 'react-helmet';

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
    <section className='relative flex flex-col items-center p-4 mt-0 sm:mt-2 mb-20 overflow-x-hidden'>
      <div id="meta">
      <Helmet>
        <meta name="description" content="Portfólio de Alan Nunes, um desenvolvedor web com foco em full-stack. Confira meus projetos e habilidades." />
        <meta name="keywords" content="desenvolvedor web, front-end, back-end, full-stack, React, JavaScript, portfólio, design" />
        <meta property="og:title" content="Portfólio de Alannunes | Desenvolvedor Web" />
        <meta property="og:description" content="Portfólio de Alannunes, um desenvolvedor web com foco em front-end e design. Confira meus projetos e habilidades." />
        <meta name = "image" property = "og:image" content = "https://opengraph.b-cdn.net/production/images/8e1fd8cc-bc5b-49a9-88fb-c82abf457cac.png?token=eiafXnpBMMz7uEMAZa-89Q2g0bTbBIceToJF5ZEuyuQ&height=540&width=1200&expires=33274351781" />
        <meta property="og:url" content="https://alannunes-dev.netlify.app/" /> 
      </Helmet>
    </div>
      <div id="home" className='flex justify-between xm:flex-col xm:p-10 scroll-mt-96 sm:flex sm:flex-col mb-20  mt-20 sm:mt-0 items-center w-full max-w-screen-sm'>
        <div className='mt-12 m-10'>
          <div className='p-5 text-center mt-9'>
            <h1 className='text-7xl lm:text-3xl  font-extrabold sm:mt-10'>
              <span className='text-custom2 inline-block border-r-2  border-customBlue animate-blink'>
                {displayedText}
              </span>
            </h1>
            <p className='text-2xl sm:text-base p-2 sm:mb-0 text-custom3'>Desenvolvedor Full-Stack</p>
          </div>

          <div className='flex ml-44 sm:flex-col sm:p-28 gap-4 sm:gap-6 p-5 gm:flex-col lm:mr-44'>
          <button 
            className={`bg-custom5 text-custom4 w-56 sm:w-40 h-10 rounded-full flex items-center justify-center text-xl hover:bg-custom7 transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
            <a 
              href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-custom4 w-full h-full flex items-center justify-center">
              Whatsapp
            </a>
          </button>
  
          <button 
            className={`bg-custom5 text-custom4 w-56 sm:w-40 h-10 rounded-full flex items-center justify-center text-xl hover:bg-custom7 transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
            <a 
              href="https://drive.google.com/file/d/1K0-v9WSMSCt3LfItwa1GM8oUQRKviXO1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-custom4 w-full h-full flex items-center justify-center">
              Currículo PDF
            </a>
          </button>
        </div>

        </div>
        <div className=''>
          <img 
            src={alan} 
            alt="Foto de Alan Nunes"
            loading='lazy'
            className={`w-72 h-72 sm:h-52 object-cover object-top mr-44 xm:mr-10 sm:mr-8 sm:w-52 m-10 sm:mb-20 sm:mt-0 rounded-full mt-12 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 animated-border`}
          />
              <div className='flex text-center justify-center mr-32 xm:mr-0 sm:mr-0 gap-5 mt-2 text-custom7'>
                      <a className='text-4xl icon-hover' href="https://api.whatsapp.com/send/?phone=5511940094503&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                      <a className='text-4xl icon-hover' href="http://www.linkedin.com/in/alannunes22" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a className='text-4xl icon-hover' href="https://github.com/alangt22" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                      </a>
              </div>
              <span className='flex text-center  mr-32 xm:mr-0 sm:mr-2 justify-center font-bold text-custom2 mt-2'>
                      <a href="#contatos" className='hover:text-custom7'>alansilva2896@gmail.com</a>
              </span>
          
        </div>
      </div>
    </section>
  );
}

export default Header;
