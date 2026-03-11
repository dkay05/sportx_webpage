'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Container } from '@/components/layout/Container';
import { mockMarkets } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { TrendingUp, Clock, Activity, ArrowRight, Flame } from 'lucide-react';

interface LiveMarketsProps {
  className?: string;
}

export const LiveMarkets: React.FC<LiveMarketsProps> = ({ className }) => {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-neon-pink border-neon-pink/30 bg-neon-pink/10';
      case 'upcoming':
        return 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10';
      default:
        return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  const categories = ['All', 'Football', 'Basketball', 'Soccer', 'Tennis', 'Baseball'];

  return (
    <section className={cn('py-20 lg:py-32 bg-cyber-dark', className)} id="markets">
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
            <Badge className="px-4 py-1 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink rounded-full">
              <Activity className="w-4 h-4 mr-2" />
              LIVE MARKETS
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Trade on <span className="text-neon-cyan">Live</span> Sports Events
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Access real-time markets across major sports leagues. Trade positions on game outcomes, 
              player performances, and more.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 rounded-lg bg-cyber-gray/50 text-gray-400 data-[state=active]:bg-neon-pink data-[state=active]:text-white border border-neon-pink/20 transition-all font-medium"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="All" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockMarkets.map((market, index) => (
                    <motion.div
                      key={market.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="bg-cyber-gray/50 border-neon-cyan/10 p-6 hover:border-neon-pink/50 transition-all cursor-pointer group rounded-xl backdrop-blur-sm">
                        {/* Market Header */}
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="text-xs bg-neon-purple/20 text-neon-purple border-0">
                            {market.sport}
                          </Badge>
                          <Badge 
                            className={cn('text-xs border', getStatusColor(market.status))}
                          >
                            {market.status === 'live' && (
                              <div className="w-2 h-2 bg-neon-pink rounded-full mr-1 animate-pulse" />
                            )}
                            {market.status === 'live' ? 'Live' : 'Upcoming'}
                          </Badge>
                        </div>

                        {/* Teams */}
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{market.teams.home}</span>
                            <span className="text-neon-cyan font-mono">{market.odds.home.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{market.teams.away}</span>
                            <span className="text-neon-cyan font-mono">{market.odds.away.toFixed(2)}</span>
                          </div>
                          {market.odds.draw > 0 && (
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">Draw</span>
                              <span className="text-neon-cyan font-mono">{market.odds.draw.toFixed(2)}</span>
                            </div>
                          )}
                        </div>

                        {/* Market Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/10">
                          <div className="flex items-center text-gray-500 text-sm">
                            <TrendingUp className="w-4 h-4 mr-1 text-neon-pink" />
                            <span>{market.volume}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{new Date(market.startTime).toLocaleDateString()}</span>
                          </div>
                        </div>

                        {/* Hover Action */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:shadow-[0_0_20px_rgba(255,42,109,0.5)] text-white font-bold rounded-lg">
                            Trade Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would filter by category */}
              {categories.slice(1).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockMarkets
                      .filter((m) => m.sport.toLowerCase() === category.toLowerCase())
                      .map((market) => (
                        <motion.div
                          key={market.id}
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Card className="bg-charcoal border-charcoal-50/20 p-6 hover:border-neon/30 transition-all cursor-pointer rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                              <Badge className="text-xs bg-charcoal-100 text-sage/80 border-0">
                                {market.sport}
                              </Badge>
                              <Badge 
                                className={cn('text-xs border', getStatusColor(market.status))}
                              >
                                {market.status === 'live' ? 'Live' : 'Upcoming'}
                              </Badge>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-white">{market.teams.home}</span>
                                <span className="text-neon font-mono">{market.odds.home.toFixed(2)}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-white">{market.teams.away}</span>
                                <span className="text-neon font-mono">{market.odds.away.toFixed(2)}</span>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* View All Markets CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-neon-pink to-neon-purple text-white rounded-lg font-bold hover:shadow-[0_0_30px_rgba(255,42,109,0.5)]"
            >
              <Flame className="w-4 h-4 mr-2" />
              View All Markets
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default LiveMarkets;
