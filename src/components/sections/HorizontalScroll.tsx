'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { Zap, TrendingUp, Shield, Trophy, Star, Sparkles } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollProps {
  className?: string;
}

// SVG Curve Component
const WaveCurve = () => (
  <svg 
    className="inline-block w-24 h-12 mx-4 text-indigo-500/50" 
    viewBox="0 0 100 40" 
    fill="none"
  >
    <path 
      d="M0 20 Q25 0 50 20 T100 20" 
      stroke="currentColor" 
      strokeWidth="3" 
      fill="none"
    />
  </svg>
);

// SVG Spiral Component
const Spiral = () => (
  <svg 
    className="inline-block w-16 h-16 mx-4 text-emerald-500/50" 
    viewBox="0 0 50 50" 
    fill="none"
  >
    <path 
      d="M25 25 C25 20 30 15 35 15 C40 15 45 20 45 25 C45 35 35 40 25 40 C10 40 5 25 5 15 C5 5 15 0 25 0" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
  </svg>
);

// Dot Separator
const DotSeparator = () => (
  <span className="inline-flex items-center mx-6">
    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
    <span className="w-2 h-2 bg-emerald-500 rounded-full mx-1" />
    <span className="w-2 h-2 bg-purple-500 rounded-full" />
  </span>
);

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = contentWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Content items with inline SVGs and icons
  const contentItems = [
    { type: 'text', content: 'In every' },
    { type: 'icon', content: <Trophy className="w-12 h-12 text-amber-400" /> },
    { type: 'text', content: 'trade,' },
    { type: 'curve', content: <WaveCurve /> },
    { type: 'text', content: 'discover the' },
    { type: 'icon', content: <Sparkles className="w-12 h-12 text-indigo-400" /> },
    { type: 'text', content: 'undeniable' },
    { type: 'text', content: 'Real', highlight: true },
    { type: 'icon', content: <Zap className="w-14 h-14 text-yellow-400" /> },
    { type: 'text', content: 'Magic', highlight: true },
    { type: 'spiral', content: <Spiral /> },
    { type: 'text', content: 'of sharing' },
    { type: 'dots', content: <DotSeparator /> },
    { type: 'text', content: 'pure' },
    { type: 'icon', content: <Shield className="w-12 h-12 text-emerald-400" /> },
    { type: 'text', content: 'Profits', highlight: true },
    { type: 'curve', content: <WaveCurve /> },
    { type: 'text', content: 'that brings' },
    { type: 'icon', content: <TrendingUp className="w-12 h-12 text-green-400" /> },
    { type: 'text', content: 'us' },
    { type: 'text', content: 'Together', highlight: true },
    { type: 'icon', content: <Star className="w-14 h-14 text-amber-400" /> },
  ];

  return (
    <section 
      ref={sectionRef}
      className={cn('relative h-screen bg-[#0f172a] overflow-hidden', className)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-emerald-500/5" />
      
      {/* Horizontal scroll container */}
      <div 
        ref={containerRef}
        className="h-full flex items-center"
      >
        <div 
          ref={contentRef}
          className="flex items-center whitespace-nowrap pl-[10vw]"
        >
          {contentItems.map((item, index) => {
            if (item.type === 'text') {
              return (
                <span
                  key={index}
                  className={cn(
                    'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mx-4 transition-all',
                    item.highlight 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500' 
                      : 'text-slate-300'
                  )}
                >
                  {item.content}
                </span>
              );
            }
            
            if (item.type === 'icon' || item.type === 'curve' || item.type === 'spiral' || item.type === 'dots') {
              return (
                <span key={index} className="inline-flex items-center mx-2">
                  {item.content}
                </span>
              );
            }

            return null;
          })}
          
          {/* Extra padding at the end */}
          <span className="w-[20vw]" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="flex items-center gap-1">
          <div className="w-8 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className="w-full h-full bg-indigo-500 origin-left animate-pulse" />
          </div>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
