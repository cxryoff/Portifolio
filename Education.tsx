import React from 'react';
import SectionTitle from './SectionTitle';
import { BookOpen, Award, Calendar } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

interface CertificationItem {
  title: string;
  institution: string;
  duration: string;
  year: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: 'UNIP - Universidade Paulista',
      degree: 'Gestão de Tecnologia da Informação',
      period: 'Ago/2023 - Ago/2025',
      details: '4º semestre'
    },
    {
      institution: 'Ensino Médio',
      degree: 'Formação Completa',
      period: 'Concluído'
    }
  ];

  const certifications: { [key: string]: CertificationItem[] } = {
    'Fundação Bradesco': [
      {
        title: 'Python Básico ao Avançado',
        institution: 'Fundação Bradesco',
        duration: '18h',
        year: '2023'
      },
      {
        title: 'Projetos com Estruturas de Dados',
        institution: 'Fundação Bradesco',
        duration: '10h',
        year: '2023'
      },
      {
        title: 'Power BI',
        institution: 'Fundação Bradesco',
        duration: '4h',
        year: '2023'
      },
      {
        title: 'POO em Python',
        institution: 'Fundação Bradesco',
        duration: '10h',
        year: '2023'
      },
      {
        title: 'Interface Gráfica em Python',
        institution: 'Fundação Bradesco',
        duration: '10h',
        year: '2023'
      }
    ],
    'DIO': [
      {
        title: 'Engenharia de Dados com Python',
        institution: 'DIO',
        duration: '1h',
        year: '2023'
      },
      {
        title: 'Git/GitHub',
        institution: 'DIO',
        duration: '2h',
        year: '2023'
      },
      {
        title: 'Projeto Bancário em Python',
        institution: 'DIO',
        duration: '4h',
        year: '2023'
      }
    ],
    'NTT DATA': [
      {
        title: 'Engenharia de Dados com Python',
        institution: 'NTT DATA',
        duration: 'Cursando',
        year: '2024'
      }
    ]
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Formação" subtitle="Minha trajetória acadêmica e cursos" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
              Educação Formal
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {item.institution}
                  </h5>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                  {item.details && (
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
              Cursos & Certificações
            </h3>
            
            <div className="space-y-8">
              {Object.keys(certifications).map((institution) => (
                <div 
                  key={institution}
                  className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow border border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {institution}
                  </h4>
                  
                  <div className="space-y-3">
                    {certifications[institution].map((cert, i) => (
                      <div 
                        key={i}
                        className="flex flex-col sm:flex-row sm:justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      >
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white">
                            {cert.title}
                          </h5>
                        </div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <span className="text-sm text-gray-600 dark:text-gray-400 mr-3">
                            {cert.duration}
                          </span>
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;