import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import wedingConsultancy from './../../public/assets/assets/consultancy.jpg'
import ndt1 from './../../public/assets/assets/ndt1.jpg'
import welding from './../../public/assets/assets/welding.jpg'
import project from './../../public/assets/assets/project.jpg'
import pipeline from './../../public/assets/assets/pipeline.jpg'
import training from './../../public/assets/assets/training.jpg'
import structural from './../../public/assets/assets/structural.jpg'
import visua from './../../public/assets/assets/visua.jpeg'
import qc from './../../public/assets/assets/qc.jpeg'
// Gallery images data using your asset files
const GALLERY_IMAGES = [
  {
    src: wedingConsultancy,
    title: 'Welding Consultancy',
    description: 'Expert consultation services for welding projects',
    category: 'Consultancy'
  },
  {
    src: ndt1,
    title: 'NDT Testing',
    description: 'Non-destructive testing and quality assurance',
    category: 'Testing'
  },
  {
    src: welding,
    title: 'Welding Training',
    description: 'Professional welding training and certification programs',
    category: 'Training'
  },
  // Additional mock entries to showcase the gallery better
  {
    src: project,
    title: 'Industrial Welding Project',
    description: 'Large scale industrial welding consultation',
    category: 'Testing'
  },
  {
    src: pipeline,
    title: 'Pipeline Inspection',
    description: 'Comprehensive NDT inspection of pipeline systems',
    category: 'Testing'
  },
  {
    src: training,
    title: 'Certification Course',
    description: 'Advanced welding certification training program',
    category: 'Training'
  },
  {
    src: structural,
    title: 'Structural Welding',
    description: 'Structural steel welding consultation and oversight',
    category: 'Testing'
  },
  {
    src: visua,
    title: 'Quality Control',
    description: 'Rigorous quality control and testing procedures',
    category: 'Testing'
  },
  {
    src: qc,
    title: 'Hands-on Workshop',
    description: 'Practical welding skills development workshop',
    category: 'Training'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 shadow-sm">
              Our Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Our Welding Gallery
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of welding projects, training sessions, and completed works showcasing our 
            <span className="text-blue-700 font-semibold"> expertise and quality standards</span>.
          </p>
          
          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`capitalize px-6 py-3 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'border-2 border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&crop=center`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                   
                    
                    {/* Category Badge */}
                    <div className="mt-3">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-400"></div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 bg-white">
                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {image.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <i className="fas fa-images text-6xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No images found</h3>
            <p className="text-slate-500">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get a personalized quote for your welding project. Our experts are ready to help you achieve the highest quality results.
            </p>
            
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Get a Quote for Your Project</span>
              <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;