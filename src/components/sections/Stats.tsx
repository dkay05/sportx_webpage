'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { platformStats } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { BarChart3, Users, Globe, Zap, TrendingUp, Shield } from 'lucide-react';

interface StatsProps {
  className?: string;
}

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ 
  value, 
  duration = 2 
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const suffix = value.match(/[^0-9.]*$/)?.[0] || '';
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = numericValue * easeOutQuart;
      
      if (numericValue >= 1000) {
        setDisplayValue(`${prefix}${currentValue.toFixed(0)}${suffix}`);
      } else if (numericValue >= 1) {
        setDisplayValue(`${prefix}${currentValue.toFixed(1)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${currentValue.toFixed(2)}${suffix}`);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

export const Stats: React.FC<StatsProps> = ({ className }) => {
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

  const iconMap: Record<string, React.ReactNode> = {
    'Total Trading Volume': <BarChart3 className="w-6 h-6" />,
    'Active Traders': <Users className="w-6 h-6" />,
    'Markets Available': <TrendingUp className="w-6 h-6" />,
    'Average Execution Time': <Zap className="w-6 h-6" />,
    'Success Rate': <Shield className="w-6 h-6" />,
    'Countries Supported': <Globe className="w-6 h-6" />,
  };

  return (
    <section className={cn('py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-[#0f172a]', className)} id="stats">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-amber-500/30 text-amber-400">
              <TrendingUp className="w-4 h-4 mr-2" />
              Platform Statistics
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Trusted by Traders Worldwide
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join thousands of traders who trust SportX for transparent, fast, and secure sports trading.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {platformStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="text-center p-6 bg-slate-800/20 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  {iconMap[stat.label] || <BarChart3 className="w-6 h-6" />}
                </div>

                {/* Value */}
                <div className="text-3xl lg:text-4xl font-bold text-slate-100 mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>

                {/* Label */}
                <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
                
                {/* Description */}
                {stat.description && (
                  <div className="text-xs text-slate-500">{stat.description}</div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 pt-8"
          >
            {[
              { label: 'Audited by CertiK', icon: <Shield className="w-5 h-5" /> },
              { label: 'SOC 2 Compliant', icon: <Shield className="w-5 h-5" /> },
              { label: '99.99% Uptime', icon: <Zap className="w-5 h-5" /> },
            ].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/30 rounded-full border border-white/5"
              >
                <span className="text-emerald-500">{badge.icon}</span>
                <span className="text-slate-300 text-sm">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Stats;
