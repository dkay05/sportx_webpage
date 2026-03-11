'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import RippleGrid from '@/components/ui/RippleGrid';
import GridDistortion from '@/components/ui/GridDistortion';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, { stiffness: 400, damping: 30 });

  const textY = useTransform(scrollYSpring, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollYSpring, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-black',
        className
      )}
    >
      {/* GridDistortion Background Animation */}
      <div className="absolute inset-0">
        <GridDistortion
          imageSrc="/grid-bg.svg"
          grid={20}
          mouse={0.15}
          strength={0.2}
          relaxation={0.9}
          className="w-full h-full"
        />
      </div>

      {/* RippleGrid Overlay Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <RippleGrid
          gridColor="#05d9e8"
          rippleIntensity={0.08}
          gridSize={6.0}
          gridThickness={20.0}
          fadeDistance={1.2}
          vignetteStrength={1.5}
          glowIntensity={0.15}
          opacity={0.5}
          mouseInteraction={false}
        />
      </div>

      {/* Main Content */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} style={{ y: textY, opacity }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[0.9] tracking-[0.1em] font-[family-name:var(--font-bebas)]">
              <span className="text-neon-cyan">TRADE</span>
              {' '}THE{' '}
              <span className="text-neon-pink">FUTURE</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan">
                OF SPORTS
              </span>
            </h1>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
