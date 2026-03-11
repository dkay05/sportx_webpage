'use client';

import { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'SHOP', href: '#shop' },
  { name: 'COLLECTIONS', href: '#collections' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="font-clash text-2xl font-bold uppercase tracking-tighter-brutal text-primary"
        >
          SPORTX
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-satoshi text-sm font-medium tracking-wide-brutal text-primary hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button 
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            className="text-primary hover:text-accent transition-colors duration-300"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary hover:text-accent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-base z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="font-clash text-4xl font-bold uppercase tracking-tighter-brutal text-primary hover:text-accent transition-colors duration-300 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
