"use client";
import localFont from "next/font/local";
export const Inter = localFont({
  src: "../fonts/inter/static/Inter_18pt-Regular.ttf",
  variable: "--font-inter",
});

export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

import Image from "next/image";
import stars from "../../public/caseStudies/stars.svg";
import user from "../../public/caseStudies/user.svg";
import pepsi from "../../public/caseStudies/pepsi.svg";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import user2 from "../../public/caseStudies/user2.svg";

import curved from "../../public/caseStudies/curved.svg";

gsap.registerPlugin(ScrollTrigger);
const CaseStudies = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pepsiCardRef = useRef<HTMLDivElement>(null);
  // cards animation
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const row3 = row3Ref.current;

    if (!row1 || !row2 || !row3) return;

    const totalWidth1 = row1.scrollWidth / 2;
    const totalWidth2 = row2.scrollWidth / 2;
    const totalWidth3 = row3.scrollWidth / 2;
    // animation for row 1
    gsap.to(row1, {
      x: -totalWidth1,
      duration: 40, // speed of animation
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const val = parseFloat(x) % totalWidth1;
          return `${val}px`;
        },
      },
    });
    // animation for row 2
    gsap.to(row2, {
      x: totalWidth2,
      duration: 40, // speed of animation
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const val = parseFloat(x) % totalWidth2;
          return `${val - totalWidth2}px`;
        },
      },
    });
    // animation for row 3
    gsap.to(row3, {
      x: -totalWidth3,
      duration: 40, // speed of animation
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const val = parseFloat(x) % totalWidth3;
          return `${val}px`;
        },
      },
    });
  }, []);
  const reviews = [
    {
      id: 1,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 2,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 3,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 4,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 5,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 6,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
    {
      id: 7,
      comment:
        "Maximilian hat die Webdesign-Branche in nur drei Jahren revolutioniert.",
      name: "Marcus White",
      position: "CEO of some company",
      img: user,
    },
  ];
  // pepsi card animation
  useEffect(() => {
    if (!pepsiCardRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(
      pepsiCardRef.current,
      {
        rotateY: 180,
        duration: 2,
      },
      0,
    );
  }, []);
  return (
    <>
      <div className="w-full ">
        {/* bg Image */}
        <div className="w-full h-[80px] sm:h-[150px] md:h-[250px]  2xl:h-[380px] ">
          <Image src={curved} alt="triangle" className="block" />
        </div>

        <div ref={containerRef} className="bg-[#1F1F25] w-full relative">
          <div className="min-h-[816px] flex flex-col w-full gap-12 pt-16 overflow-hidden">
            {/* heading */}
            <div className="flex flex-col gap-1 px-6 sm:px-10 md:px-14">
              <h1
                className={`${Satoshi.className} font-bold  text-[28px] sm:[32px] lg:text[42px] text-white`}
              >
                Erfolge unserer
              </h1>
              <h1
                className={`${Satoshi.className} font-bold  text-[28px] sm:[32px] lg:text[42px] text-white`}
              >
                Zusammenarbeit
              </h1>
            </div>

            {/* infinite scroll card */}
            <div className="flex flex-col gap-4">
              {/* reviews  row 1*/}

              <div ref={row1Ref} className="flex gap-8 flex-nowrap ">
                {/* review */}
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="w-[283px] backdrop-blur-[35.3px] bg-[#28283080] flex flex-col gap-4 px-6 py-4 rounded-[11.3px] "
                  >
                    {/* comment */}
                    <div className="flex flex-col gap-2 ">
                      <Image src={stars} alt="stars" width={72} height={12} />
                      <h1
                        className={`${Inter.className} font-normal text-[11.19px] text-[#FBFBFB] italic`}
                      >
                        {review.comment}
                      </h1>
                    </div>
                    {/* center line */}
                    <div className="w-[221px] border-[0.71px] border-[#FFFFFF1A]"></div>
                    {/* user */}
                    <div className="flex gap-2">
                      <Image
                        src={review.img}
                        alt="user"
                        width={26}
                        height={26}
                      />
                      <div className="flex flex-col gap-1">
                        <h1
                          className={`${Satoshi.className} font-bold text-[9.53px] text-[#FFFFFF]`}
                        >
                          {review.name}
                        </h1>
                        <p
                          className={`${Inter.className} font-normal text-[7.53px] text-[#FBFBFB]`}
                        >
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* reviews row 2*/}

              <div ref={row2Ref} className="flex gap-8 ">
                {/* review */}
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="w-[283px] backdrop-blur-[35.3px] bg-[#28283080] flex flex-col gap-4 px-6 py-4 rounded-[11.3px] "
                  >
                    {/* comment */}
                    <div className="flex flex-col gap-2 ">
                      <Image src={stars} alt="stars" width={72} height={12} />
                      <h1
                        className={`${Inter.className} font-normal text-[11.19px] text-[#FBFBFB] italic`}
                      >
                        {review.comment}
                      </h1>
                    </div>
                    {/* center line */}
                    <div className="w-[221px] border-[0.71px] border-[#FFFFFF1A]"></div>
                    {/* user */}
                    <div className="flex gap-2">
                      <Image
                        src={review.img}
                        alt="user"
                        width={26}
                        height={26}
                      />
                      <div className="flex flex-col gap-1">
                        <h1
                          className={`${Satoshi.className} font-bold text-[9.53px] text-[#FFFFFF]`}
                        >
                          {review.name}
                        </h1>
                        <p
                          className={`${Inter.className} font-normal text-[7.53px] text-[#FBFBFB]`}
                        >
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* reviews row 3*/}

              <div ref={row3Ref} className="flex gap-8 ">
                {/* review */}
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="w-[283px] backdrop-blur-[35.3px] bg-[#28283080] flex flex-col gap-4 px-6 py-4 rounded-[11.3px]"
                  >
                    {/* comment */}
                    <div className="flex flex-col gap-2 ">
                      <Image src={stars} alt="stars" width={72} height={12} />
                      <h1
                        className={`${Inter.className} font-normal text-[11.19px] text-[#FBFBFB] italic`}
                      >
                        {review.comment}
                      </h1>
                    </div>
                    {/* center line */}
                    <div className="w-[221px] border-[0.71px] border-[#FFFFFF1A]"></div>
                    {/* user */}
                    <div className="flex gap-2">
                      <Image
                        src={review.img}
                        alt="user"
                        width={26}
                        height={26}
                      />
                      <div className="flex flex-col gap-1">
                        <h1
                          className={`${Satoshi.className} font-bold text-[9.53px] text-[#FFFFFF]`}
                        >
                          {review.name}
                        </h1>
                        <p
                          className={`${Inter.className} font-normal text-[7.53px] text-[#FBFBFB]`}
                        >
                          {review.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Central Pepsi Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [perspective:1000px]">
              <div
                ref={pepsiCardRef}
                className="relative w-[300px] h-[381px] md:w-[384px] md:h-[488px] transition-transform  [transform-style:preserve-3d]"
              >
                {/* Pepsi Card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  {/* bg white */}
                  <div className="w-full h-full rounded-[30px] bg-[#F8F8FA] flex items-center justify-center">
                    {/* content */}
                    <div className="w-[92%] h-[92%] rounded-[24px] bg-[#28458E] flex items-center justify-center">
                      <Image src={pepsi} alt="pepsi image" />
                    </div>
                  </div>
                  {/* floating cards */}
                  {/* Card 1 Front */}
                  <div className="absolute z-40 top-4 -left-6 w-[148px] h-[64px] md:top-20 md:-left-40 md:w-[204px] md:h-[87px] bg-white rounded-[12px] flex flex-col justify-center px-8 shadow-xl">
                    <h1
                      className={`${Satoshi.className} font-bold text-[16px] text-[#000D0D]`}
                    >
                      PepsiCo
                    </h1>
                    <p
                      className={`${Inter.className} font-normal text-[12px] text-[#4E4E4E]`}
                    >
                      Deutschland GmbH
                    </p>
                  </div>

                  {/* Card 2 Front */}
                  <div className="absolute z-40 top-20 -right-6 h-[77px] w-[201px] md:top-42 md:-right-56 lg:top-42 lg:-right-65 md:w-[307px] md:h-[107px] bg-white rounded-[12px] flex flex-col justify-center px-8 shadow-xl">
                    <Image src={stars} alt="stars" />
                    <p
                      className={`${Inter.className} font-normal text-[12px] text-[#4E4E4E]`}
                    >
                      Velmoy hat uns noch nie enttäuscht.
                    </p>
                  </div>

                  {/* Card 3 Front */}
                  <div className="absolute z-40 -bottom-10 -left-6 md:-bottom-16 md:-left-44 w-[302px] h-[120px] md:w-[399px] md:h-[198px] bg-white rounded-[12px] flex flex-col p-4 md:py-8 md:px-16 shadow-xl">
                    <p
                      className={`${Inter.className} font-normal text-[12px] text-[#4E4E4E]`}
                    >
                      "Extrem moderne, hervorragend gestaltete Websites, die
                      Marken hervorheben und Conversions steigern."
                    </p>
                  </div>
                </div>

                {/* User Image */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {/* bg white */}
                  <div className="w-full h-full rounded-[30px] bg-[#F8F8FA] flex items-center justify-center">
                    {/* content */}
                    <div className="w-[92%] h-[92%]">
                      <Image src={user2} alt="user image" />
                    </div>
                  </div>
                  {/* floating cards */}
                  {/* Card 1 Front */}
                  <div className="absolute z-40 top-4 -left-6 w-[148px] h-[72px] md:top-20 md:-left-40 md:w-[204px] md:h-[87px] bg-white rounded-[12px] flex flex-col justify-center px-8 shadow-xl">
                    <h1
                      className={`${Satoshi.className} font-bold text-[12px] md:text-[16px] text-[#000D0D]`}
                    >
                      Maurice Impriam
                    </h1>
                    <p
                      className={`${Inter.className} font-normal text-[10px] md:text-[12px] text-[#4E4E4E]`}
                    >
                      Beeindruckender CEO
                    </p>
                  </div>

                  {/* Card 2 Front */}
                  <div className="absolute z-40 top-20 -right-6 h-[77px] w-[201px] md:top-42 md:-right-52 lg:top-42 lg:-right-65 md:w-[307px] md:h-[107px] bg-white rounded-[12px] flex flex-col justify-center px-8 shadow-xl">
                    <Image src={stars} alt="stars" />
                    <p
                      className={`${Inter.className} font-normal text-[12px] text-[#4E4E4E]`}
                    >
                      Velmoy hat uns noch nie enttäuscht.
                    </p>
                  </div>

                  {/* Card 3 Front */}
                  <div className="absolute z-40 -bottom-10 -left-6 md:-bottom-16 md:-left-44 w-[302px] h-[120px] md:w-[399px] md:h-[198px] bg-white rounded-[12px] flex flex-col p-4 md:py-8 md:px-16 shadow-xl">
                    <p
                      className={`${Inter.className} font-normal text-[12px] text-[#4E4E4E]`}
                    >
                      "Die erste Zusammenarbeit entstand vor 2 Jahren, und
                      seitdem ist Velmoy mein Ansprechpartner, dem ich vertraue.
                      Egal, ob bei kleinen oder großen Projekten, sie liefern
                      immer A+-Leistung."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudies;
