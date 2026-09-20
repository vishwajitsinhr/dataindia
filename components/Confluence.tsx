"use client";

import { useEffect, useRef } from "react";

export default function Confluence({ className = "" }: { className?: string }) {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Respect users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Skip animation entirely
    }

    let animationFrameId: number;

    const animatePaths = () => {
      if (pathRef1.current && pathRef2.current && circleRef.current) {
        let startTime: number;
        const duration = 4000;

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = (time - startTime) / duration;

          const path1 = pathRef1.current;
          const path2 = pathRef2.current;
          const circle = circleRef.current;

          if (path1 && path2 && circle) {
            const offset1 = Math.sin(progress * Math.PI * 2) * 4;
            const offset2 = Math.cos(progress * Math.PI * 2) * 4;

            path1.setAttribute(
              "d",
              `M0 ${20 + offset1} C 220 ${20 + offset1}, 340 ${90 + offset1}, 500 ${60 + offset1} S 780 ${20 + offset1}, 1080 ${20 + offset1}`
            );
            path2.setAttribute(
              "d",
              `M0 ${100 + offset2} C 220 ${100 + offset2}, 340 ${30 + offset2}, 500 ${60 + offset2} S 780 ${100 + offset2}, 1080 ${100 + offset2}`
            );

            const pulse = 1 + Math.sin(progress * Math.PI * 3) * 0.15;
            circle.setAttribute("r", `${3.5 * pulse}`);
          }

          animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animatePaths();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 1080 120"
      className={className}
      role="img"
      aria-label="Two data streams converging into one, symbolizing a confluence"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1A4A42", stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: "#C8794A", stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: "#1A4A42", stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>

      <path
        ref={pathRef1}
        d="M0 20 C 220 20, 340 90, 500 60 S 780 20, 1080 20"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <path
        ref={pathRef2}
        d="M0 100 C 220 100, 340 30, 500 60 S 780 100, 1080 100"
        fill="none"
        stroke="#C8794A"
        strokeWidth="2"
        opacity="0.4"
      />
      <circle
        ref={circleRef}
        cx="500"
        cy="60"
        r="4"
        fill="#1A4A42"
        opacity="0.8"
      />
      <circle
        cx="500"
        cy="60"
        r="8"
        fill="#1A4A42"
        opacity="0.15"
        className="animate-pulse"
      />
    </svg>
  );
}