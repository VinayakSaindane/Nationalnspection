import React from 'react';
import { Button } from '@/components/ui/button';

// Services data with images from your assets folder
const SERVICES = [
  {
    id: 1,
    title: "Consultancy",
    description: "Expert guidance on welding process optimization, quality control, compliance, and project management.",
    image: "/src/assets/consultancy.jpg",
    features: ["Process Optimization", "Quality Control", "Compliance Management", "Project Planning"]
  },
  {
    id: 2,
    title: "Training & Certification",
    description: "Comprehensive welding training programs and certifications designed to develop and validate professional skills.",
    image: "/src/assets/qualitycontrol.jpg",
    features: ["Professional Training", "Skill Validation", "Certification Programs", "Hands-on Learning"]
  },
  {
    id: 3,
title: "NDT",
description: "Non-Destructive Testing (NDT) ensures equipment reliability through accurate, damage-free inspection and calibration, supporting safety and compliance in industrial operations.",
image: "/src/assets/ndt.jpg",
features: [
  "Equipment Calibration",
  "Precision Testing",
  "Compliance Verification",
  "Quality Assurance"
]

  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 shadow-sm">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We offer a wide range of welding-related services to support your business needs and ensure 
            <span className="text-blue-700 font-semibold"> quality and compliance</span>.
          </p>
          
          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden border border-slate-100"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback images based on service type
                    const fallbacks = {
                      'Consultancy': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
                      'Training & Certification': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
                      'Calibration': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
                    };
                    (e.target as HTMLImageElement).src = fallbacks[service.title as keyof typeof fallbacks] || fallbacks['Consultancy'];
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Service Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    Professional Service
                  </span>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-blue-400/50 rounded-t-2xl"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-slate-700 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-blue-200"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </Button>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let us work with you to create a customized service package that meets your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center">
                  Get Custom Quote
                  <i className="fas fa-calculator ml-2"></i>
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <span className="flex items-center">
                  Contact Us
                  <i className="fas fa-phone ml-2"></i>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;