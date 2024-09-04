import React, { useRef, useEffect, useState } from 'react';
import skills from './../data/skills.json';

const Skills = ({ triggerAnimation }) => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer para detectar quando a seção de Skills está visível
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar após a primeira detecção
        }
      },
      { threshold: 0.1 } // Ajustar o limiar conforme necessário
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (triggerAnimation || isVisible) {
      const items = skillsRef.current.querySelectorAll('.skill-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 300); // Ajustar o atraso entre os itens conforme necessário
      });
    }
  }, [triggerAnimation, isVisible]);

  return (
    <section className='flex items-center justify-center min-h-screen mb-60 '>
      <div id='skills' className='w-[850px] sm:w-[310px] max-w-screen-lg px-4 sm:px-2 scroll-mt-36 sm:scroll-mt-36'>
        <div className='bg-custom-gradient w-full h-auto rounded-lg p-8 sm:py-6'>
          <h2 className='text-5xl sm:text-3xl text-center font-extrabold mb-10 sm:mb-6 text-custom2'>SKILLS</h2>
          <div ref={skillsRef} className='flex flex-wrap justify-center gap-8'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='skill-item flex flex-col items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out'
                style={{ transitionDelay: `${index * 300}ms` }} // Ajustar o atraso conforme necessário
              >
                <img className='w-28 h-28 sm:w-16 object-contain mb-0 transition-opacity duration-500 ease-in-out opacity-45 hover:opacity-100' src={skill.imageSrc} alt={skill.title} />
                <p className='font-bold text-center text-custom3 mt-0'>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
