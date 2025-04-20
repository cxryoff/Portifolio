import React from 'react';
import { Github as GitHub, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <GitHub size={20} />,
      href: 'https://github.com/cxryoff',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/silas-alvares',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:alvreslilsilas@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+5511981744332',
      label: 'Phone'
    },
    {
      icon: <MapPin size={20} />,
      href: 'https://maps.google.com/?q=Av. Celso dos Santos, 1036 - Vila Constância, SP',
      label: 'Location'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fadeIn">
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Olá, mundo! 👋
              </h2>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Silas Álvares Silva
              </h1>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                Estudante de Gestão de TI | Aspirante a Engenheiro de Dados
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Buscando oportunidades de estágio em Tecnologia da Informação com foco em 
                Desenvolvimento Python, Análise de Dados/Power BI e Engenharia de Dados.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  Entre em Contato
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors border border-gray-200 dark:border-gray-700"
                >
                  Ver Projetos
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/photo.jpg" 
                  alt="Silas Álvares Silva"
                  className="object-cover w-full h-full rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x300.png?text=S';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;