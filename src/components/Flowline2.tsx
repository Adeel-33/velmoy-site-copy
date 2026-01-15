"use client";
import { useEffect, useRef } from "react";

interface FlowLine2Props extends React.SVGProps<SVGSVGElement> {
  topOffset?: number; // optional offset from section top
}

export default function FlowLine2({ topOffset = 0, ...props }: FlowLine2Props) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();

    const handleScroll = () => {
      const rect = svg.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Animate stroke only when visible in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        let progress = 1 - rect.bottom / (windowHeight + rect.height);
        progress = Math.min(Math.max(progress * 0.8, 0), 1);
        path.style.strokeDashoffset = (pathLength * (1 - progress)).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width={1440}
      height={2811}
      viewBox="0 0 1440 2811"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[90vw] max-w-[1440px] h-auto"
      style={{ top: `${topOffset}px`, maxHeight: "none" }}
      {...props}
    >
      <path
        ref={pathRef}
        d="M363 22.5005C470.333 27.8338 1065.7 116.4 1184.5 526C1333 1038 408 1260 166.5 1271.5C-75 1283 -28.5 960.5 229 1073C541 1209.31 477 2207.5 1184.5 2194.5C1892 2181.5 1512.5 1537.5 944 1988C489.2 2348.4 628.5 2698 727 2788"
        stroke="url(#paint0_linear_4069_6706)"
        strokeWidth={45}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4069_6706"
          x1={788.982}
          y1={22.5005}
          x2={788.982}
          y2={2788}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AFFDF" />
          <stop offset={1} stopColor="#199986" />
        </linearGradient>
      </defs>
    </svg>
  );
}
