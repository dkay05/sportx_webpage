'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Server, 
  Fingerprint,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface BlockchainProps {
  className?: string;
}

export const Blockchain: React.FC<BlockchainProps> = ({ className }) => {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Non-Custodial',
      description: 'Your funds stay in your wallet. We never hold your assets.',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparent',
      description: 'All transactions are verifiable on-chain. Full transparency.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Audited',
      description: 'Smart contracts audited by leading security firms.',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Decentralized',
      description: 'No single point of failure. Distributed infrastructure.',
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: 'Immutable',
      description: 'Records cannot be altered. Permanent transaction history.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure',
      description: 'Multi-signature wallets and advanced encryption.',
    },
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
    <section className={cn('py-20 lg:py-32 bg-[#0f172a] relative overflow-hidden', className)} id="security">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
            <Badge variant="outline" className="px-4 py-1 border-emerald-500/30 text-emerald-400">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain Security
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Built on Trust & Transparency
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every transaction is secured by blockchain technology. Verify everything, trust nothing.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated Rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-indigo-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-emerald-500/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-16 border-2 border-purple-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Floating Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-indigo-500 rounded-full"
                    style={{
                      top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right: Features */}
            <motion.div variants={containerVariants} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 bg-slate-800/30 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Audit Partners */}
          <motion.div variants={itemVariants} className="pt-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Audited & Verified By</h3>
              <p className="text-slate-400 text-sm">Our smart contracts have been thoroughly audited</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['CertiK', 'OpenZeppelin', 'Trail of Bits', 'Consensys Diligence'].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-4 bg-slate-800/30 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-300 font-medium">{partner}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Blockchain;
