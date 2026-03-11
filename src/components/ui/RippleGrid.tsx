'use client';

import React, { useRef, useEffect } from 'react';

interface RippleGridProps {
  gridColor?: string;
  rippleIntensity?: number;
  gridSize?: number;
  gridThickness?: number;
  fadeDistance?: number;
  vignetteStrength?: number;
  glowIntensity?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  className?: string;
}

const RippleGrid: React.FC<RippleGridProps> = ({
  gridColor = '#05d9e8',
  rippleIntensity = 0.08,
  gridSize = 6.0,
  gridThickness = 20.0,
  fadeDistance = 1.2,
  vignetteStrength = 1.5,
  glowIntensity = 0.15,
  opacity = 0.5,
  mouseInteraction = false,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseInteraction) {
        mouseRef.current = {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        };
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 5, g: 217, b: 232 };
    };

    const rgb = hexToRgb(gridColor);

    const draw = () => {
      if (!ctx || !canvas) return;

      timeRef.current += 0.02;
      const time = timeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cellSize = gridSize * 10;
      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * 0.3})`;
      ctx.lineWidth = gridThickness / 20;

      // Draw grid lines with ripple effect
      for (let i = 0; i <= cols; i++) {
        const x = i * cellSize;
        const rippleOffset = Math.sin(time + i * 0.2) * rippleIntensity * 20;

        ctx.beginPath();
        ctx.moveTo(x + rippleOffset, 0);
        
        for (let j = 0; j <= rows; j++) {
          const y = j * cellSize;
          const localRipple = Math.sin(time + i * 0.2 + j * 0.1) * rippleIntensity * 15;
          ctx.lineTo(x + localRipple, y);
        }
        ctx.stroke();
      }

      for (let j = 0; j <= rows; j++) {
        const y = j * cellSize;
        const rippleOffset = Math.cos(time + j * 0.2) * rippleIntensity * 20;

        ctx.beginPath();
        ctx.moveTo(0, y + rippleOffset);
        
        for (let i = 0; i <= cols; i++) {
          const x = i * cellSize;
          const localRipple = Math.cos(time + j * 0.2 + i * 0.1) * rippleIntensity * 15;
          ctx.lineTo(x, y + localRipple);
        }
        ctx.stroke();
      }

      // Add glow effect at intersections
      if (glowIntensity > 0) {
        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            const x = i * cellSize + Math.sin(time + i * 0.2 + j * 0.1) * rippleIntensity * 15;
            const y = j * cellSize + Math.cos(time + j * 0.2 + i * 0.1) * rippleIntensity * 15;
            
            const glowSize = 3 + Math.sin(time * 2 + i + j) * 1;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
            gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${glowIntensity})`);
            gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, glowSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Vignette effect
      if (vignetteStrength > 0) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height) * fadeDistance
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, `rgba(0, 0, 0, ${vignetteStrength * 0.5})`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gridColor, rippleIntensity, gridSize, gridThickness, fadeDistance, vignetteStrength, glowIntensity, opacity, mouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default RippleGrid;
