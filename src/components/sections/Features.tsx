'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { platformFeatures } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { 
  Zap, 
  Eye, 
  TrendingDown, 
  Globe, 
  BarChart3, 
  Smartphone,
  Shield,
  Clock,
  Layers
} from 'lucide-react';

interface FeaturesProps {
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'zap': <Zap className="w-6 h-6" />,
  'eye': <Eye className="w-6 h-6" />,
  'trending-down': <TrendingDown className="w-6 h-6" />,
  'globe': <Globe className="w-6 h-6" />,
  'bar-chart': <BarChart3 className="w-6 h-6" />,
  'smartphone': <Smartphone className="w-6 h-6" />,
};

export const Features: React.FC<FeaturesProps> = ({ className }) => {
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
    <section className={cn('py-20 lg:py-32 bg-cyber-black', className)} id="features">
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
            <Badge className="px-4 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-full">
              <Layers className="w-4 h-4 mr-2" />
              PLATFORM FEATURES
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Built for <span className="text-neon-pink">Serious</span> Traders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of sports trading with cutting-edge blockchain technology 
              and professional-grade tools.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-cyber-gray/50 border-neon-cyan/10 p-8 h-full hover:border-neon-pink/50 transition-all group rounded-xl backdrop-blur-sm">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-xl flex items-center justify-center mb-6 text-neon-cyan group-hover:text-neon-pink transition-colors">
                    {iconMap[feature.icon] || <Zap className="w-6 h-6" />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Category Tag */}
                  <div className="mt-6">
                    <Badge className="bg-neon-purple/20 text-neon-purple text-xs border-0">
                      {feature.category}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Feature Highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8"
          >
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Bank-Grade Security',
                description: 'Multi-signature wallets and audited smart contracts protect your funds.',
                color: 'text-neon-cyan',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: '24/7 Markets',
                description: 'Trade around the clock with global sports events from every timezone.',
                color: 'text-neon-pink',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Instant Payouts',
                description: 'Automatic settlement and instant withdrawals to your wallet.',
                color: 'text-neon-purple',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-cyber-gray/50 rounded-xl border border-neon-cyan/10 backdrop-blur-sm"
              >
                <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 flex-shrink-0", item.color)}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
