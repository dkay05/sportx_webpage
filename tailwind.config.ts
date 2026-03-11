import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Raw Form - Brutalist Design System
        base: '#E4E2DD',
        primary: {
          DEFAULT: '#1E1E1E',
          foreground: '#E4E2DD',
        },
        accent: {
          DEFAULT: '#4F46E5',
          blue: '#4F46E5',
          purple: '#7C3AED',
          violet: '#A78BFA',
        },
        surface: '#D9D6D0',
        muted: '#444444',
        foreground: '#1E1E1E',
        background: '#E4E2DD',
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-brutal': '-0.05em',
        'wide-brutal': '0.1em',
        'wider-brutal': '0.15em',
      },
      lineHeight: {
        'brutal-tight': '0.75',
        'brutal': '0.85',
        'brutal-relaxed': '0.9',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob-pulse': 'blobPulse 10s ease-in-out infinite',
        'blob-pulse-slow': 'blobPulse 15s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blobPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'translate(0, 0) scale(1)' },
          '50%': { opacity: '0.9', transform: 'translate(20px, -20px) scale(1.05)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
