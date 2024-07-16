"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Button } from "@/components/ui/button";
import Bannerimg1 from "@/public/images/Bannerimg1.png";
import Bannerimg2 from "@/public/images/Bannerimg2.png";
import Bannerimg3 from "@/public/images/Bannerimg3.png";
import Reseña1 from "@/public/images/Reseña1.png";
import Reseña2 from "@/public/images/Reseña2.png";

const Section = () => {
  return (
    <section className="container px-4 lg:px-0">
      <h1 className=" mt-10 text-center text-3xl font-bold">
        Plantillas Totalmente Editables
      </h1>
      <p className="mx-20 mt-20 text-justify text-lg font-normal">
        Elegí entre{" "}
        <strong>
          más de 100 plantillas web gratuitas y totalmente personalizables
        </strong>
        , diseñadas estratégicamente para cada sector.{" "}
        <strong>Crea la landing page de tus sueños</strong> y comenzá a crecer.
      </p>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          initialSlide={0}
          coverflowEffect={{
            rotate: 0,
            stretch: -15,
            depth: 80,
            modifier: 3,
            slideShadows: true,
          }}
          breakpoints={{
            821: {
              initialSlide: 1,
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".template-next-button",
            prevEl: ".template-prev-button",
            disabledClass: "opacity-0",
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper !relative !py-20"
        >
          <SwiperSlide>
            <Image
              className="mx-auto aspect-video w-[770px] items-center rounded-2xl object-cover shadow-xl"
              src={Bannerimg1}
              alt="Image form 1"
              width={580}
              height={580}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto aspect-video w-[770px] items-center rounded-2xl  object-cover shadow-xl"
              src={Bannerimg2}
              alt="Image form 2"
              width={580}
              height={580}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="mx-auto aspect-video w-[770px] items-center rounded-2xl  object-cover shadow-xl"
              src={Bannerimg3}
              alt="Image form 3"
              width={580}
              height={580}
            />
          </SwiperSlide>
          <Button
            variant="ghost"
            size="icon"
            className="-translate-1/2 template-prev-button absolute left-0 top-1/2 z-10 rounded-full"
          >
            <ChevronLeft className="text-primary" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="-translate-1/2 template-next-button absolute right-0 top-1/2 z-10 rounded-full"
          >
            <ChevronRight className="text-primary" />
          </Button>
        </Swiper>
      </div>
      <div className="flex flex-col">
        <p className="mx-auto mt-20 text-center text-xl font-medium">
          Más de <strong>500 marcas eligen Cosmos</strong> para crear su tienda
          online.
        </p>

        <div className="relative my-5 flex flex-row items-center px-16 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={0}
            coverflowEffect={{
              rotate: 0,
              stretch: -30,
              depth: 200,
              modifier: 4,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              821: {
                initialSlide: 1,
                slidesPerView: 4,
              },
            }}
            navigation={{
              nextEl: ".template-next-button",
              prevEl: ".template-prev-button",
              disabledClass: "opacity-0",
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="mySwiper !relative w-full !py-20"
          >
            <SwiperSlide className="swiper-slide-custom flex items-center justify-center">
              <Image
                className="items-center object-cover"
                src={Reseña1}
                alt="Reseña 1"
                width={380}
                height={380}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom flex items-center justify-center">
              <Image
                className="items-center object-cover"
                src={Reseña2}
                alt="Reseña 2"
                width={380}
                height={380}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom flex items-center justify-center">
              <Image
                className="items-center object-cover"
                src={Reseña1}
                alt="Reseña 1"
                width={380}
                height={380}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom flex items-center justify-center">
              <Image
                className="items-center object-cover"
                src={Reseña2}
                alt="Reseña 2"
                width={380}
                height={380}
              />
            </SwiperSlide>

            <Button
              variant="ghost"
              size="icon"
              className="-translate-1/2 template-prev-button absolute left-0 top-1/2 z-10 rounded-full"
            >
              <ChevronLeft className="text-primary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="-translate-1/2 template-next-button absolute right-0 top-1/2 z-10 rounded-full"
            >
              <ChevronRight className="text-primary" />
            </Button>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Section;
