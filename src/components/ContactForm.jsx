import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbeplgg");
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleFormSubmit = async (e) => {
    setIsSubmitting(true); 
    await handleSubmit(e); 
    setIsSubmitting(false); 
  };

  if (state.succeeded) {
    return (
      <div className="text-center mt-6">
        <p className="text-lg font-semibold text-green-600">
          Obrigado! Sua mensagem foi enviada com sucesso.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl text-center font-semibold text-gray-700 mb-4">Entre em contato</h2>
      <p className="text-center text-gray-600 mb-6">Sua mensagem será enviada para <strong className='text-custom2'>alansilva2896@gmail.com</strong></p>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl text-gray-700">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder='Digite seu e-mail'
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <ValidationError prefix="E-mail" field="email" errors={state.errors} className="text-red-500 text-sm mt-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-xl text-gray-700">Nome</label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Digite seu nome"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <ValidationError prefix="name" field="name" errors={state.errors} className="text-red-500 text-sm mt-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-xl text-gray-700">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder='Digite sua mensagem'
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-red-500 text-sm mt-2" />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-custom7 opacity-40 hover:opacity-100 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
            disabled={state.submitting || isSubmitting} 
          >
            {isSubmitting ? (
              <div className="loader">
                <div className="spinner"></div> 
              </div>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>

      {state.errors && (
        <div className="text-center text-sm text-red-500 mt-4">
          <p>Por favor, preencha todos os campos corretamente.</p>
        </div>
      )}
    </section>
  );
}

export default ContactForm;
