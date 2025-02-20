import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Map, Clock } from 'lucide-react';

type Category = 'landscapes' | 'morocco' | 'animals' | 'sports';

interface ImageMetadata {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
  location: string;
  date: string;
}

interface GalleryImage {
  id: number;
  url: string;
  category: Category;
  alt: string;
  metadata: ImageMetadata;
}

const images: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'landscapes',
    alt: 'Mountain peaks in the mist',
    metadata: {
      camera: 'Sony A7R IV',
      lens: '16-35mm f/2.8 GM',
      aperture: 'f/8',
      shutterSpeed: '1/250',
      iso: '100',
      location: 'Swiss Alps',
      date: '2023-08-15'
    }
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'morocco',
    alt: 'Moroccan street market',
    metadata: {
      camera: 'Sony A7R IV',
      lens: '24-70mm f/2.8 GM',
      aperture: 'f/4',
      shutterSpeed: '1/500',
      iso: '400',
      location: 'Marrakech, Morocco',
      date: '2023-09-20'
    }
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'animals',
    alt: 'Lion in the wild',
    metadata: {
      camera: 'Sony A7R IV',
      lens: '200-600mm f/5.6-6.3 G',
      aperture: 'f/6.3',
      shutterSpeed: '1/1000',
      iso: '800',
      location: 'Serengeti, Tanzania',
      date: '2023-07-10'
    }
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'sports',
    alt: 'Surfer catching a wave',
    metadata: {
      camera: 'Sony A9 II',
      lens: '70-200mm f/2.8 GM',
      aperture: 'f/4',
      shutterSpeed: '1/2000',
      iso: '400',
      location: 'Bali, Indonesia',
      date: '2023-10-05'
    }
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'landscapes',
    alt: 'Sunset over mountains',
    metadata: {
      camera: 'Sony A7R IV',
      lens: '16-35mm f/2.8 GM',
      aperture: 'f/11',
      shutterSpeed: '1/60',
      iso: '100',
      location: 'Dolomites, Italy',
      date: '2023-06-25'
    }
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    category: 'morocco',
    alt: 'Moroccan architecture',
    metadata: {
      camera: 'Sony A7R IV',
      lens: '24-70mm f/2.8 GM',
      aperture: 'f/5.6',
      shutterSpeed: '1/250',
      iso: '200',
      location: 'Fez, Morocco',
      date: '2023-09-22'
    }
  }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'landscapes', label: 'Landscapes' },
    { id: 'morocco', label: 'Morocco' },
    { id: 'animals', label: 'Animals' },
    { id: 'sports', label: 'Sports' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Gallery
        </motion.h1>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold mb-1">{image.metadata.camera}</p>
                  <p className="text-xs">{image.metadata.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="max-w-7xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedImage.alt}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Camera className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Camera Settings
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {selectedImage.metadata.camera} with {selectedImage.metadata.lens}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {selectedImage.metadata.aperture} • {selectedImage.metadata.shutterSpeed}s • ISO {selectedImage.metadata.iso}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Map className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Location
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {selectedImage.metadata.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Date Taken
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {formatDate(selectedImage.metadata.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;