import React, { useEffect, useRef, useState } from "react";
import projetos from "./../data/projetos.json";
import skills from "./../data/skills.json";
import Modal from "./Modal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(projeto) {
    const projetoComImagens = {
      ...projeto,
      skillImages: projeto.skills.reduce((acc, skill) => {
        acc[skill] = skillMap[skill];
        return acc;
      }, {}),
    };
    setSelectedProject(projetoComImagens);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  // Cria um mapa para associar títulos de habilidades a suas imagens
  const skillMap = skills.reduce((acc, skill) => {
    acc[skill.title] = skill.imageSrc;
    return acc;
  }, {});

  const [visibleItems, setVisibleItems] = useState([]);
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((card) => observer.observe(card));

    return () => {
      projectsRef.current.forEach((card) => observer.unobserve(card));
    };
  }, [visibleItems]);

  return (
    <section className="flex flex-col justify-center items-center gap-8 sm:gap-14 sm:scroll-mt-56">
      <h1 className="text-5xl sm:text-3xl  font-extrabold text-custom2">
        PROJETOS
      </h1>
      <div
        id="projects"
        className="flex flex-wrap sm:flex sm:flex-col justify-center items-center gap-8 sm:gap-10  scroll-mt-36 sm:scroll-mt-56 sm:max-w-[550px] "
      >
        {projetos.map((projeto, index) => (
          <div
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
            data-index={index}
            className={`w-80 sm:w-[350px] h-96 sm:h-[500px] sm:mr-0 sm:ml-2 bg-custom-gradient card-shadow-2xl rounded-lg  overflow-hidden card-animation ${
              visibleItems.includes(String(index)) ? "visible" : ""
            } card-shadow`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <img
              src={projeto.imageSrc}
              alt={projeto.title}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 ">
              
              <h3 className="text-3xl mt-4 sm:text-3xl sm:mb-8 font-bold mb-2 text-custom3 text-center">
                {projeto.title}
              </h3>
       

              <div className="flex text-center justify-center gap-7 sm:mt-14">
          
                <button
                  onClick={() => openModal(projeto)}
                  className="text-custom6 bg-custom5 p-1 mt-6 w-60 sm:w-32 h-8 rounded-3xl hover:bg-custom7"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
        projeto={selectedProject}
      />
    </section>
  );
};

export default Projects;
