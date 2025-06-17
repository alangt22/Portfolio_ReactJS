import React from 'react';

const Modal = ({ isOpen, onClose, projeto }) => {
  if (!isOpen || !projeto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className=" bg-custom2 w-11/12 max-w-lg p-6 rounded-lg shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{projeto.title}</h2>
        <img src={projeto.imageSrc} alt={projeto.title} className="w-full h-40 object-cover rounded mb-4 shadow-2xl" />
        <p className="text-gray-800 mb-4">{projeto.description}</p>
        <div className="h-1 bg-custom1/50 my-4 rounded"></div>

        <div className="mb-4">
          <strong>Tecnologias:</strong>
          <ul className="flex gap-3 mt-2 flex-wrap">
            {projeto.skills.map((skill, index) => (
              <li key={index}>
                <img src={projeto.skillImages[skill]} alt={skill} title={skill} className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex text-center justify-center gap-7 sm:mt-14">
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom6 bg-custom5 p-1 w-20 sm:w-32 h-8 rounded-3xl hover:bg-custom7"
                >
                  Projeto
                </a>

                <a
                  href={projeto.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom6 bg-custom5 w-20 p-1 sm:w-32 h-8 rounded-3xl hover:bg-custom7"
                >
                  GitHub
                </a>
              </div>
      </div>
    </div>
  );
};

export default Modal;
