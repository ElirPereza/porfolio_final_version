import { Card, Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { ReactNode, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from './icons';



const Carousel = ({images }:any) => {
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Cambia la imagen cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <Card className="relative w-full">
      <div onClick={onOpen} className="overflow-hidden flex justify-center rounded-lg">
        <Image
          className="object-cover w-full h-64 md:h-80 transition-transform duration-500 transform"
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'  className='h-[90%] w-[90%]'>
        <ModalContent className='flex items-center justify-center min-w-[90%] dark ' >
          {(onClose) => (
            <div className=''>
                <Image
                  className=" w-full h-full flex p-10 rounded-3xl  "
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  width={1920}
                  height={1080}
                />
            </div>
          )}
        </ModalContent>
      </Modal>

      <button
        className="absolute inset-y-1/2 left-0 z-10 p-1 h-full w-10 bg-gray-800 text-white shadow-lg transform -translate-y-1/2 hover:bg-gray-700"
        onClick={prevSlide}
      >
        <ArrowLeft className='invert' width={200} height={250} />
      </button>
      <button
        className="absolute inset-y-1/2 right-0 z-10 p-1 h-full w-10 bg-gray-800 text-white shadow-lg transform -translate-y-1/2 hover:bg-gray-700"
        onClick={nextSlide}
      >
        <ArrowRight className='invert' width={200} height={250} />
      </button>
    </Card>
  );
};

export default Carousel;