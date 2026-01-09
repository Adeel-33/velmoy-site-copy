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
        <div className="absolute left-1/2 top-[20px] md:top-[40px] -translate-x-1/2 z-0 pointer-events-none">
          <img
            src="/Union.svg"
            alt="Union"
            className="w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] md:w-[1200px] md:h-[600px] lg:w-[2000px] lg:h-[1000px] opacity-30"
          />
        </div>
        <FlowLine />

        <div className="relative mx-auto max-w-6xl px-5 pt-6 md:px-10 lg:px-6">

          {/* ================= NAV ================= */}
          <nav className="relative flex items-center justify-between py-3">
            <div className="flex items-center gap-3 z-10">
              <Link href="/" className="nav-logo-wraper w-inline-block w--current">
                <Image
                  src="/velmoy-logo.png"
                  alt="VELMOY DEVELOPMENT"
                  className="nav-logo-img"
                  width={150}
                  height={45}
                  priority
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
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full px-2 py-2 sm:py-3 transition-all duration-300"
              >
                {/* Circle with Arrow */}
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#92e6bd]">
                  <img
                    src="https://cdn.prod.website-files.com/69520a2c277733cc29083e37/695263b4c33ebffff4fb687f_Arrow%201%20(1).svg"
                    alt="Arrow"
                    className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>

                {/* Text */}
                <span className="text-xs sm:text-sm font-medium text-white hidden sm:inline">
                  Kontaktiere Uns
                </span>
              </Link>
            </div>
          </nav>

          {/* ================= HERO CONTENT ================= */}
          <div className="relative flex flex-col items-center py-12 sm:py-16 md:py-20 text-center">
            <div className="relative z-10 max-w-3xl space-y-5 sm:space-y-7 px-4">
              <h1 className="text-balance text-3xl sm:text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Webseiten, die verkaufen, überzeugen und messbare Ergebnisse
                liefern
              </h1>

              <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-white/70 md:text-base">
                Design. Development. Growth. – Strategisch gestaltet, technisch
                perfekt umgesetzt und auf Wachstum optimiert.
              </p>

              <div className="pt-4">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 bg-white"
                >
                  {/* Circle with Arrow */}
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#92e6bd]">
                    <img
                      src="https://cdn.prod.website-files.com/69520a2c277733cc29083e37/695263b4c33ebffff4fb687f_Arrow%201%20(1).svg"
                      alt="Arrow"
                      className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  {/* Text */}
                  <span className="text-xs sm:text-sm font-medium text-black">
                    Get Started Now
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Our Partners Title */}
          <div className="text-center mt-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Our Partners
            </p>
          </div>

        </div>

        {/* ================= PARTNERS ================= */}
        <div className="text-left py-3 sm:py-4 relative overflow-hidden w-full" style={{ minHeight: '80px', height: 'auto' }}>
          {/* Blurred background with gradient overlay */}
          <div className="absolute inset-0 bg-[#202429] backdrop-blur-xl bg-opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0fdac2]/10 to-transparent"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-start max-w-7xl mx-auto px-4 sm:px-5 md:px-10 lg:px-6 pt-2 pb-2">
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative h-8 w-20 sm:h-10 sm:w-28 md:h-12 md:w-32 opacity-70 flex items-center justify-center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
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

