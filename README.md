# SportX - Blockchain Sports Trading Platform

A modern Web3 sports trading platform landing page built with Next.js, TypeScript, TailwindCSS, and shadcn/ui.

## Features

- **Dark Futuristic Theme** - Premium Web3 aesthetic with smooth animations
- **Responsive Design** - Mobile-first approach with tablet and desktop optimizations
- **Component-Driven UI** - Built with shadcn/ui for consistency
- **Smooth Animations** - Framer Motion for micro-interactions and scroll animations
- **Production Ready** - Scalable folder structure and TypeScript throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles & design tokens
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer
│   │   └── Container.tsx   # Container wrapper
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section
│   │   ├── LiveMarkets.tsx # Live markets preview
│   │   ├── Features.tsx    # Platform features
│   │   ├── HowItWorks.tsx  # Step-by-step guide
│   │   ├── Stats.tsx       # Platform statistics
│   │   ├── Blockchain.tsx  # Security & transparency
│   │   ├── Partners.tsx    # Partners & integrations
│   │   ├── Testimonials.tsx# User testimonials
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   └── CTA.tsx         # Call-to-action
│   └── ui/                 # shadcn/ui components
├── data/                   # Mock data
├── types/                  # TypeScript types
├── utils/                  # Utility functions & constants
└── lib/                    # Library utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Landing Page Sections

1. **Hero Section** - Main headline, CTAs, and live market preview
2. **Live Markets** - Real-time sports market cards with filtering
3. **Features** - Platform capabilities and benefits
4. **How It Works** - 4-step trading process
5. **Statistics** - Platform metrics with animated counters
6. **Blockchain Security** - Trust and transparency features
7. **Partners** - Integration partners and ecosystem
8. **Testimonials** - User reviews and social proof
9. **FAQ** - Common questions and answers
10. **CTA** - Final conversion section
11. **Footer** - Links, newsletter, and contact info

## Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Accent**: Emerald (#10b981)
- **Background**: Slate-900 (#0f172a)
- **Surface**: Slate-800 (#1e293b)

### Typography
- **Font**: Inter (sans-serif)
- **Mono**: JetBrains Mono

## Deployment

The project is optimized for deployment on Vercel:

```bash
npm run build
```

## License

MIT License
