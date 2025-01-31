import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div id="meta">
      <Helmet>
        <title>Portfólio de Alan Nunes | Desenvolvedor Full-Stack</title>
        <meta name="description" content="Portfólio de Alan Nunes, um desenvolvedor web com foco em full-stack. Confira meus projetos e habilidades." />
        <meta name="keywords" content="desenvolvedor web, front-end, back-end, full-stack, React, JavaScript, portfólio, design" />
        <meta property="og:title" content="Portfólio de Alannunes | Desenvolvedor Web" />
        <meta property="og:description" content="Portfólio de Alannunes, um desenvolvedor web com foco em front-end e design. Confira meus projetos e habilidades." />
      </Helmet>

      <h1>Bem-vindo ao meu portfólio!</h1>
      <p>
        Olá! Sou Alan da Silva Nunes, um desenvolvedor web apaixonado por tecnologia e design.
        Meu portfólio inclui projetos em React, JavaScript e outras tecnologias da web.
        Explore meus projetos e entre em contato para saber mais!
      </p>
    </div>
  );
}

export default MyComponent;
