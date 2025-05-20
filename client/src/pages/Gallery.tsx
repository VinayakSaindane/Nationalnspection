import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { GALLERY_IMAGES } from '@/lib/constants';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-inter text-primary mb-4">Our Welding Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of welding projects, training sessions, and completed works.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <div>
                  <h3 className="text-white font-medium">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary-dark text-white">
            <Link href="/contact">
              <span>Get a Quote for Your Project</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;