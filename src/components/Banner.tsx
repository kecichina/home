import React, { useState, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

// Banner data with multiple slides
const bannerSlides = [
  {
    title: "创新生物科技，引领健康未来",
    subtitle: "全球领先的塔格糖产业化解决方案提供商",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Biotechnology+lab+with+advanced+equipment+clean+bright+modern+science+laboratory&sign=e3e48732eb6876f46144ec07f3d1d2b2",
    ctaText: "了解更多",
    ctaLink: "/about"
  },
  {
    title: "突破技术壁垒，实现塔格糖工业化生产",
    subtitle: "产率提升至42%，纯度达到99.9%",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Biochemical+process+illustration+showing+industrial+production+of+tagatose&sign=db96bbd9f245ef02de6e0a40c1989794",
    ctaText: "探索技术",
    ctaLink: "/technology"
  },
  {
    title: "健康生活，从控制碳水开始",
    subtitle: "0升糖指数塔格糖，重新定义健康甜味",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Healthy+food+products+with+tagatose+ingredient+showcasing+healthy+lifestyle&sign=6f338857639efeee2a42bb28877fc0ab",
    ctaText: "查看产品",
    ctaLink: "/products"
  }
];

const Banner = () => {
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
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
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

  const currentBanner = bannerSlides[currentSlide];

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Slides container */}
      <div className="relative h-full w-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentSlide 
                ? "opacity-100 z-10 translate-x-0" 
                : index === (currentSlide - 1 + bannerSlides.length) % bannerSlides.length
                  ? "opacity-0 z-0 translate-x-full" 
                  : "opacity-0 z-0 -translate-x-full"
            )}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Slide content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl" data-aos="fade-up">
  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight animate-[fadeIn_1s_ease-in-out]">
    {slide.title}
  </h1>
  <p className="text-base md:text-xl text-gray-100 mb-8 animate-[fadeIn_1.2s_ease-in-out]">
    {slide.subtitle}
  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-[fadeIn_1.4s_ease-in-out]"
                  >
                    {slide.ctaText}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
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
        {bannerSlides.map((_, index) => (
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>
    </section>
  );
};

export default Banner;