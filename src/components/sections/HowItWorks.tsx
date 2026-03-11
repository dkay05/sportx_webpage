'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Wallet, Search, TrendingUp, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

interface HowItWorksProps {
  className?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const steps = [
    {
      number: '01',
      icon: <Wallet className="w-8 h-8" />,
      title: 'Connect Your Wallet',
      description: 'Link your Web3 wallet to access the platform. We support MetaMask, WalletConnect, and more.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'Browse Markets',
      description: 'Explore live and upcoming sports events. Filter by sport, league, or market type.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Place Your Position',
      description: 'Choose your side and stake amount. Smart contracts handle the rest automatically.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      number: '04',
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Collect Winnings',
      description: 'Settlements are instant and automatic. Funds go directly to your wallet.',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className={cn('py-20 lg:py-32 bg-[#0f172a] relative overflow-hidden', className)} id="how-it-works">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-purple-500/30 text-purple-400">
              <CheckCircle className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              How Sports Trading Works
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get started in minutes. Our streamlined process makes blockchain sports trading 
              accessible to everyone.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2" />

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-slate-800/30 border border-white/5 rounded-2xl p-8 text-center hover:border-indigo-500/30 transition-all group">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={cn(
                        'w-8 h-8 rounded-full bg-gradient-to-r flex items-center justify-center text-white text-sm font-bold',
                        step.color
                      )}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={cn(
                      'w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform',
                      step.color
                    )}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-slate-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <p className="text-slate-400">
              Ready to start trading? It only takes a few minutes to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-slate-300 hover:bg-slate-800"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
