import { ChevronLeft, ChevronRight, Image, X } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      alt: 'Solar Panel Cleaning in Progress',
      category: 'Cleaning'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      alt: 'Before and After Cleaning Results',
      category: 'Results'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      alt: 'Professional Equipment',
      category: 'Equipment'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      alt: 'Large Scale Installation',
      category: 'Projects'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      alt: 'Team at Work',
      category: 'Team'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Solar Farm Maintenance',
      category: 'Projects'
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      alt: 'Cleaning Technology',
      category: 'Equipment'
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      alt: 'Customer Satisfaction',
      category: 'Results'
    },
    {
      id: 9,
      src: '/api/placeholder/400/300',
      alt: 'Quality Assurance',
      category: 'Team'
    }
  ];

  const categories = ['All', 'Cleaning', 'Results', 'Equipment', 'Projects', 'Team'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Image className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See our work in action - professional solar cleaning services and satisfied customers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-black/50 text-gray-300 hover:bg-primary/20 hover:text-primary border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="glassmorphism rounded-xl overflow-hidden cursor-pointer hover:glow transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="aspect-video bg-dark-gray flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <Image className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">{image.alt}</p>
                  <p className="text-xs text-primary">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>

              <div className="glassmorphism p-4 rounded-xl">
                <div className="aspect-video bg-dark-gray flex items-center justify-center mb-4">
                  <div className="text-gray-400 text-center">
                    <Image className="w-16 h-16 mx-auto mb-2" />
                    <p>{selectedImage.alt}</p>
                    <p className="text-primary">{selectedImage.category}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={prevImage}
                    className="text-white hover:text-primary transition-colors p-2"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-gray-300">
                    {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="text-white hover:text-primary transition-colors p-2"
                  >
                    <ChevronRight size={24} />
                  </button>
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