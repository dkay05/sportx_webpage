'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/layout/Container';
import { testimonials } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Quote, Star, Users } from 'lucide-react';

interface TestimonialsProps {
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
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
    <section className={cn('py-20 lg:py-32 bg-slate-900', className)} id="testimonials">
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
              What Traders Are Saying
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Join thousands of satisfied traders who have transformed their sports trading experience.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-slate-800/30 border-white/5 p-8 h-full hover:border-purple-500/30 transition-all relative">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-purple-500/20 absolute top-6 right-6" />

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-slate-100 font-semibold">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '10K+', label: 'Reviews' },
              { value: '45K+', label: 'Active Traders' },
              { value: '150+', label: 'Countries' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-slate-800/20 rounded-xl border border-white/5"
              >
                <div className="text-2xl lg:text-3xl font-bold text-slate-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
