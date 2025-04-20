import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Github, ExternalLink, Database, Layout } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Sistema Bancário em Python',
      description: 'Implementação de um sistema bancário com CRUD e funções básicas como depósito, saque e extrato.',
      technologies: ['Python', 'POO', 'CRUD'],
      icon: <Database size={24} />,
      link: 'https://github.com/cxryoff'
    },
    {
      title: 'Análise de Dados no Power BI',
      description: 'Dashboard para visualização e análise de dados empresariais desenvolvido com Microsoft Power BI.',
      technologies: ['Power BI', 'Análise de Dados', 'Dashboard'],
      icon: <Layout size={24} />,
      link: 'https://github.com/cxryoff'
    },
    {
      title: 'Interface Gráfica em Python',
      description: 'Aplicação desktop com interface gráfica utilizando bibliotecas Python para interação com usuário.',
      technologies: ['Python', 'Tkinter', 'UI/UX'],
      icon: <Code size={24} />,
      link: 'https://github.com/cxryoff'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projetos" subtitle="Conheça alguns dos meus trabalhos" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-800 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Github size={24} />
                  </a>
                </div>
                <div className="text-white dark:text-white p-4 rounded-full bg-white/20 backdrop-blur-sm">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
                  >
                    <span className="mr-1">Ver no GitHub</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/cxryoff"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <Github size={20} className="mr-2" />
            <span>Ver mais projetos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;