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
              Desenvolvedor Full-Stack com mais de 1 ano de experiência prática
              em projetos pessoais. Trabalho com front-end utilizando React,
              Next.js, TypeScript, JavaScript, HTML, CSS e Tailwind CSS, e no
              back-end com Node.js, Express, MongoDB, MySQL e Firebase. Tenho
              como foco a criação de aplicações completas, escaláveis e com
              interfaces modernas e responsivas. Também tenho experiência com
              Git, GitHub, consumo de APIs REST e deploy de aplicações. Estou em
              constante aprendizado e em busca da minha primeira oportunidade
              profissional na área de desenvolvimento.
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
