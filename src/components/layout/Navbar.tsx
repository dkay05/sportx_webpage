'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from './Container';
import { navigationItems, socialLinks } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Menu, X, Wallet, ChevronDown, Globe, Zap } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWalletConnect = async () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled
      ? 'bg-cyber-black/90 backdrop-blur-md border-b border-neon-cyan/20'
      : 'bg-transparent',
    className
  );

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className={navbarClasses}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-neon-pink rounded-lg opacity-0 blur-md"
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl font-bold text-white">Sport<span className="text-neon-cyan">X</span></span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-1 font-medium"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-cyber-dark/95 backdrop-blur-md border border-neon-cyan/20 rounded-xl shadow-xl py-2"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-gray-400 hover:text-neon-pink hover:bg-neon-pink/5 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex items-center space-x-1 text-gray-400 hover:text-neon-cyan"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </Button>

            {/* Wallet Connect Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                onClick={handleWalletConnect}
                size="sm"
                className={cn(
                  "hidden sm:flex items-center space-x-2 rounded-lg font-bold transition-all",
                  isWalletConnected 
                    ? "bg-cyber-gray border border-neon-cyan/30 text-neon-cyan hover:bg-cyber-gray/80" 
                    : "bg-gradient-to-r from-neon-pink to-neon-purple text-white hover:shadow-[0_0_30px_rgba(255,42,109,0.5)]"
                )}
              >
                <Wallet className="w-4 h-4" />
                <span>{isWalletConnected ? '0x1234...5678' : 'CONNECT'}</span>
                {isWalletConnected && <Badge className="ml-2 bg-neon-cyan/20 text-neon-cyan border-0">LIVE</Badge>}
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-400 hover:text-neon-cyan"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden absolute top-full left-0 right-0 bg-cyber-black/95 backdrop-blur-md border-b border-neon-cyan/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={menuItemVariants}
                    className="space-y-2"
                  >
                    <div className="text-white font-medium">{item.label}</div>
                    {item.children && (
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <motion.a
                            key={child.label}
                            href={child.href}
                            variants={menuItemVariants}
                            className="block text-gray-400 hover:text-neon-pink py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Wallet Connect */}
                <motion.div variants={menuItemVariants} className="pt-4 border-t border-neon-cyan/20">
                  <Button
                    onClick={handleWalletConnect}
                    className={cn(
                      "w-full rounded-lg font-bold",
                      isWalletConnected 
                        ? "bg-cyber-gray border border-neon-cyan/30 text-neon-cyan" 
                        : "bg-gradient-to-r from-neon-pink to-neon-purple text-white"
                    )}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    {isWalletConnected ? 'WALLET CONNECTED' : 'CONNECT WALLET'}
                  </Button>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div variants={menuItemVariants} className="flex space-x-4 pt-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      className="text-gray-500 hover:text-neon-pink"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-8 h-8 bg-cyber-gray rounded-lg flex items-center justify-center border border-neon-pink/20" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navbar;
