import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-center">{title}</h1>
        <p className="text-lg max-w-3xl mx-auto text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;