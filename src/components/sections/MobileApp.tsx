'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Smartphone, Apple, Monitor, Download, QrCode } from 'lucide-react';

interface MobileAppProps {
  className?: string;
}

export const MobileApp: React.FC<MobileAppProps> = ({ className }) => {
  const platforms = [
    { name: 'iOS', icon: <Apple className="w-5 h-5" /> },
    { name: 'Android', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'MacOS', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Windows', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Linux', icon: <Monitor className="w-5 h-5" /> },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={cn('py-20 lg:py-32 bg-[#0f172a] relative overflow-hidden', className)} id="mobile-app">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 border-indigo-500/30 text-indigo-400">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile App
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                Trade Anywhere. <span className="text-indigo-400">Anytime.</span>
              </h2>
              <p className="text-lg text-slate-400">
                Never miss a market opportunity.
              </p>
              <p className="text-slate-300">
                Trade live sports markets directly from your device.
              </p>
            </div>

            {/* Platform Icons */}
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">Available on:</p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer"
                  >
                    <span className="text-indigo-400">{platform.icon}</span>
                    <span className="text-slate-300 font-medium">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-500 text-sm">More download options available.</p>
            </div>
          </motion.div>

          {/* Right Content - QR Code / Phone Mockup */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-72 h-[500px] bg-slate-800/50 rounded-[3rem] border-4 border-slate-700 p-4 relative overflow-hidden">
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-b from-slate-900 to-[#0f172a] rounded-[2.5rem] flex flex-col items-center justify-center p-6">
                  {/* App Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">SX</span>
                  </div>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-40 h-40 bg-white rounded-2xl p-3 mb-6">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <QrCode className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm text-center">Scan to Download App</p>
                </div>

                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MobileApp;
