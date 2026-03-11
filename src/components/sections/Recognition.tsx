'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Award, Trophy, Star } from 'lucide-react';

interface RecognitionProps {
  className?: string;
}

export const Recognition: React.FC<RecognitionProps> = ({ className }) => {
  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Top Emerging Sports Trading Platform 2026',
      description: 'Recognized as Top Emerging Sports Trading Platform 2026',
      color: 'from-amber-500/20 to-amber-600/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Global Fintech Awards',
      description: 'Ranked among Top Web3 Sports Platforms in Global Fintech Awards',
      color: 'from-indigo-500/20 to-indigo-600/20',
      iconColor: 'text-indigo-400',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Digital Finance Innovators 2026',
      description: 'Featured in Digital Finance Innovators 2026 for Sports Market Trading',
      color: 'from-emerald-500/20 to-emerald-600/20',
      iconColor: 'text-emerald-400',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={cn('py-20 lg:py-24 bg-gradient-to-b from-[#0f172a] to-slate-900', className)} id="recognition">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-amber-500/30 text-amber-400">
              <Award className="w-4 h-4 mr-2" />
              Recognition
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Industry Recognition
            </h2>
          </motion.div>

          {/* Awards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all text-center group"
              >
                {/* Glow Effect */}
                <div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl', award.color)} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn('w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6', award.color, award.iconColor)}>
                    {award.icon}
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Recognition;
