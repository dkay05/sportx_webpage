'use client';

import { ArrowUpRight } from 'lucide-react';

interface CampaignLink {
  title: string;
  href: string;
}

const campaignLinks: CampaignLink[] = [
  { title: 'Market Insights', href: '#insights' },
  { title: 'Trader Stories', href: '#traders' },
  { title: 'Platform Security', href: '#security' },
];

export default function CampaignBlock() {
  return (
    <section className="bg-surface py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Content - 8 columns */}
          <div className="md:col-span-8 opacity-0 animate-slide-up">
            <h2 className="text-campaign font-clash font-bold uppercase tracking-tighter-brutal leading-brutal-relaxed mb-8">
              CRAFTED FOR<br />
              SPORTS TRADERS
            </h2>
            <p className="font-satoshi text-lg text-primary/70 max-w-xl">
              Every market, every movement, every data point engineered for those who trade with precision.
              SportX is built for traders who turn sports knowledge into real market opportunities.
            </p>
          </div>

          {/* Right Content - 4 columns */}
          <div className="md:col-span-4 flex flex-col justify-end opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-0">
              {campaignLinks.map((link, index) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between py-6 border-t border-primary/20 hover:border-primary/40 transition-colors duration-300"
                >
                  <span className="font-satoshi text-sm font-medium uppercase tracking-wide-brutal">
                    {link.title}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <ArrowUpRight 
                      size={16} 
                      className="text-primary group-hover:text-white transition-colors duration-300" 
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
