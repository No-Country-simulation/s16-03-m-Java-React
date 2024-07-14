"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import Bannerimg1 from "@/public/images/Bannerimg1.png";
import Bannerimg2 from "@/public/images/Bannerimg2.png";
import Bannerimg3 from "@/public/images/Bannerimg3.png";
import Reseña1 from "@/public/images/Reseña1.png";
import Reseña2 from "@/public/images/Reseña2.png";

const Section = () => {
  return (
    <section>
      <div className="my-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              className="mx-auto items-center"
              src={Bannerimg1}
              alt="Image form 1"
              width={580}
              height={580}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto items-center"
              src={Bannerimg2}
              alt="Image form 2"
              width={580}
              height={580}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto items-center"
              src={Bannerimg3}
              alt="Image form 3"
              width={580}
              height={580}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col">
        <p className="mx-auto mt-20  text-center text-xl font-semibold">
          Más de 500 marcas eligen Cosmos para crear su tienda online.
        </p>
        <div className=" mx-auto my-10 flex flex-row items-center">
          <ArrowLeft className="text-primary cursor-pointer" />
          <Image
            className="mx-6 items-center"
            src={Reseña1}
            alt="Reseña 1"
            width={480}
            height={480}
          />
          <Image
            className="mx-6 items-center"
            src={Reseña2}
            alt="Reseña 2"
            width={480}
            height={480}
          />
          <ArrowRight className="text-primary cursor-pointer" />
        </div>
      </div>
    </section>
  );
};
export default Section;
