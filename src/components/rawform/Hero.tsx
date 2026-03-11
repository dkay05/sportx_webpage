'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import GradientBlobs from './GradientBlobs';

const FluidGlass = dynamic(() => import('./FluidGlass'), { ssr: false });

export default function Hero() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const fullText1 = 'VICTORY';
  const fullText2 = 'TRADES';

  useEffect(() => {
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let isDeleting = false;
    let phase = 0; // 0: typing text1, 1: typing text2, 2: pause, 3: deleting text2, 4: deleting text1

    const typeSpeed = 120;
    const deleteSpeed = 80;
    const pauseDuration = 1500;

    const animate = () => {
      if (phase === 0) {
        // Typing VICTORY
        if (currentIndex1 <= fullText1.length) {
          setText1(fullText1.slice(0, currentIndex1));
          currentIndex1++;
          setTimeout(animate, typeSpeed);
        } else {
          phase = 1;
          setTimeout(animate, 200);
        }
      } else if (phase === 1) {
        // Typing TRADES
        if (currentIndex2 <= fullText2.length) {
          setText2(fullText2.slice(0, currentIndex2));
          currentIndex2++;
          setTimeout(animate, typeSpeed);
        } else {
          phase = 2;
          setTimeout(animate, pauseDuration);
        }
      } else if (phase === 2) {
        // Pause complete, start deleting
        phase = 3;
        setTimeout(animate, 100);
      } else if (phase === 3) {
        // Deleting TRADES
        if (currentIndex2 > 0) {
          currentIndex2--;
          setText2(fullText2.slice(0, currentIndex2));
          setTimeout(animate, deleteSpeed);
        } else {
          phase = 4;
          setTimeout(animate, 100);
        }
      } else if (phase === 4) {
        // Deleting VICTORY
        if (currentIndex1 > 0) {
          currentIndex1--;
          setText1(fullText1.slice(0, currentIndex1));
          setTimeout(animate, deleteSpeed);
        } else {
          // Reset and loop
          phase = 0;
          setTimeout(animate, 500);
        }
      }
    };

    const timeout = setTimeout(animate, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden cursor-none">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/video1.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      
      <GradientBlobs variant="hero" />
      
      {/* Fluid Glass Cursor Effect with video2 */}
      <Suspense fallback={null}>
        <FluidGlass videoSrc="/assets/videos/video2.mp4" />
      </Suspense>
      
      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        {/* Main Headline */}
        <div className="mb-12 opacity-0 animate-slide-up">
          <h1 className="text-[14vw] md:text-[12vw] font-clash font-bold uppercase tracking-[0.02em] leading-[0.85] text-white">
            <span className="block">
              {text1}<span className="animate-pulse">|</span>
            </span>
            <span className="block ml-[15vw]">
              {text2}<span className={`animate-pulse ${text2.length > 0 ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="font-satoshi text-xl max-w-[400px] text-white/80">
            Where strategy meets opportunity across global sports markets and financial trading platforms.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="w-px h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
