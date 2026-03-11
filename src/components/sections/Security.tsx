'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { Shield, Lock, Users, DollarSign, Copy, CheckCircle } from 'lucide-react';

interface SecurityProps {
  className?: string;
}

export const Security: React.FC<SecurityProps> = ({ className }) => {
  const [copied, setCopied] = React.useState(false);
  
  const walletAddress = '0x81d9Fh2L7vD93Js8L7j3FhD8Js8kL93Js';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-emerald-500/30 text-emerald-400">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              FUNDS ARE <span className="text-emerald-400">SECURED</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12">
              {/* Description */}
              <div className="text-center mb-10">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  The SportX Asset Protection Fund (SAPF) was established to protect user funds in rare emergencies.
                </p>
                <p className="text-slate-400">
                  Your security and transparency are our highest priorities.
                </p>
              </div>

              {/* Reserve Info */}
              <div className="text-center mb-10">
                <p className="text-slate-400 mb-4">As of March 2026, the protection reserve includes:</p>
                <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20">
                  <span className="text-3xl lg:text-4xl font-bold text-amber-400">8,500 BTC</span>
                  <span className="text-slate-400 ml-2">Equivalent</span>
                </div>
              </div>

              {/* Security Wallet */}
              <div className="text-center mb-10">
                <p className="text-slate-400 text-sm mb-3">Security Wallet:</p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 rounded-xl border border-white/5">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  <code className="text-slate-300 font-mono text-sm">{walletAddress}</code>
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-white/5">
                  <Users className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-slate-100 mb-1">3,210,000+</div>
                  <div className="text-slate-400">Users Protected</div>
                </div>
                <div className="text-center p-6 bg-slate-900/30 rounded-2xl border border-white/5">
                  <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-slate-100 mb-1">$112,500,000+</div>
                  <div className="text-slate-400">Funds Safeguarded</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Security;
