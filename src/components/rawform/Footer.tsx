'use client';

import { Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '#' },
    { name: 'Footwear', href: '#' },
    { name: 'Apparel', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Year */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <span 
          className="font-clash font-bold text-white/10 leading-none"
          style={{ fontSize: '10vw' }}
        >
          {currentYear}
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a 
              href="/" 
              className="font-clash text-4xl font-bold uppercase tracking-tighter-brutal block mb-8"
            >
              SPORTX
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div className="md:col-span-1">
            <h4 className="font-satoshi text-sm font-bold uppercase tracking-wider-brutal mb-6 text-primary-foreground/50">
              Shop
            </h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-satoshi text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="font-satoshi text-sm font-bold uppercase tracking-wider-brutal mb-6 text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-satoshi text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="font-satoshi text-sm font-bold uppercase tracking-wider-brutal mb-6 text-primary-foreground/50">
              Stay Updated
            </h4>
            <p className="font-satoshi text-sm text-primary-foreground/70 mb-4">
              Subscribe for exclusive drops and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border-b border-primary-foreground/30 py-2 font-satoshi text-sm focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button className="ml-4 font-satoshi text-sm font-medium uppercase tracking-wide-brutal text-accent hover:text-white transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-primary-foreground/10">
          <p className="font-satoshi text-xs text-primary-foreground/50">
            © {currentYear} SportX. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="font-satoshi text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-satoshi text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
