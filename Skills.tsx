import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Database, GitBranch, BarChart3, Terminal, Monitor } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Linguagens',
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', level: 80, category: 'Linguagens' },
        { name: 'SQL', level: 60, category: 'Linguagens' },
        { name: 'HTML', level: 70, category: 'Linguagens' },
      ],
    },
    {
      name: 'Ferramentas',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 75, category: 'Ferramentas' },
        { name: 'Power BI', level: 70, category: 'Ferramentas' },
        { name: 'Excel', level: 80, category: 'Ferramentas' },
      ],
    },
    {
      name: 'Conhecimentos',
      icon: <Database size={24} />,
      skills: [
        { name: 'Engenharia de Dados', level: 65, category: 'Conhecimentos' },
        { name: 'Versionamento', level: 75, category: 'Conhecimentos' },
        { name: 'Análise de Dados', level: 70, category: 'Conhecimentos' },
        { name: 'POO', level: 75, category: 'Conhecimentos' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Habilidades" subtitle="Minhas competências técnicas" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Competências Pessoais
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Comprometimento', icon: <Terminal size={24} /> },
              { name: 'Aprendizado Contínuo', icon: <BarChart3 size={24} /> },
              { name: 'Resolução de Problemas', icon: <GitBranch size={24} /> },
              { name: 'Trabalho em Equipe', icon: <Monitor size={24} /> },
            ].map((competency, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow transition-all hover:shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                  {competency.icon}
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {competency.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;