import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full mb-8 shadow-lg transition-colors focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Silas Álvares Silva</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Estudante de Gestão de TI em busca de oportunidades para crescer e 
              contribuir no mundo da tecnologia.
            </p>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded mb-8"></div>
          
          <p className="text-gray-400 text-sm flex items-center">
            &copy; {new Date().getFullYear()} - Desenvolvido com 
            <Heart size={16} className="mx-1 text-red-500" /> 
            - Silas Álvares Silva
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;