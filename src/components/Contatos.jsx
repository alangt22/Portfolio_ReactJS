import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contatos = () => {
  return (
    <section className='justify-center gap-6 bg-custom-gradient w-full sm:w-full mt-44 p-3'>
        <div id='contatos' >
        <h2 className='text-5xl text-customWhite font-extrabold text-center'>CONTATOS</h2>
        <p className='text-2xl text-custom2 text-center'>Sinta-se à vontade para entrar em contato</p>
        <div className='flex text-center justify-center gap-5 mt-10'>
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
        <span className='flex text-center justify-center font-bold text-custom2 mt-2'>
                alansilva2896@gmail.com
        </span>
        <footer className='text-center justify-center mt-10'>
            <FontAwesomeIcon className='text-custom2' icon={faCopyright} />
            <span className='text-custom2'> | 2024 - </span>
            <a className='text-custom2 hover:text-custom7' href="#home">Alan Nunes</a>
        </footer>
    </div>
    </section>
  );
}

export default Contatos;
