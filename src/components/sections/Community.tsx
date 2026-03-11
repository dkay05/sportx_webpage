'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Users, TrendingUp, Cpu, BarChart3, Globe } from 'lucide-react';

interface CommunityProps {
  className?: string;
}

export const Community: React.FC<CommunityProps> = ({ className }) => {
  const communityTypes = [
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Professional traders' },
    { icon: <BarChart3 className="w-6 h-6" />, label: 'Sports analysts' },
    { icon: <Cpu className="w-6 h-6" />, label: 'Web3 enthusiasts' },
    { icon: <Globe className="w-6 h-6" />, label: 'Data-driven sports fans' },
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
    <section className={cn('py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-[#0f172a]', className)} id="community">
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
            <Badge variant="outline" className="px-4 py-1 border-purple-500/30 text-purple-400">
              <Users className="w-4 h-4 mr-2" />
              Community
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Humans of SportX
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stories from traders around the world who are reshaping the future of sports markets.
            </p>
          </motion.div>

          {/* Community Types */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {communityTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <span className="text-slate-300 font-medium">{type.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-xl text-slate-300 mb-6">
              Join a global community trading the future of sports.
            </p>
            <a 
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Community;
