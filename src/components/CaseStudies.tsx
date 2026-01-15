"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import FlowLine2 from "./Flowline2";

const partners = [
  { name: "Figma", logo: "/logos/figma.png" },
  { name: "Perspective", logo: "/logos/perspective.png" },
  { name: "WeGrowth", logo: "/logos/wegrowth.png" },
  { name: "Leadfeed", logo: "/logos/leadfeed.png" },
  { name: "Pandadoc", logo: "/logos/pandadoc.png" },
];

const reviews = [
  {
    id: 1,
    text: "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
    author: "Marcus White",
    role: "CEO of some company",
    avatar: "https://i.pravatar.cc/50?img=12",
    logo: "/gtt-wireless.png",
  },
  {
    id: 2,
    text: "Ein absoluter Gamechanger für unser digitales Wachstum.",
    author: "Sarah Johnson",
    role: "Founder, Startup X",
    avatar: "https://i.pravatar.cc/50?img=32",
    logo: "/gtt-wireless.png",
  },
  {
    id: 3,
    text: "Professionell, kreativ und extrem zuverlässig.",
    author: "Daniel Lee",
    role: "Head of Marketing",
    avatar: "https://i.pravatar.cc/50?img=45",
    logo: "/gtt-wireless.png",
  },
  {
    id: 4,
    text: "Das beste Webdesign-Team, mit dem wir je gearbeitet haben.",
    author: "Emma Brown",
    role: "COO, Tech Corp",
    avatar: "https://i.pravatar.cc/50?img=56",
    logo: "/gtt-wireless.png",
  },
];

export default function CaseStudiesSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  // const [scale, setScale] = useState(0.5);
  const [yOffset, setYOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress from 0 → 1 while scrolling through section
      let p = (windowHeight - rect.top) / (windowHeight + rect.height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation values
  const scale = 0.1 + progress * 1.2; // zoom in
  const translateY = progress * 500; // move down with scroll
  const opacity = Math.min(progress * 1.5, 1);

  return (
    <>
      <section ref={sectionRef} className="relative py-5">
        {/* Scroll-Zoom Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-32 flex justify-center">
            <div
              ref={imageRef}
              className="relative h-96 md:h-[28rem] lg:h-[36rem] w-full max-w-4xl overflow-hidden rounded-3xl"
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                transition: "transform 0.05s ease-out",
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <Image
                src="/casestudy.png"
                alt="Case study showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative w-full bg-center bg-cover -mt-49 p-20"
        style={{ backgroundImage: "url('/back.png')", height: "1200px" }}
      >
        <FlowLine2 topOffset={0} />

        <section className="relative py-36 overflow-hidden pt-100">
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="mb-20 text-4xl font-semibold text-white">
              Erfolge unserer Zusammenarbeit
            </h2>

            {/* Navigation Arrows */}
            <div className="flex justify-end items-center gap-3 mb-8">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition">
                <span className="text-black text-xl">&#8249;</span>
              </button>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition">
                <span className="text-black text-xl">&#8250;</span>
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                768: { slidesPerView: 1.2 },
                1024: { slidesPerView: 2 },
              }}
              className="!overflow-visible"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex h-[420px] rounded-3xl overflow-hidden shadow-xl">
                    {/* LEFT: Testimonial */}
                    <div className="w-1/2 bg-white/5 backdrop-blur-md text-white p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-orange-400 text-xl mb-4">
                          ★★★★★
                        </div>
                        <p className="italic text-base leading-relaxed">
                          “{item.text}”
                        </p>
                      </div>

                      <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium">{item.author}</p>
                          <p className="text-sm text-white/60">{item.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT: Logo / Image */}
                    <div className="w-1/2 bg-white flex items-center justify-center rounded-tl-2xl rounded-bl-2xl overflow-hidden">
                      <Image
                        src={item.logo}
                        alt="Company logo"
                        width={300}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
