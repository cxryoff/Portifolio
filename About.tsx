import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Sobre Mim" subtitle="Conheça um pouco mais sobre quem eu sou" />
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Sou estudante de Gestão de Tecnologia da Informação na UNIP, atualmente no 4º semestre,
              com previsão de formatura em 2025. Tenho foco em desenvolvimento Python, análise de dados
              e engenharia de dados, áreas nas quais venho me especializando através de cursos e projetos práticos.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Minha jornada na tecnologia iniciou-se com curso técnico em Python, seguido por especialização
              em estruturas de dados, programação orientada a objetos e ferramentas como Power BI. 
              Além disso, tenho experiência prática com Git/GitHub e desenvolvimento de projetos pessoais
              que envolvem análise de dados e automação.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Estou em busca de uma oportunidade de estágio onde possa aplicar meus conhecimentos,
              desenvolver novas habilidades e contribuir para projetos reais. Sou comprometido com
              aprendizado contínuo e resolução de problemas, e trabalho bem em equipe.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Objetivo</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Estágio em Tecnologia da Informação com foco em Desenvolvimento Python, 
                Análise de Dados/Power BI ou Engenharia de Dados.
              </p>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border border-teal-100 dark:border-teal-800">
              <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-3">Diferenciais</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Combinação de Gestão de TI (visão estratégica) com habilidades técnicas (Python/Data),
                além de portfólio ativo com projetos práticos.
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg border border-orange-100 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400 mb-3">Idiomas</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Português (Nativo) <br />
                Inglês (Básico)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;