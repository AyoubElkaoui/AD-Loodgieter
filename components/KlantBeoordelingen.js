'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import reviews from './reviews.json';

export default function KlantBeoordelingen() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="mt-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between h-full">
                <div>
                  <p className="text-lg text-white font-medium text-gray-800 mb-2">{review.author_name}</p>
                  <div className="flex justify-center items-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.547 1.632 8.147L12 18.896l-7.568 4.104L6.064 14.853.001 9.307l8.332-1.151z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2 text-white">{review.text}</p>
                </div>
                <p className="text-sm text-gray-500 italic mt-4 ">Google Review</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
