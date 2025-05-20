import { useState } from 'react';
import { Link } from 'wouter';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
    const aboutImage = "/src/assets/family.jpg";
  
  // Add error handling for the image
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle fallback in case the image fails to load
  

  // Handle successful image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      // Updated to use public folder path or placeholder
      src: '/gallery/family.jpg',
      alt: 'Welding process',
      category: 'welding'
    },
    {
      id: 2,
      // Option 1: Use placeholder images for now
      src: '/gallery/placeholder.jpg',
      alt: 'Inspection process',
      category: 'inspection'
    },
    {
      id: 3,
      src: '/gallery/placeholder.jpg',
      alt: 'Training session',
      category: 'training'
    },
    {
      id: 4,
      src: '/gallery/placeholder.jpg',
      alt: 'Certification process',
      category: 'certification'
    },
    {
      id: 5,
      src: '/gallery/placeholder.jpg',
      alt: 'Advanced welding',
      category: 'welding'
    },
    {
      id: 6,
      src: '/gallery/placeholder.jpg',
      alt: 'Quality inspection',
      category: 'inspection'
    }
  ];

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => new Set(prev).add(imageId));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our work through these images showcasing our welding services, training programs, and quality inspections.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {imageErrors.has(image.id) ? (
                // Fallback when image fails to load
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg 
                      className="w-12 h-12 mx-auto mb-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-sm">Image not available</p>
                  </div>
                </div>
              ) : (
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  onError={() => handleImageError(image.id)}
                />
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="text-white text-center px-4">
                  <h3 className="text-xl font-bold capitalize">{image.category}</h3>
                  <p className="text-sm mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg">
              Contact Us for More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;