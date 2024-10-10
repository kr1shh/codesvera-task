import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (!domLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="mySwiper"
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <button 
        onClick={handlePrev}
        className="group hover:bg-accent hover:border-accent absolute right-14 bottom-[-80px] transform -translate-y-1/2 z-10 bg-transparent border border-text_primary rounded-full p-2 transition-colors duration-200"
      >
        <FaArrowLeft className="text-2xl group-hover:text-white text-text_primary" />
      </button>
      <button 
        onClick={handleNext}
        className="group hover:bg-accent hover:border-accent absolute right-0 bottom-[-80px] transform -translate-y-1/2 z-10 bg-transparent border border-text_primary rounded-full p-2 transition-colors duration-200"
      >
        <FaArrowRight className="text-2xl group-hover:text-white text-text_primary" />
      </button>
    </div>
  );
};

export default Carousel;