'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WaveSVG = () => (
  <svg 
    className="inline-block w-24 h-12 mx-4" 
    viewBox="0 0 100 40" 
    fill="none"
  >
    <path 
      d="M0 20 Q25 0 50 20 T100 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      fill="none"
      className="text-accent"
    />
  </svg>
);

const StarSVG = () => (
  <svg 
    className="inline-block w-8 h-8 mx-4" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path 
      d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
      className="text-accent"
    />
  </svg>
);

const DiamondSVG = () => (
  <svg 
    className="inline-block w-6 h-6 mx-4" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path 
      d="M12 2L22 12L12 22L2 12L12 2Z"
      className="text-accent-purple"
    />
  </svg>
);

const CircleSVG = () => (
  <svg 
    className="inline-block w-4 h-4 mx-3" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" className="text-accent-violet" />
  </svg>
);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    if (!container || !scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth - container.offsetWidth;

    const tween = gsap.to(scrollContent, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-primary"
    >
      <div 
        ref={scrollRef}
        className="flex items-center h-full whitespace-nowrap px-12"
      >
        {/* Ticker tape content */}
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          In every
        </span>
        
        <WaveSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          bottle,
        </span>
        
        <CircleSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          discover the
        </span>
        
        <StarSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-accent uppercase tracking-tight">
          undeniable
        </span>
        
        <DiamondSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-accent uppercase tracking-tight">
          Real Magic
        </span>
        
        <WaveSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          of sharing
        </span>
        
        <CircleSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          pure
        </span>
        
        <StarSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-accent-purple uppercase tracking-tight">
          Refreshment
        </span>
        
        <DiamondSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground uppercase tracking-tight">
          that brings us
        </span>
        
        <WaveSVG />
        
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-accent uppercase tracking-tight">
          Together
        </span>
        
        <StarSVG />
        
        {/* Repeat for seamless feel */}
        <span className="font-clash text-[8vw] md:text-[6vw] font-bold text-primary-foreground/30 uppercase tracking-tight ml-24">
          In every bottle...
        </span>
      </div>
    </section>
  );
}
