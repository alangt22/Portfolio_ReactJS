import React from 'react';

const Sobre = () => {
  return (
    <section className='flex items-center justify-center min-h-screen mb-60  sm:scroll-mt-56'>
      <div id='sobre' className='w-[850px] max-w-screen-lg px-4 sm:ml-11 scroll-mt-64 sm:p-1'>
        <div className='bg-custom-gradient w-full h-auto sm:w-[350px] sm:h-auto rounded-lg p-8 sm:p-5 sm:py-10'>
          <h2 className='text-5xl sm:text-3xl text-center font-extrabold mb-6 text-custom2'>SOBRE MIM</h2>
          <div className='bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300'>
            <h3 className='text-2xl sm:text-xl text-center font-bold p-4 text-custom3'>Desenvolvedor Full-Stack</h3>
            <p className='text-lg sm:text-lg p-4 text-center text-custom3'>
            Sou um desenvolvedor Full-Stack em formação com experiência em projetos
            pessoais utilizando JavaScript, HTML, e CSS, com um forte foco em
            frameworks como React.js para criar interfaces dinâmicas. Tenho habilidades
            sólidas em TypeScript para melhorar a qualidade e manutenibilidade do
            código, e também familiaridade com frameworks como TailwindCSS e Sass
            para estilização eficiente.Estou expandindo meu conhecimento em back-end
            com Python e Django, e estou em constante aprendizado para
            aprimorar minhas habilidades em Node.js, expressJs e mongoDB. Meu
            objetivo é contribuir para projetos desafiadores e continuar crescendo
            profissionalmente.
            </p>
          </div>
          <div className='bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300'>
            <h3 className='text-2xl sm:text-xl text-center font-bold p-4 text-custom3'>Formação</h3>
            <p className='text-lg sm:text-lg p-4 text-center text-custom3'>
              Cursando quarto semestre superior em Análise e Desenvolvimento de Sistemas (Universidade Cruzeiro do Sul)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
