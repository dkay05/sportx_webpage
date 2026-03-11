'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { ArrowRight, Rocket, TrendingUp } from 'lucide-react';

interface CTAProps {
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({ className }) => {
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
    <section className={cn('py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-[#0f172a] relative overflow-hidden', className)} id="cta">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              Start Trading the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">
                Future of Sports
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join millions of traders participating in the next generation of sports markets.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all group"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Create Account
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-white/20 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 text-slate-100 rounded-xl transition-all"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore Markets
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
