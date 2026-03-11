'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientBlobs from './GradientBlobs';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const WaveSVG = () => (
  <svg className="inline-block w-16 md:w-24 h-8 md:h-12 mx-2 md:mx-4 flex-shrink-0" viewBox="0 0 100 40" fill="none">
    <path d="M0 20 Q25 0 50 20 T100 20" stroke="#818CF8" strokeWidth="3" fill="none" />
  </svg>
);

const StarSVG = () => (
  <svg className="inline-block w-6 md:w-8 h-6 md:h-8 mx-2 md:mx-4 flex-shrink-0" viewBox="0 0 24 24" fill="#A78BFA">
    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
  </svg>
);

const DiamondSVG = () => (
  <svg className="inline-block w-4 md:w-6 h-4 md:h-6 mx-2 md:mx-4 flex-shrink-0" viewBox="0 0 24 24" fill="#C4B5FD">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const CircleSVG = () => (
  <svg className="inline-block w-3 md:w-4 h-3 md:h-4 mx-2 md:mx-3 flex-shrink-0" viewBox="0 0 24 24" fill="#818CF8">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

interface CategoryDividerProps {
  title: string;
  align?: 'left' | 'right';
}

export default function CategoryDivider({ title, align = 'left' }: CategoryDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    if (!container || !scrollContent) return;

    let ctx: gsap.Context;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const scrollWidth = scrollContent.scrollWidth - container.offsetWidth;

      ctx = gsap.context(() => {
        gsap.to(scrollContent, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, container);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-primary"
    >
      <GradientBlobs variant="section" />
      
      <div 
        ref={scrollRef}
        className="relative z-10 flex items-center h-full whitespace-nowrap px-6 md:px-12"
      >
        {/* Ticker tape content */}
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white uppercase tracking-tight flex-shrink-0">
          every game,
        </span>
        
        <WaveSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white uppercase tracking-tight flex-shrink-0">
          every move,
        </span>
        
        <CircleSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white uppercase tracking-tight flex-shrink-0">
          discover the
        </span>
        
        <StarSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-[#818CF8] uppercase tracking-tight flex-shrink-0">
          future
        </span>
        
        <DiamondSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white uppercase tracking-tight flex-shrink-0">
          of
        </span>
        
        <CircleSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-[#A78BFA] uppercase tracking-tight flex-shrink-0">
          sports trading
        </span>
        
        <WaveSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white uppercase tracking-tight flex-shrink-0">
          powered by
        </span>
        
        <StarSVG />
        
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-[#C4B5FD] uppercase tracking-tight flex-shrink-0">
          SportX
        </span>
        
        <DiamondSVG />
        
        {/* Fade out hint */}
        <span className="font-clash text-[6vw] md:text-[5vw] font-bold text-white/20 uppercase tracking-tight flex-shrink-0 ml-12">
          every game...
        </span>
      </div>
    </section>
  );
}
