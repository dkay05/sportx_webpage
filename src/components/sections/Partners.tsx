'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { partners } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Handshake, ExternalLink } from 'lucide-react';

interface PartnersProps {
  className?: string;
}

export const Partners: React.FC<PartnersProps> = ({ className }) => {
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
    <section className={cn('py-20 lg:py-32 bg-gradient-to-b from-[#0f172a] to-slate-900', className)} id="partners">
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
            <Badge variant="outline" className="px-4 py-1 border-indigo-500/30 text-indigo-400">
              <Handshake className="w-4 h-4 mr-2" />
              Partners & Integrations
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Powered by Industry Leaders
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We partner with the best in blockchain technology to deliver a seamless trading experience.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative p-6 bg-slate-800/30 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col items-center justify-center text-center"
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                  <span className="text-2xl font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                
                {/* Partner Name */}
                <span className="text-slate-300 font-medium group-hover:text-slate-100 transition-colors">
                  {partner.name}
                </span>
                
                {/* Category */}
                <span className="text-xs text-slate-500 mt-1">{partner.category}</span>

                {/* External Link Icon */}
                <ExternalLink className="w-4 h-4 text-slate-500 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          {/* Infinite Scroll Logos */}
          <motion.div variants={itemVariants} className="overflow-hidden py-8">
            <div className="flex space-x-12 animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`scroll-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-slate-800/30 rounded-lg flex items-center justify-center border border-white/5"
                >
                  <span className="text-slate-500 font-medium">{partner.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Partnership CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              Interested in Partnering?
            </h3>
            <p className="text-slate-400 mb-4">
              Join our ecosystem and help shape the future of sports trading.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Partners;
