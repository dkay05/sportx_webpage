import {
  Hero,
  CategoryDivider,
  CampaignBlock,
  Footer,
  PillNav,
  MagicBento,
  CircularGallery,
  ProductGrid,
} from '@/components/rawform';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Markets', href: '/markets' },
  { label: 'Sport', href: '/sport' },
  { label: 'About', href: '/about' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base">
      <PillNav 
        items={navItems}
        activeHref="/"
        baseColor="#1A1A1B"
        pillColor="#F9F9F9"
        hoveredPillTextColor="#FFFFFF"
        pillTextColor="#1A1A1B"
      />
      <main>
        <Hero />
        <CategoryDivider title="NEW ARRIVALS" align="left" />
        <MagicBento 
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism
          clickEffect
          spotlightRadius={560}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
        <section className="bg-surface py-12">
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery 
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </section>
        <CampaignBlock />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
