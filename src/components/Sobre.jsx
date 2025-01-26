import React from 'react';

const Sobre = () => {
  return (
    <section className='flex items-center justify-center min-h-screen mb-60'>
      <div id='sobre' className='w-[1200px] max-w-screen-lg px-4 sm:ml-0 sm:px-1 flex justify-center scroll-mt-64'>
        <div className='bg-custom-gradient w-full h-auto sm:w-[350px] sm:h-auto rounded-lg p-8 sm:p-5 sm:py-10'>
          <h2 className='text-5xl sm:text-3xl text-center font-extrabold mb-6 text-custom2'>SOBRE MIM</h2>
          <div className='bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300'>
            <h3 className='text-2xl sm:text-xl text-center font-bold p-4 text-custom3'>Desenvolvedor Full-Stack</h3>
            <p className='text-lg sm:text-lg p-4 text-center text-custom3'>
              Sou estudante de Análise e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul, 
              atualmente no 4º semestre do curso. Tenho 28 anos e sou uma pessoa determinada, dedicada 
              a cumprir as tarefas designadas e alcançar metas de forma eficiente. Sou proativo, focado 
              em entregar resultados que superem as expectativas e estou sempre em busca de novos desafios 
              para expandir minhas habilidades.
              Atualmente, estou trabalhando em projetos pessoais utilizando JavaScript, TypeScript, React, 
              React Native, Node.js e outras tecnologias para criar aplicações web e mobile de alto nível. 
              Minha experiência envolve o desenvolvimento de soluções front-end e back-end, com forte foco em tecnologias modernas, 
              além de um entendimento prático de diversos frameworks e ferramentas. Estou em constante aprendizado e preparado para 
              contribuir em projetos desafiadores no mundo do desenvolvimento Full-Stack.
            </p>
          </div>
          <div className='bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300'>
            <h3 className='text-2xl sm:text-xl text-center font-bold p-4 text-custom3'>Formação</h3>
            <p className='text-lg sm:text-lg p-4 text-center text-custom3'>
              Análise e desenvolvimento de sistemas | 2023 -<span className='font-bold'> Cursando </span> 
              <br />
              Universidade Cruzeiro do Sul EAD - Guarulhos - SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
