"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

type CardData = {
  id: number;
  title: string;
  count: number;
  color: string;
  textColor: string;
  rotate: string;
  translateY: string;
  translateX: string;
};

const cards: CardData[] = [
  {
    id: 1,
    title: "Designers",
    count: 3,
    color: "#38eac4",
    textColor: "#156b59",
    rotate: "-18deg",
    translateY: "35px",
    translateX: "-160px",
  },
  {
    id: 2,
    title: "Entwickler",
    count: 2,
    color: "#fbed37",
    textColor: "#8a7f05",
    rotate: "-9deg",
    translateY: "15px",
    translateX: "-80px",
  },
  {
    id: 3,
    title: "SEO-Spezialist",
    count: 1,
    color: "#938df9",
    textColor: "#3b3486",
    rotate: "0deg",
    translateY: "0px",
    translateX: "0px",
  },
  {
    id: 4,
    title: "Projektmanager / CEO",
    count: 1,
    color: "#fc8f62",
    textColor: "#8f3816",
    rotate: "9deg",
    translateY: "15px",
    translateX: "80px",
  },
  {
    id: 5,
    title: "Copywriting-Spezialist",
    count: 1,
    color: "#f661bd",
    textColor: "#8a1a60",
    rotate: "18deg",
    translateY: "35px",
    translateX: "160px",
  },
];

const Cards: React.FC = () => {
  const cardsdRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsdRef.current, {
      y: 200,
      x: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      repeat: -1,
    });
  }, []);
  return (
    <div className="bg-white w-full  pt-24 rounded-t-[200px]">
      <div className="flex flex-col  min-h-screen w-full  px-4 items-center justify-center overflow-hidden mx-auto">
        {/* heading and paragraph */}

        <div className="flex flex-col gap-2 items-center justify-center max-w-7xl">
          <h1 className="max-w-[697px] text-center font-bold text-[32px] md:text-[42px] text-[#000D0D]">
            Berlin-based kreative Design und Entwicklungsagentur
          </h1>
          <p className="max-w-[722px] text-center text-[16px] font-normal text-[#4E4E4E]">
            {" "}
            Wir entwickeln extrem moderne, hochwertig gestaltete Websites, die
            Unternehmen helfen, sich abzuheben, sichtbar zu werden und ihre
            Ziele zu erreichen.
          </p>
        </div>

        {/* cards */}
        <div className="relative block h-[500px] w-[600px] scale-[0.55] sm:scale-100">
          {cards.map((card, index) => (
            <div
              ref={(el) => {
                if (el) cardsdRef.current[index] = el;
              }}
              key={card.id}
              className={`
              absolute left-0 right-0 mx-auto top-10
              flex h-[360px] w-full max-w-[280px] flex-col justify-between 
              overflow-hidden rounded-2xl border border-white/20 p-6 shadow-2xl 
            `}
              style={
                {
                  backgroundColor: card.color,
                  color: card.textColor,
                  "--rotate": card.rotate,
                  "--x": card.translateX,
                  "--y": card.translateY,
                  zIndex: 10 - index,
                } as React.CSSProperties
              }
            >
              <style jsx>{`
                div[style*="--rotate"] {
                  transform: translateX(var(--x)) translateY(var(--y))
                    rotate(var(--rotate));
                }
              `}</style>

              {/* --- TOP HEADER --- */}
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight opacity-90">
                  {card.title}
                </h3>

                <div className="relative h-[1px] w-full bg-current opacity-40">
                  <span
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-sm"
                    style={{ backgroundColor: card.color }}
                  >
                    ✦
                  </span>
                </div>
              </div>

              {/* --- BOTTOM SECTION --- */}
              <div className="relative h-full w-full ">
                {/* <img
                    src="/cards/velmoyVector.svg"
                    alt="Velmoy Development"
                    className="absolute bottom-6 left-6 origin-bottom-left -rotate-90 h-6 w-auto opacity-50 grayscale mix-blend-multiply "
                  /> */}
                <div
                  className=" absolute bottom-6 left-6 origin-bottom-left z-30 text-xs font-bold uppercase tracking-widest leading-tightopacity-60"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <span className="block">Velmoy</span>
                  <span className="block">Development</span>
                </div>

                <span
                  className={` ${Satoshi.className} absolute -bottom-4 -right-0 text-[200px] font-black leading-none tracking-tighter opacity-90 mix-blend-multiply`}
                >
                  {card.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
