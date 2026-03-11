'use client';

interface GradientBlobsProps {
  variant?: 'hero' | 'section';
}

export default function GradientBlobs({ variant = 'hero' }: GradientBlobsProps) {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Blue Blob */}
        <div 
          className="absolute w-[60vw] h-[60vw] rounded-full animate-blob"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            filter: 'blur(140px)',
            mixBlendMode: 'multiply',
            top: '-10%',
            left: '-10%',
          }}
        />
        
        {/* Secondary Purple Blob */}
        <div 
          className="absolute w-[50vw] h-[50vw] rounded-full animate-blob-slow"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
            filter: 'blur(140px)',
            mixBlendMode: 'multiply',
            top: '20%',
            right: '-15%',
            animationDelay: '2s',
          }}
        />
        
        {/* Tertiary Violet Blob */}
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full animate-blob"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #A78BFA)',
            filter: 'blur(120px)',
            mixBlendMode: 'multiply',
            bottom: '10%',
            left: '30%',
            animationDelay: '4s',
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full animate-blob-slow"
        style={{
          background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
          filter: 'blur(100px)',
          mixBlendMode: 'multiply',
          opacity: 0.2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
