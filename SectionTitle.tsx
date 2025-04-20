import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform translate-y-2"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;