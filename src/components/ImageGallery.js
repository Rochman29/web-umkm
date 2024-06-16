import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { images } from "./images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageGallery() {
  return (
    <section className="bg-[#909090] min-h-[534px] rounded-b-3xl">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="h-[534px] w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.src}>
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover rounded-b-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
