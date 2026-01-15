"use client";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import call from "../../public/getInTouch/call.svg";
import msg from "../../public/getInTouch/msg.svg";
import location from "../../public/getInTouch/location.svg";
import arrow from "../../public/getInTouch/arrow.svg";

export const Inter = localFont({
  src: "../fonts/inter/static/Inter_18pt-Regular.ttf",
  variable: "--font-inter",
});

export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

gsap.registerPlugin(ScrollTrigger);
const GetInTouch = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;
    const animation = gsap.set(textRef.current, { scale: 1, rotate: 0 });
    gsap.to(textRef.current, {
      scale: 2.5,

      rotate: -35,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "bottom center",
        scrub: 2,
        pin: true,
      },
    });

    return () => {
      animation.kill();
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill(); // kills the scroll trigger
      }
    };
  }, []);

  const contactOptions = [
    {
      id: 1,
      img: msg,
      title: "email",
      details: "hello@exmaple.com",
    },
    {
      id: 2,
      img: call,
      title: "phone",
      details: "+00 123 4567 8920",
    },
    {
      id: 3,
      img: location,
      title: "Address",
      details: "Example address, 72500 Reveneu",
    },
  ];

  return (
    <>
      <div className="">
        {/* Animated text */}
        <div
          ref={sectionRef}
          className="bg-[#1F1F25] max-w-[1449px] h-full min-h-[540px] sm:min-h-[740px] flex items-center    justify-center overflow-hidden "
        >
          <h1
            ref={textRef}
            className={`text-center px-6 max-w-[673px] ${Satoshi.className} font-bold text-[40px] sm:text-[70px] text-[#5b6061]`}
          >
            Interesse?{" "}
            <span className="text-white">Melde dich doch bei uns</span>
          </h1>
        </div>

        {/* contact form */}

        <div className="bg-[#021F24] max-w-[1449px] min-h-[740px] grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-12 px-4  py-20 place-items-center ">
          {/* left side */}
          <div className="col-span-1 flex flex-col gap-12  ">
            {/* heading */}
            <h1
              className={`${Inter.className} text-[22px] font-semibold text-white max-w-[370px]`}
            >
              Bereit zum Abheben?{" "}
              <span className="text-[#A5AFAF] font-normal">
                Teile deine Ideen mit uns wir helfen dir, sie zum Leben zu
                erwecken.
              </span>
            </h1>

            {/* center line */}
            <div className="md:hidden border border-[#FFFFFF1A]"></div>

            {/* contactOptions */}
            <div className="flex flex-col gap-8">
              {/* option */}
              {contactOptions.map((contact) => (
                <div key={contact.id} className="w-full flex gap-4">
                  {/* image */}
                  <div className="bg-[#FFFFFF1A] w-[31px] h-[31px] rounded-full flex items-center justify-center">
                    <Image alt={contact.title} src={contact.img} />
                  </div>

                  <div className="w-full h-[32px] flex flex-col justify-between ">
                    <h1
                      className={`${Inter.className} font-normal text-[9.92px] text-[#A5AFAF]`}
                    >
                      {contact.title}
                    </h1>
                    <h1
                      className={`${Satoshi.className} font-bold text-[13.23px] text-white`}
                    >
                      {contact.details}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="col-span-1">
            <form
              action=""
              className="flex flex-col gap-8  w-full  lg:w-[450px]  justify-center min-h-[500px] rounded-[25px] border-[1.64px] border-[#2AFFDF] mx-auto px-4 sm:px-8 "
            >
              {/* Name */}
              <div className="pb-2 border-b-[0.82px] border-b-[#1B3539]">
                <h1
                  className={`${Inter.className} font-normal text-[10px] text-[#A5AFAF]`}
                >
                  Name
                </h1>
                <input
                  type="text"
                  placeholder="Max Mustermann"
                  className={`${Inter.className} font-normal placeholder:text-[16px] placeholder:text-white focus:border-none focus:outline-none
                    `}
                />
              </div>

              {/* Telefonnummer */}
              <div className="pb-2 border-b-[0.82px] border-b-[#1B3539] relative">
                <h1
                  className={`${Inter.className} font-normal text-[10px] text-[#A5AFAF]`}
                >
                  Telefonnummer
                </h1>

                {/* Fake Placeholder */}
                {phone === "" && (
                  <span className="absolute left-0 bottom-0 text-[16px] pointer-events-none pb-2">
                    <span className="text-[#A5AFAF]">+00 </span>
                    <span className="text-white">245 6467</span>
                  </span>
                )}

                {/* Real Input */}
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${Inter.className}  bg-transparent  outline-none  w-full  text-white   text-[16px]`}
                />
              </div>

              {/* Email */}
              <div className="pb-2 border-b-[0.82px] border-b-[#1B3539]">
                <h1
                  className={`${Inter.className} font-normal text-[10px] text-[#A5AFAF]`}
                >
                  Email
                </h1>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className={`${Inter.className} font-normal text-[16px] text-white focus:outline-none focus:border-none`}
                />
              </div>

              {/* Current Website (optional) */}
              <div className="pb-2 border-b-[0.82px] border-b-[#1B3539]">
                <h1
                  className={`${Inter.className} font-normal text-[10px] text-[#A5AFAF]`}
                >
                  Current Website (optional)
                </h1>
                <input
                  type="email"
                  placeholder="www.example.com"
                  className={`${Inter.className} font-normal text-[16px] text-white focus:outline-none focus:border-none`}
                />
              </div>

              {/* budget */}
              <div className="flex items-center justify-between">
                <h1
                  className={`${Inter.className} font-normal text-[10px] text-[#A5AFAF]`}
                >
                  Budget
                </h1>

                <div className="flex gap-2">
                  <div className="group flex items-center justify-center border-[0.68px] border-[#1B3539] rounded-[97.64px] w-[71.88px] h-[28.48px]  hover:bg-[#2AFFDF] cursor-pointer">
                    <h1
                      className={`${Inter.className} font-normal text-[10px] text-white  group-hover:text-[#021F24]`}
                    >
                      $2k - $5k
                    </h1>
                  </div>
                  <div className="group flex items-center justify-center border-[0.68px] border-[#1B3539] rounded-[97.64px] w-[71.88px] h-[28.48px] hover:bg-[#2AFFDF] cursor-pointer">
                    <h1
                      className={`${Inter.className} font-normal text-[10px]  group-hover:text-[#021F24] text-white`}
                    >
                      $5k - $10k
                    </h1>
                  </div>
                  <div className="group flex items-center justify-center border-[0.68px] border-[#1B3539] rounded-[97.64px] w-[71.88px] h-[28.48px]  hover:bg-[#2AFFDF] cursor-pointer">
                    <h1
                      className={`${Inter.className} font-normal text-[10px] group-hover:text-[#021F24] text-white`}
                    >
                      $10k+
                    </h1>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="flex items-center justify-center gap-2 w-[136px] h-[45px] rounded-full bg-white">
                {/* arrow */}
                <div className="w-[29px] h-[29px] rounded-[82px] bg-[#92E5BD] flex items-center justify-center">
                  <Image src={arrow} alt="arrow image" />
                </div>
                <h1
                  className={`${Satoshi.className} font-bold text-[12px] text-[#000D0D]`}
                >
                  Abschicken
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetInTouch;
