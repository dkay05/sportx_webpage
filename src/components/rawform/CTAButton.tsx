'use client';

import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
}

export default function CTAButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  showArrow = true 
}: CTAButtonProps) {
  const baseClasses = "font-satoshi text-sm font-medium uppercase tracking-wide-brutal inline-flex items-center gap-2 transition-all duration-300";
  
  if (variant === 'secondary') {
    return href ? (
      <a 
        href={href}
        className={`${baseClasses} text-accent hover:gap-3`}
      >
        {children}
        {showArrow && <ArrowRight size={16} />}
      </a>
    ) : (
      <button 
        onClick={onClick}
        className={`${baseClasses} text-accent hover:gap-3`}
      >
        {children}
        {showArrow && <ArrowRight size={16} />}
      </button>
    );
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight size={16} />}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="btn-brutalist">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="btn-brutalist">
      {content}
    </button>
  );
}
