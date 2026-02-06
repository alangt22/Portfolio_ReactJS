import React from "react";

const Sobre = () => {
  return (
    <section className="flex items-center justify-center min-h-screen mb-60">
      <div
        id="sobre"
        className="w-[1200px] max-w-screen-lg px-4 sm:ml-0 sm:px-1 flex justify-center scroll-mt-64"
      >
        <div className="bg-custom-gradient w-full h-auto sm:w-[350px] sm:h-auto rounded-lg p-8 sm:p-5 sm:py-10">
          <h2 className="text-5xl sm:text-3xl text-center font-extrabold mb-6 text-custom2">
            SOBRE MIM
          </h2>
          <div className="bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl sm:text-xl text-center font-bold p-4 text-custom3">
              Desenvolvedor Full-Stack
            </h3>
            <p className="text-lg sm:text-lg p-4 text-center text-custom3">
           Sou um desenvolvedor full-stack em início de carreira, com uma base sólida em HTML, CSS, JavaScript e ReactJS. Tenho paixão por criar interfaces acessíveis, responsivas e otimizadas em performance, sempre buscando oferecer a melhor experiência para o usuário.

Nos últimos tempos, venho me aprofundando em ferramentas modernas como Next.js, TailwindCSS e TypeScript, além de estudar testes automatizados (E2E) para garantir a qualidade do código. Também possuo noções de Backend, trabalhando com Node.js, NestJS, Express, MongoDB, PostgreSQL e Firebase.

Minha trajetória tem sido construída por meio de projetos pessoais e cursos intensivos, onde aplico os conceitos aprendidos na prática e desenvolvo soluções completas. Estou em busca de oportunidades que me permitam aplicar e expandir meus conhecimentos em ambientes colaborativos que valorizem o aprendizado contínuo e a inovação.
            </p>
          </div>
          <div className="bg-custom1 sm:w-[300px] rounded-xl mb-6 opacity-55 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl sm:text-xl text-center font-bold p-4 text-custom3">
              Formação
            </h3>
            <p className="text-lg sm:text-lg p-4 text-center text-custom3">
              Análise e Desenvolvimento de Sistemas |{" "}
              <span className="font-bold">Concluído em 2025</span>
              <br />
              Universidade Cruzeiro do Sul EAD - Guarulhos - SP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
