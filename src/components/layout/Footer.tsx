'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Container } from './Container';
import { socialLinks } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Zap, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Markets', href: '#markets' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'API', href: '#api' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Blog', href: '#blog' },
        { label: 'Press Kit', href: '#press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'Help Center', href: '#help' },
        { label: 'Community', href: '#community' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className={cn('bg-cyber-black border-t border-neon-cyan/20 relative', className)}>
      {/* Main Footer Content */}
      <Container className="py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={sectionVariants}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sport<span className="text-neon-cyan">X</span></span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Trade sports events on the blockchain. Transparent markets, instant settlements, and global access to sports trading.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  className="w-10 h-10 bg-cyber-gray rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-pink hover:border-neon-pink/30 border border-neon-cyan/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-5 h-5 bg-current rounded-sm" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>support@sportx.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neon-pink" />
                <span>1-800-SPORTX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-neon-purple" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              variants={sectionVariants}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-pink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 p-8 bg-cyber-gray/50 rounded-xl border border-neon-cyan/20 backdrop-blur-sm"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Stay in the <span className="text-neon-cyan">Game</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the latest updates on new sports markets, platform features, and exclusive trading insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-cyber-black border border-neon-cyan/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-pink"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,42,109,0.5)] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom Bar */}
      <Separator className="bg-neon-cyan/20" />

      <Container className="py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} SportX. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#terms" className="hover:text-neon-cyan transition-colors">
              Terms
            </a>
            <a href="#privacy" className="hover:text-neon-pink transition-colors">
              Privacy
            </a>
            <a href="#cookies" className="hover:text-neon-purple transition-colors">
              Cookies
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-cyber-gray rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-cyan hover:border-neon-cyan/30 border border-neon-cyan/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
