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
import velmoyLogo from "../../public/footer/velmoyLogo.svg";
import fb from "../../public/footer/fb.svg";
import insta from "../../public/footer/insta.svg";
import twitter from "../../public/footer/twitter.svg";
import { link } from "fs";
import { title } from "process";
const Footer = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Projekte",
    },
    {
      id: 3,
      title: "Leistungen",
    },
    {
      id: 4,
      title: "Kundenstimmen",
    },
    {
      id: 5,
      title: "Partner",
    },
    {
      id: 6,
      title: "Über uns",
    },
    {
      id: 7,
      title: "FAQ",
    },
  ];
  const socialLinks = [
    {
      id: 1,
      img: fb,
      title: "Facebook",
      width: 8,
      heigth: 14,
    },
    {
      id: 2,
      img: insta,
      title: "instagram",
      width: 16,
      heigth: 16,
    },
    {
      id: 3,
      img: twitter,
      title: "twitter",
      width: 16,
      heigth: 16,
    },
  ];
  return (
    <>
      <div className=" mb-4 w-[calc(100vw-12px)] md:w-[calc(100vw-24px)] lg:w-[calc(100vw-32px)] min-h-[254px] rounded-[40px] bg-[#F8F8FA] flex flex-col gap-12 md:gap-0  justify-around px-4 md:px-8 lg:px-16 py-4 md:py-0 ">
        {/* logo and nav links */}
        <div className="w-full flex flex-col-reverse md:flex-row  justify-between items-center gap-12 md:gap-0">
          {/* logo */}
          <div>
            <Image
              src={velmoyLogo}
              alt="velmoy-site logo"
              width={212}
              height={44}
            />
          </div>

          {/* nav links */}
          <div className="flex flex-col md:flex-row items-center justify-center  gap-4">
            {navLinks.map((link) => (
              <h1
                key={link.id}
                className={`${Inter.className} font-normal text-[16px] text-[#000D0D] `}
              >
                {link.title}
              </h1>
            ))}
          </div>
        </div>

        {/* center line */}
        <div className="w-full max-w-[1216px]  border-t border-[#0000001A] mx-auto "></div>

        {/* copywrite and social links */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-0 md:justify-between">
          {/* copywrite */}
          <div className="text-center">
            <p
              className={`${Inter.className} font-normal text-[16px] text-[#4E4E4E] `}
            >
              © 2026 Velmoy Development. All rights reserved.
            </p>
          </div>

          {/* social links */}
          <div className="flex gap-3 ">
            {socialLinks.map((link) => (
              <div
                key={link.id}
                className=" hover:bg-[#2AFFDF] border border-[#000D0D1A] w-[40px] h-[40px] bg-[#F8F8FA] flex items-center justify-center rounded-full"
              >
                <Image
                  src={link.img}
                  alt={link.title}
                  width={link.width}
                  height={link.heigth}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
