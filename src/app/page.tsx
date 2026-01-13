import Image from "next/image";
import FlowLine from "@/components/FlowLine";
// import Header from "@/components/header";
import ProjectsSlider from "@/components/ProjectsSlider";
import Link from "next/link";
import { Satoshi } from "./layout";
import { Inter } from "./layout";



import arrow from "../../public/values/arrow.svg"
import design from "../../public/values/design.svg"
import developement from "../../public/values/developement.svg"
import camera from "../../public/values/camera.svg"
import seo from "../../public/values/seo.svg"
import copywriting from "../../public/values/copywrite.svg"
import strategies from "../../public/values/strategies.svg"
import Partner from "@/components/partners";


export default function Home() {

   const values=[
  
  { 
    id:1,img:design,heading: "Design" ,
    para:"Webdesign, Branding, Farben, Logo & Typografie",
    border:1
  },
  {  
    id:2,img:developement,heading: "Developement",
    para:"Sauberer Code, kreative Animationen, flüssige Interaktionen",
    border:1
  },
  { 
    id:3,img:camera,heading: "Video / Fotografie",
    para:"Professionelle visuelle Inhalte für Ihre Website",
    border:1
   },
  { 
     id:4,img:seo,heading: "SEO",
     para:"Optimiert, damit Sie bei Google gefunden werden",
     border:1
  },
  {  
    id:5,img:copywriting,heading: "Copywriting" ,
    para:"Texte, die Ihre Zielgruppe direkt ansprechen",
    border:1

  },
  {  
    id:6,img:strategies,heading: "Strategische Beratung",
    para:"Positionierung, Nutzererfahrung & Unternehmensziele",
    border:0
  },
]
  return (
    <div className="min-h-screen  text-white">
      <header className="relative bg-gradient-to-b from-[#021c21] via-[#022629] to-[#021618]">
        {/* Union SVG as FlowLine Background */}
        <div className="absolute left-1/2 -top-[60px] xs:-top-[70px] sm:-top-[80px] md:-top-[60px] lg:-top-[40px] -translate-x-1/2 z-0 pointer-events-none">
          <img
            src="/Union.svg"
            alt="Union"
            className="w-[250px] h-[125px] xs:w-[300px] xs:h-[150px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] xl:w-[1200px] xl:h-[600px] 2xl:w-[2000px] 2xl:h-[1000px] opacity-30"
          />
        </div>
        <FlowLine />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-5 pt-4 sm:pt-6 md:px-10 lg:px-6 overflow-hidden">

          {/* ================= NAV ================= */}
          <nav className="relative flex items-center justify-between py-2 sm:py-3">
            <div className="flex items-center gap-3 z-10">
              <Link href="/" className="nav-logo-wraper w-inline-block w--current">
                <Image
                  src="/velmoy-logo.png"
                  alt="VELMOY DEVELOPMENT"
                  width={120}
                  height={36}
                  priority
                  className="w-24 sm:w-32 md:w-[150px] h-auto"
                />
              </Link>
            </div>

            <div className={`hidden items-center gap-8 text-sm text-[#FFFFFF] md:flex relative z-10 ${Inter.className}`}>
              {[
                "Home",
                "Projekte",
                "Leistungen",
                "Kundenstimmen",
                "Partner",
                "Über uns",
                "FAQ",
              ].map((item) => (
                <button
                  key={item}
                  className="transition hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="div-block relative z-10">
              <Link
                href="#"
                className="group inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 rounded-full px-2 xs:px-2.5 sm:px-3 py-1.5 xs:py-2 sm:py-2.5 md:py-3 transition-all duration-300"
              >
                {/* Circle with Arrow */}
                <div className="flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#92e6bd]">
                  <img
                    src="https://cdn.prod.website-files.com/69520a2c277733cc29083e37/695263b4c33ebffff4fb687f_Arrow%201%20(1).svg"
                    alt="Arrow"
                    className="h-1.5 w-1.5 xs:h-2 xs:w-2 sm:h-2.5 sm:w-2.5"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>

                {/* Text */}
                <span className={`text-[10px] xs:text-xs sm:text-sm font-medium text-white hidden sm:inline whitespace-nowrap ${Inter.className} `}>
                  Kontaktiere Uns
                </span>
              </Link>
            </div>
          </nav>

          {/* ================= HERO CONTENT ================= */}
          <div className="relative flex flex-col items-center py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 text-center">
            <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-7 px-3 sm:px-4 md:px-6">
              <h1 className={`text-2xl xs:text-3xl sm:text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl px-2 ${Satoshi.className}`}>
                <div className="block ">Webseiten, die verkaufen,</div>
                <div className="block">überzeugen und messbare</div>
                <div className="block">Ergebnisse liefern</div>
              </h1>

            
              <div className={`${Inter.className} font-normal text-[14px] md:text-[18px] max-w-[495px] mx-auto`}>
                   <p >Design. Development. Growth. – Strategisch gestaltet, technisch perfekt umgesetzt und auf Wachstum optimiert.</p>
                   
              </div>

              <div className="pt-3 sm:pt-4">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 transition-all duration-300 bg-white"
                >
                  {/* Circle with Arrow */}
                  <div className="flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#92e6bd]">
                    <img
                      src="https://cdn.prod.website-files.com/69520a2c277733cc29083e37/695263b4c33ebffff4fb687f_Arrow%201%20(1).svg"
                      alt="Arrow"
                      className="h-1.5 w-1.5 xs:h-2 xs:w-2 sm:h-2.5 sm:w-2.5"
                      style={{ filter: 'brightness(0)' }}
                    />
                  </div>

                  {/* Text */}
                  <span className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-black whitespace-nowrap   ${Satoshi.className}` }>
                    Get Started Now
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Our Partners Title */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8 px-4">
            <p className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-[0.3em] text-white">
              Our Partners
            </p>
          </div>

        </div>

        {/* ================= PARTNERS ================= */}
        <div className="text-left py-3 sm:py-4 md:py-5 lg:py-6 relative overflow-hidden w-full">
          {/* Blurred background with gradient overlay */}
          <div className="absolute inset-0 bg-[#1F1F25] backdrop-blur-xl bg-opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0fdac2]/10 to-transparent"></div>
          </div>
          <Partner/>

        </div>


      </header>

      {/* ================= PROJECTS SECTION WITH WHITE BACKGROUND ================= */}
      <section className="bg-white">
        <ProjectsSlider />
      </section>

          {/* OUR VALUE   */}

      <section className=" bg-[#F8F8FA] grid grid-cols-1 md:grid-cols-2 place-items-center  max-w-[1406px] min-h-[716px]  rounded-[40px] px-4 py-12  md:py-0 sm:px-8 gap-8 mx-auto">
        
        {/* left side */}
        <div className=" col-span-1 max-w-[407px] min-h-[326px]  flex flex-col ">
            <h1 className={`${Satoshi.className} relative z-10 font-bold text-[32px] lg:text-[42px] text-[#000D0D]`}>Den Mehrwert klar erklären, ohne die Seite zu überladen.</h1>
           <p className={`max-w-[384px] ${Inter.className} relative z-10 text-[#4E4E4E] text-[16px] font-normal`}>Extrem moderne, hervorragend gestaltete Websites, die Marken hervorheben und Conversions steigern.</p>

            {/* Get Started */}
           <div className="w-[207px] h-[56px] flex items-center justify-center ">

             <div className="flex gap-3 items-center ">

               <div className="relative z-10 w-[36px] h-[36px] rounded-full bg-[#92E5BD] flex items-center justify-center">
                  <Image
                  src={arrow}
                  alt="arrow image"

                  />
               </div>
            
               <h1 className={` ${Satoshi.className} relative z-10 font-bold text-[16px] text-[#000D0D]`}>Get Started Now</h1>

             </div>

           </div>

        </div>
          
         {/* right side  */}
        <div className="col-span-1 max-w-[592px] min:h-[534px] flex flex-col gap-[21px] ">
          
             {values.map(value => ( 
              <div key={value.id}>  

                <div  className=" relative z-10 min-h-[54px]  flex items-center  gap-2">
                  
                  {/* Image */}
                  <div className="flex items-center justify-center  w-[52px] h-[52px] rounded-[12px] bg-white">
                   <Image
             
                   src={value.img}
                   alt={value.heading}
                   width={20}
                   height={20}
                   />
                  </div>

                 {/* content */}
                  <div className=" w-full min-h-[54px] flex flex-col ">
                    <h1 className={` ${Satoshi.className} font-bold text-[20px] text-[#000D0D]`}>{value.heading}</h1>
                    <p className={` ${Inter.className} text-[#4E4E4E] text-[14px]`}>{value.para}</p>

                  </div>
                  
                 

                </div>
                
                {value.border===1 &&
                <div className="border  border-[#D8D8E2] h-0 mt-2"></div>
                }

              </div>

             ))
            }

        </div>

      </section>
    </div>
  );
}

