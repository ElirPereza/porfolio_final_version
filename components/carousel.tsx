import { Card, Image } from '@nextui-org/react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from './icons';

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="object-cover w-full h-64 md:h-80 transition-transform duration-500 transform"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>
      <button
        className="absolute inset-y-1/2 left-0 z-10 p-1 h-full w-10 bg-gray-800 text-white shadow-lg transform -translate-y-1/2 hover:bg-gray-700"
        onClick={prevSlide}
      >
        <ArrowLeft className='invert' width={200} height={250}/>
      </button>
      <button
        className="absolute inset-y-1/2 right-0 z-10 p-1 h-full w-10 bg-gray-800 text-white shadow-lg transform -translate-y-1/2 hover:bg-gray-700"
        onClick={nextSlide}
      >
        <ArrowRight className='invert' width={200} height={250}/>
      </button>
    </Card>
  );
};

export default Carousel;