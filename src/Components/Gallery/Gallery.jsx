import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import G1 from "../../assets/gallery/G-1.webp";
import G2 from "../../assets/gallery/G-2.webp";
import G3 from "../../assets/gallery/G-3.webp";
import G4 from "../../assets/gallery/G-4.webp";
import G5 from "../../assets/gallery/G-5.webp";
import G6 from "../../assets/gallery/G-6.webp";
import G7 from "../../assets/gallery/G-7.webp";
import G8 from "../../assets/gallery/G-8.webp";
import G9 from "../../assets/gallery/G-9.webp";

// Example gallery images
const galleryImages = [G1, G2, G3, G4, G5, G6, G7, G8, G9];

const Gallery = () => {
  return (
    <section className="py-16 bg-[#111111] text-white" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#C0A062] mb-12">
          Explore Our Gallery
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
