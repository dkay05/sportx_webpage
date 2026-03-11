'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { HelpCircle, MessageCircle } from 'lucide-react';

interface FAQProps {
  className?: string;
}

const faqData = [
  {
    question: 'Why is SportX the best platform for sports trading?',
    answer: 'SportX is built for traders who want to speculate on sports outcomes with real-time market data and deep liquidity. The platform offers fast execution, transparent blockchain settlements, and an intuitive trading interface. Users can explore trending sports markets, track price movements, and trade positions before or during live events.',
  },
  {
    question: 'What products does SportX provide?',
    answer: 'SportX offers a complete sports trading ecosystem including: Pre-match sports markets, Live in-game trading, Prediction markets, Sports analytics dashboards, Liquidity pools for traders, and Token rewards and staking. With SportX, users can trade markets based on major global sports including football, basketball, cricket, esports, and more.',
  },
  {
    question: 'How to start trading on SportX',
    answer: 'Getting started is simple: 1) Create your SportX account, 2) Connect your crypto wallet, 3) Deposit trading funds, 4) Select a sports market, 5) Place your trade. Once your position is placed, you can track performance in real-time.',
  },
  {
    question: 'How to track sports market prices',
    answer: 'SportX provides live sports market data where users can monitor: Market prices, Trading volume, Liquidity levels, and Trending sports events. Users can also view historical market movements and real-time analytics for major sporting events.',
  },
  {
    question: 'How does sports trading work?',
    answer: 'Sports trading allows users to take positions on the outcome of sports events. Instead of traditional betting, users can buy or sell market positions and close trades before the event ends to lock in profits or reduce risk. Markets move based on real-time probabilities, trader activity, and event developments.',
  },
  {
    question: 'How to earn rewards on SportX',
    answer: 'Users can earn rewards on SportX through multiple opportunities: Trading incentives, Liquidity providing, Token staking, Seasonal trading competitions, and Referral programs. The more active you are on the platform, the more rewards you can unlock.',
  },
];

export const FAQ: React.FC<FAQProps> = ({ className }) => {
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
    <section className={cn('py-20 lg:py-32 bg-[#0f172a]', className)} id="faq">
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
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* FAQ List */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-white/5 rounded-xl px-6 hover:border-indigo-500/30 transition-all"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-6 text-slate-100 hover:text-indigo-400 transition-colors list-none">
                    <span className="font-medium text-left flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <svg
                      className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="text-slate-400 pb-6 pl-11">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-white/5 max-w-2xl mx-auto"
          >
            <MessageCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-slate-400 mb-4">
              Our support team is available 24/7 to help you with any questions.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;
