"use client"

import Image from "next/image";
import gsap from "gsap";
import { useEffect,useRef } from "react";

const partners = [
  { src: "/partners/1.png", alt: "Eightball" },
  { src: "/partners/2.png", alt: "Alt+Shift" },
  { src: "/partners/3.png", alt: "Cubekit" },
  { src: "/partners/4.png", alt: "AlphaWave" },
  { src: "/partners/5.png", alt: "Acme Corp" },
  { src: "/partners/6.png", alt: "3Portals" },
];
const Partner=()=>{
    
    const trackRef = useRef(null);

    useEffect(() => {
      const track = trackRef.current;

      const width = track.scrollWidth / 2;

      const tween=gsap.to(track, {
      x: `-=${width}`,
      duration: 25,           // speed (increase = slower)
      ease: "none",
      repeat: -1,
      modifiers: {
       x: (x) => `${parseFloat(x) % width}px`,
       },
      });

      return ()=> tween.kill()
    }, []);


   return(<>
                   <div className="overflow-hidden relative w-full">
                     <div className="relative z-10 h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 py-2">
                    <div 
                     ref={trackRef}
                     className="w-max flex  items-center  gap-x-12 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 ">
                      {[...partners,...partners].map((partner, index) => (
                        <div
                          key={index}
                          className="relative h-5 w-14 xs:h-6 xs:w-16 sm:h-8 sm:w-20 md:h-10 md:w-28 lg:h-12 lg:w-32 flex items-center justify-center shrink-0"
                        >
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            fill
                            className="object-contain"
                            style={{ filter: 'brightness(0) invert(1)', opacity: 1 }}
                          />
                        </div>
                      ))}
                    </div>
                    </div>
                  </div>

   </>)

}

export default Partner