import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CarouselImage {
  url: string;
  alt: string;
}

interface PageCarouselProps {
  images: CarouselImage[];
  height?: string;
}

const PageCarousel: React.FC<PageCarouselProps> = ({ 
  images, 
  height = "400px" 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef<number | null>(null);

  // Auto advance slides
  useEffect(() => {
    startSlideInterval();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentSlide]);

  const startSlideInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  if (images.length === 0) return null;

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      {/* Slides container */}
      <div className="relative h-full w-full">
        {images.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentSlide 
                ? "opacity-100 z-10 translate-x-0" 
                : index === (currentSlide - 1 + images.length) % images.length
                  ? "opacity-0 z-0 translate-x-full" 
                  : "opacity-0 z-0 -translate-x-full"
            )}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left text-xl"></i>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right text-xl"></i>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white w-10" 
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PageCarousel;