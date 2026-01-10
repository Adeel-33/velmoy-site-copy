import Image from "next/image";
import FlowLine from "@/components/FlowLine";
// import Header from "@/components/header";
import ProjectsSlider from "@/components/ProjectsSlider";
import Link from "next/link";
const partners = [
  { src: "/partners/1.png", alt: "Eightball" },
  { src: "/partners/2.png", alt: "Alt+Shift" },
  { src: "/partners/3.png", alt: "Cubekit" },
  { src: "/partners/4.png", alt: "AlphaWave" },
  { src: "/partners/5.png", alt: "Acme Corp" },
  { src: "/partners/6.png", alt: "3Portals" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#021618] text-white">
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

            <div className="hidden items-center gap-8 text-sm text-white/70 md:flex relative z-10">
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
                <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-white hidden sm:inline whitespace-nowrap">
                  Kontaktiere Uns
                </span>
              </Link>
            </div>
          </nav>

          {/* ================= HERO CONTENT ================= */}
          <div className="relative flex flex-col items-center py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 text-center">
            <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-7 px-3 sm:px-4 md:px-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl px-2">
                <div className="block">Webseiten, die verkaufen,</div>
                <div className="block">überzeugen und messbare</div>
                <div className="block">Ergebnisse liefern</div>
              </h1>

              <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-white/70 md:text-base px-2">
                <span className="block">Design. Development. Growth. – Strategisch gestaltet, technisch perfekt umgesetzt und auf Wachstum optimiert.</span>
              </p>

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
                  <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-black whitespace-nowrap">
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
          <div className="absolute inset-0 bg-[#202429] backdrop-blur-xl bg-opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0fdac2]/10 to-transparent"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 py-2">
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 gap-y-3 sm:gap-y-4 md:gap-y-5">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative h-5 w-14 xs:h-6 xs:w-16 sm:h-8 sm:w-20 md:h-10 md:w-28 lg:h-12 lg:w-32 flex items-center justify-center"
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
      </header>

      {/* ================= PROJECTS SECTION WITH WHITE BACKGROUND ================= */}
      <section className="bg-white">
        <ProjectsSlider />
      </section>
    </div>
  );
}

