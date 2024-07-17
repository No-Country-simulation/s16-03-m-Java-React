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
import Imageuser1 from "@/public/images/imageuser1.png";
import Imageuser2 from "@/public/images/imageuser2.png";
import Imageuser3 from "@/public/images/imageuser3.png";
import Imageuser4 from "@/public/images/imageuser4.png";
import Imageuser5 from "@/public/images/imageuser5.png";

const Section = () => {
  return (
    <section className="container px-4 lg:px-0">
      <h1 className=" mt-10 text-center text-3xl font-bold">
        Plantillas Totalmente Editables
      </h1>
      <p className="mt-10 text-center text-lg font-normal md:mx-28">
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
        <p className="mx-auto mt-10 text-center text-xl font-medium">
          Más de <strong>500 marcas eligen Cosmos</strong> para crear su tienda
          online.
        </p>
      </div>

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
            modifier: 5,
            slideShadows: false,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            821: {
              initialSlide: 2,
              slidesPerView: 4,
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
            <div className="border-primary  shadow-custom-purple  bg-primary-foreground mx-auto flex flex-col items-start justify-center rounded-lg border object-cover p-10">
              <p>
                Elegimos Cosmos porque es fácil de usar y amigable. Nosotros
                fuimos quienes creamos la tienda: seleccionamos el diseño,
                cargamos los productos. Y si teníamos dudas, veíamos los
                tutoriales.
              </p>
              <div className="mt-4 flex flex-row items-center">
                <Image
                  className="rounded-full"
                  src={Imageuser1}
                  alt="Imagen de usuario"
                  width={70}
                />
                <div className="mx-4 flex flex-col items-start justify-center">
                  <p className="font-semibold">Alejandra</p>
                  <p className="text-primary text-sm">Simona</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-primary   shadow-custom-purple  bg-primary-foreground mx-auto flex flex-col items-start justify-center rounded-lg border object-cover p-10">
              <p>
                Empezamos a llegar a personas que estaban cerca de nuestros
                locales físicos. Cosmos hizo que Woopy dejara de pensarse como
                una librería de barrio para convertirse en una a nivel nacional.
              </p>
              <div className="mt-4 flex flex-row items-center justify-start">
                <Image
                  className="rounded-full"
                  src={Imageuser2}
                  alt="Imagen de usuario "
                  width={70}
                />
                <div className="mx-4 flex flex-col items-start justify-center">
                  <p className="font-semibold">Juan Ignacio</p>
                  <p className="text-primary text-sm">Woopy</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-primary  shadow-custom-purple  bg-primary-foreground mx-auto flex flex-col items-start justify-center rounded-lg border object-cover p-10">
              <p>
                Decidimos usar Cosmos porque nos ofrecía la flexibilidad que
                necesitábamos. Pudimos personalizar cada detalle de nuestra
                landing page y, cuando tuvimos preguntas, el equipo de soporte
                nos ayudó rápidamente. Ahora nuestra presencia online ha
                mejorado significativamente.
              </p>
              <div className="mt-4 flex flex-row items-center">
                <Image
                  className="rounded-full"
                  src={Imageuser3}
                  alt="Imagen de usuario"
                  width={70}
                />
                <div className="mx-4 flex flex-col items-start justify-center">
                  <p className="font-semibold">Clara</p>
                  <p className="text-primary text-sm">ModaPlus</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-primary  shadow-custom-purple  bg-primary-foreground mx-auto flex flex-col items-start justify-center rounded-lg border object-cover p-10">
              <p>
                Gracias a Cosmos, hemos podido captar la atención de un público
                mucho más amplio. La plataforma es intuitiva y las opciones de
                diseño son infinitas. Pasamos de ser un pequeño negocio local a
                tener clientes en todo el país.
              </p>
              <div className="mt-4 flex flex-row items-center">
                <Image
                  className="rounded-full"
                  src={Imageuser4}
                  alt="Imagen de usuario"
                  width={70}
                />
                <div className="mx-4 flex flex-col items-start justify-center">
                  <p className="font-semibold">Martín</p>
                  <p className="text-primary text-sm">Techie World</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-primary  shadow-custom-purple  bg-primary-foreground mx-auto flex flex-col items-start justify-center rounded-lg border object-cover p-10">
              <p>
                Cosmos nos permitió diseñar una landing page que refleja
                perfectamente nuestra marca. La facilidad de uso y las
                herramientas disponibles nos hicieron el proceso muy sencillo,
                incluso sin tener conocimientos técnicos avanzados.
                ¡Definitivamente recomendamos Cosmos!
              </p>
              <div className="mt-4 flex flex-row items-center">
                <Image
                  className="rounded-full"
                  src={Imageuser5}
                  alt="Imagen de usuario"
                  width={70}
                />
                <div className="mx-4 flex flex-col items-start justify-center">
                  <p className="font-semibold">Laura</p>
                  <p className="text-primary text-sm">Gourmet Delights</p>
                </div>
              </div>
            </div>
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
    </section>
  );
};
export default Section;
