"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import localFont from "next/font/local";

export const Inter = localFont({
  src: "../fonts/inter/static/inter_18pt-Regular.ttf",
  variable: "--font-inter",
});

export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

const projects = [
  { src: "/projects/1.png", alt: "Project 1" },
  { src: "/projects/2.png", alt: "Project 2" },
  { src: "/projects/3.png", alt: "Project 3" },
  { src: "/projects/4.png", alt: "Project 4" },
];

const infiniteProjects = [...projects, ...projects, ...projects];

export default function ProjectsSlider() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 text-left">
          <h2
            className={`${Satoshi.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#021618] leading-tight`}
          >
            Ausgewählte Projekte
          </h2>
          <p
            className={`${Inter.className} mt-2 max-w-[657px] text-[10px] xs:text-xs sm:text-sm md:text-base text-[#4E4E4E] leading-relaxed`}
          >
            Websites, die Marken definieren, Vertrauen aufbauen und messbare Ergebnisse liefern.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          spaceBetween={40}
          speed={800} // transition speed
          autoplay={{
            delay: 2000, // time before moving to next slide
            disableOnInteraction: false,
          }}
          grabCursor={true}
          className="projects-swiper"
        >
          {infiniteProjects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-[280px] xs:!w-[320px] sm:!w-[400px] md:!w-[500px] lg:!w-[600px] xl:!w-[700px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl cursor-pointer">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: "scale(0.8)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .projects-swiper .swiper-slide-active img {
          transform: scale(1.15); /* only center slide zooms in */
        }
      `}</style>
    </section>
  );
}




// export default function ProjectsSlider() {
//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">

//         <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 text-left px-2 sm:px-0">
//           <h2 className={`${Satoshi.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#021618] leading-tight  `}>
//             Ausgewählte Projekte
//           </h2>
//           <p className={`${Inter.className} mt-1 sm:mt-2 max-w-[657px] text-[10px] xs:text-xs sm:text-sm md:text-base text-[#4E4E4E]  leading-relaxed`}>
//             Websites, die Marken definieren, Vertrauen aufbauen und messbare Ergebnisse liefern.
//           </p>
//         </div>

//         <Swiper
//           modules={[Autoplay, FreeMode]}
//           slidesPerView="auto"
//           centeredSlides={true}
//           spaceBetween={20}
//           breakpoints={{
//             320: {
//               spaceBetween: 20,
//             },
//             480: {
//               spaceBetween: 25,
//             },
//             640: {
//               spaceBetween: 30,
//             },
//             768: {
//               spaceBetween: 40,
//             },
//             1024: {
//               spaceBetween: 50,
//             },
//             1280: {
//               spaceBetween: 70,
//             },
//             1536: {
//               spaceBetween: 90,
//             },
//           }}
//           loop={true}
//           freeMode={{
//             enabled: false,
//           }}
//           speed={8000}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//             reverseDirection: false,
//           }}
//           grabCursor={true}
//           allowTouchMove={true}
//           touchEventsTarget="container"
//           watchSlidesProgress={true}
//           className="projects-swiper"
//         >
//           {infiniteProjects.map((project, index) => (
//             <SwiperSlide
//               key={index}
//               className="!w-[280px] xs:!w-[320px] sm:!w-[400px] md:!w-[500px] lg:!w-[600px] xl:!w-[700px]"
//             >
//               <div className="project-3d">
//                 <div className="relative aspect-[16/9] overflow-hidden rounded-2xl group cursor-pointer">
//                   <img
//                     src={project.src}
//                     alt={project.alt}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                     style={{
//                       filter: 'none',
//                       opacity: 1
//                     }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }





