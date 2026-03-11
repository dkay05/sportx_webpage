'use client';

import { useRef, useEffect } from 'react';

interface FluidGlassProps {
  videoSrc?: string;
}

export default function FluidGlass({ videoSrc }: FluidGlassProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if (!ctx || !canvas) return;

      // Smooth interpolation - lower value = smoother/slower follow
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const radius = 100;

      // Draw video inside circle - video plays full screen but only visible in bubble
      if (video && video.readyState >= 2) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, currentY, radius - 5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Draw video at full canvas size (same as hero background)
        // This makes video2 play in sync with the full section
        const videoAspect = video.videoWidth / video.videoHeight;
        const canvasAspect = canvas.width / canvas.height;
        
        let drawWidth, drawHeight, drawX, drawY;

        // Cover the entire canvas (like object-fit: cover)
        if (videoAspect > canvasAspect) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * videoAspect;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / videoAspect;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight);
        ctx.restore();
      }

      // Outer soft glow
      const outerGlow = ctx.createRadialGradient(
        currentX, currentY, radius * 0.5,
        currentX, currentY, radius * 2
      );
      outerGlow.addColorStop(0, 'rgba(167, 139, 250, 0.2)');
      outerGlow.addColorStop(0.5, 'rgba(129, 140, 248, 0.1)');
      outerGlow.addColorStop(1, 'rgba(129, 140, 248, 0)');
      
      ctx.beginPath();
      ctx.arc(currentX, currentY, radius * 2, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Main bubble body - glossy gradient
      const bubbleGradient = ctx.createRadialGradient(
        currentX - radius * 0.4, currentY - radius * 0.4, 0,
        currentX, currentY, radius
      );
      bubbleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      bubbleGradient.addColorStop(0.2, 'rgba(200, 200, 255, 0.25)');
      bubbleGradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.15)');
      bubbleGradient.addColorStop(0.8, 'rgba(129, 140, 248, 0.1)');
      bubbleGradient.addColorStop(1, 'rgba(100, 100, 200, 0.05)');

      ctx.beginPath();
      ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
      ctx.fillStyle = bubbleGradient;
      ctx.fill();

      // Bubble edge highlight (rim light)
      const rimGradient = ctx.createRadialGradient(
        currentX, currentY, radius * 0.85,
        currentX, currentY, radius
      );
      rimGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      rimGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
      rimGradient.addColorStop(1, 'rgba(200, 180, 255, 0.5)');

      ctx.beginPath();
      ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = rimGradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Inner thin white ring
      ctx.beginPath();
      ctx.arc(currentX, currentY, radius - 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Top-left main highlight (big shine)
      const highlightGradient = ctx.createRadialGradient(
        currentX - radius * 0.35, currentY - radius * 0.35, 0,
        currentX - radius * 0.35, currentY - radius * 0.35, radius * 0.5
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      highlightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.5)');
      highlightGradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.ellipse(
        currentX - radius * 0.35,
        currentY - radius * 0.35,
        radius * 0.35,
        radius * 0.2,
        -Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Small secondary highlight
      ctx.beginPath();
      ctx.ellipse(
        currentX - radius * 0.15,
        currentY - radius * 0.55,
        radius * 0.12,
        radius * 0.06,
        -Math.PI / 6,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();

      // Bottom-right subtle reflection
      const bottomReflect = ctx.createRadialGradient(
        currentX + radius * 0.4, currentY + radius * 0.4, 0,
        currentX + radius * 0.4, currentY + radius * 0.4, radius * 0.4
      );
      bottomReflect.addColorStop(0, 'rgba(200, 180, 255, 0.2)');
      bottomReflect.addColorStop(1, 'rgba(200, 180, 255, 0)');

      ctx.beginPath();
      ctx.ellipse(
        currentX + radius * 0.35,
        currentY + radius * 0.4,
        radius * 0.25,
        radius * 0.15,
        Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = bottomReflect;
      ctx.fill();

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
  }, []);

  // Force video to play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be blocked, try again on user interaction
        const playOnInteraction = () => {
          video.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    }
  }, [videoSrc]);

  return (
    <>
      {/* Hidden video element for drawing into canvas */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden"
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 pointer-events-none"
      />
    </>
  );
}
