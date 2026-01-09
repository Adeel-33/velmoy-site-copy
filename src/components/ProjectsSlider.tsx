"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

const projects = [
  { src: "/projects/1.png", alt: "Project 1" },
  { src: "/projects/2.png", alt: "Project 2" },
  { src: "/projects/3.png", alt: "Project 3" },
  { src: "/projects/4.png", alt: "Project 4" },
];
const infiniteProjects = [...projects, ...projects, ...projects];


export default function ProjectsSlider() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="mb-8 sm:mb-12 md:mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#021618]">
            Ausgewählte Projekte
          </h2>
          <p className="mt-2 max-w-xl text-xs sm:text-sm md:text-base text-[#021618]/60">
            Websites, die Marken definieren, Vertrauen aufbauen und messbare
            Ergebnisse liefern.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          breakpoints={{
            640: {
              spaceBetween: 40,
            },
            768: {
              spaceBetween: 60,
            },
            1024: {
              spaceBetween: 80,
            },
          }}
          loop
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          grabCursor
          className="projects-swiper"
        >
          {infiniteProjects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-[280px] sm:!w-[320px] md:!w-[400px] lg:!w-[480px]"
            >
              <div className="project-3d">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black/30 group cursor-pointer">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
                    quality={100}
                    priority={index < 4}
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}