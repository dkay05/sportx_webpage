'use client';

import { useState } from 'react';

const footerLinks = {
  features: [
    { name: 'Markets', href: '#' },
    { name: 'Trading', href: '#' },
    { name: 'Analytics', href: '#' },
  ],
  support: [
    { name: 'Help', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Services', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-surface py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Newsletter Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left - Newsletter Text */}
            <div>
              <h2 className="font-clash text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe our<br />newsletter
              </h2>
              <p className="font-satoshi text-sm text-white/60 max-w-sm">
                Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on sports trading.
              </p>
            </div>

            {/* Right - Email Input */}
            <div className="flex flex-col justify-center">
              <p className="font-satoshi text-sm text-white/60 mb-3">Stay up to date</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 font-satoshi text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#A78BFA] transition-colors duration-300"
                />
                <button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white font-satoshi text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="font-satoshi text-xs text-white/40 mt-3">
                By subscribing you agree to our <a href="#" className="underline hover:text-white/60">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <a 
              href="/" 
              className="font-clash text-3xl font-bold uppercase tracking-tighter text-primary block mb-4"
            >
              SPORTX
            </a>
            <p className="font-satoshi text-sm text-primary/60 max-w-xs">
              Make your sports trading<br />simple and profitable
            </p>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="font-satoshi text-sm font-semibold text-primary mb-4">
              Features
            </h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-satoshi text-sm text-primary/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-satoshi text-sm font-semibold text-primary mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-satoshi text-sm text-primary/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-satoshi text-sm font-semibold text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-satoshi text-sm text-primary/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <p className="font-satoshi text-xs text-primary/40 text-center">
            © {new Date().getFullYear()} SportX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
