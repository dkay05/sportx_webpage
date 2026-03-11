// Mock data for SportX landing page

import { MarketData, FeatureItem, StatItem, PartnerItem, TestimonialItem, NavigationItem } from '@/types';

// Market Data
export const mockMarkets: MarketData[] = [
  {
    id: '1',
    sport: 'Football',
    event: 'NFL - Super Bowl LVIII',
    teams: {
      home: 'Kansas City Chiefs',
      away: 'San Francisco 49ers',
    },
    odds: {
      home: 1.85,
      away: 2.10,
      draw: 3.40,
    },
    volume: '$2.5M',
    status: 'live',
    startTime: new Date('2024-02-11T18:30:00Z'),
    category: 'American Football',
  },
  {
    id: '2',
    sport: 'Basketball',
    event: 'NBA - Western Conference Finals',
    teams: {
      home: 'Los Angeles Lakers',
      away: 'Denver Nuggets',
    },
    odds: {
      home: 2.25,
      away: 1.70,
      draw: 0,
    },
    volume: '$1.8M',
    status: 'upcoming',
    startTime: new Date('2024-05-22T20:00:00Z'),
    category: 'Basketball',
  },
  {
    id: '3',
    sport: 'Soccer',
    event: 'UEFA Champions League Final',
    teams: {
      home: 'Manchester City',
      away: 'Inter Milan',
    },
    odds: {
      home: 1.45,
      away: 3.20,
      draw: 2.80,
    },
    volume: '$5.2M',
    status: 'upcoming',
    startTime: new Date('2024-06-01T19:00:00Z'),
    category: 'Football',
  },
  {
    id: '4',
    sport: 'Tennis',
    event: 'Wimbledon - Men\'s Final',
    teams: {
      home: 'Novak Djokovic',
      away: 'Carlos Alcaraz',
    },
    odds: {
      home: 1.95,
      away: 1.85,
      draw: 0,
    },
    volume: '$890K',
    status: 'upcoming',
    startTime: new Date('2024-07-14T14:00:00Z'),
    category: 'Tennis',
  },
  {
    id: '5',
    sport: 'Baseball',
    event: 'MLB - World Series Game 7',
    teams: {
      home: 'New York Yankees',
      away: 'Los Angeles Dodgers',
    },
    odds: {
      home: 1.75,
      away: 2.05,
      draw: 0,
    },
    volume: '$3.1M',
    status: 'live',
    startTime: new Date('2024-10-31T20:00:00Z'),
    category: 'Baseball',
  },
];

// Platform Features
export const platformFeatures: FeatureItem[] = [
  {
    id: '1',
    title: 'Lightning Fast Trading',
    description: 'Execute trades in milliseconds with our optimized blockchain infrastructure. No delays, no missed opportunities.',
    icon: 'zap',
    category: 'Performance',
  },
  {
    id: '2',
    title: 'Transparent Markets',
    description: 'All transactions are recorded on-chain. Verify every trade, every price movement, every settlement.',
    icon: 'eye',
    category: 'Security',
  },
  {
    id: '3',
    title: 'Low Fees',
    description: 'Trade with minimal transaction costs. Our efficient smart contracts keep gas fees low.',
    icon: 'trending-down',
    category: 'Cost',
  },
  {
    id: '4',
    title: 'Multi-Sport Coverage',
    description: 'Trade on all major sports leagues worldwide. Football, basketball, tennis, baseball, and more.',
    icon: 'globe',
    category: 'Variety',
  },
  {
    id: '5',
    title: 'Real-Time Analytics',
    description: 'Advanced charts and metrics to help you make informed trading decisions.',
    icon: 'bar-chart',
    category: 'Analytics',
  },
  {
    id: '6',
    title: 'Mobile Trading',
    description: 'Trade on the go with our responsive mobile interface. Never miss a market opportunity.',
    icon: 'smartphone',
    category: 'Accessibility',
  },
];

// Platform Statistics
export const platformStats: StatItem[] = [
  {
    id: '1',
    label: 'Total Trading Volume',
    value: '$125M',
    description: 'In the last 30 days',
  },
  {
    id: '2',
    label: 'Active Traders',
    value: '45.2K',
    description: 'Growing daily',
  },
  {
    id: '3',
    label: 'Markets Available',
    value: '1,250',
    description: 'Across all sports',
  },
  {
    id: '4',
    label: 'Average Execution Time',
    value: '0.8s',
    description: 'From click to confirmation',
  },
  {
    id: '5',
    label: 'Success Rate',
    value: '99.9%',
    description: 'Transaction success rate',
  },
  {
    id: '6',
    label: 'Countries Supported',
    value: '150',
    description: 'Global reach',
  },
];

// Partners
export const partners: PartnerItem[] = [
  {
    id: '1',
    name: 'Ethereum',
    logo: '/partners/ethereum.svg',
    category: 'Blockchain',
    url: 'https://ethereum.org',
  },
  {
    id: '2',
    name: 'Chainlink',
    logo: '/partners/chainlink.svg',
    category: 'Oracle',
    url: 'https://chain.link',
  },
  {
    id: '3',
    name: 'Uniswap',
    logo: '/partners/uniswap.svg',
    category: 'DEX',
    url: 'https://uniswap.org',
  },
  {
    id: '4',
    name: 'MetaMask',
    logo: '/partners/metamask.svg',
    category: 'Wallet',
    url: 'https://metamask.io',
  },
  {
    id: '5',
    name: 'OpenSea',
    logo: '/partners/opensea.svg',
    category: 'NFT',
    url: 'https://opensea.io',
  },
  {
    id: '6',
    name: 'CoinGecko',
    logo: '/partners/coingecko.svg',
    category: 'Data',
    url: 'https://coingecko.com',
  },
];

// Testimonials
export const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Professional Sports Trader',
    content: 'SportX has revolutionized how I trade sports events. The speed and transparency are unmatched in the industry.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Crypto Enthusiast',
    content: 'Finally, a platform that combines my passion for sports with blockchain technology. The user experience is incredible.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'Sports Analyst',
    content: 'The real-time analytics and market depth on SportX give me insights I can\'t find anywhere else.',
    rating: 5,
  },
];

// Navigation Items
export const navigationItems: NavigationItem[] = [
  {
    label: 'Markets',
    href: '#markets',
    children: [
      { label: 'Live Markets', href: '#live-markets' },
      { label: 'Upcoming Events', href: '#upcoming' },
      { label: 'Popular Sports', href: '#popular' },
    ],
  },
  {
    label: 'Features',
    href: '#features',
    children: [
      { label: 'Trading', href: '#trading' },
      { label: 'Analytics', href: '#analytics' },
      { label: 'Security', href: '#security' },
    ],
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Team', href: '#team' },
      { label: 'Partners', href: '#partners' },
      { label: 'Blog', href: '#blog' },
    ],
  },
];

// Social Links
export const socialLinks = [
  {
    platform: 'Twitter',
    url: 'https://twitter.com/sportx',
    icon: 'twitter',
  },
  {
    platform: 'Discord',
    url: 'https://discord.gg/sportx',
    icon: 'discord',
  },
  {
    platform: 'Telegram',
    url: 'https://t.me/sportx',
    icon: 'telegram',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/sportx',
    icon: 'github',
  },
];

// FAQ Data
export const faqData = [
  {
    question: 'What is SportX?',
    answer: 'SportX is a blockchain-based sports trading platform that allows users to trade positions on sports events using smart contracts. All transactions are transparent, secure, and settled automatically.',
  },
  {
    question: 'How do I start trading?',
    answer: 'Simply connect your Web3 wallet, deposit funds, and browse our available markets. Place your positions and watch them execute in real-time.',
  },
  {
    question: 'What sports can I trade on?',
    answer: 'We offer markets on major sports including football (NFL, NCAA), basketball (NBA, EuroLeague), soccer (Premier League, Champions League), tennis, baseball, and more.',
  },
  {
    question: 'How are odds determined?',
    answer: 'Odds are determined by market supply and demand, similar to traditional betting exchanges. Our platform ensures fair pricing through automated market makers.',
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes. All funds are held in smart contracts with multi-signature security. We\'ve been audited by leading blockchain security firms.',
  },
  {
    question: 'What are the fees?',
    answer: 'We charge a small trading fee (0.1-0.3%) depending on volume. No deposit or withdrawal fees. Gas fees are minimized through layer-2 solutions.',
  },
];

// Chart Data for Analytics
export const chartData = {
  volume: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Trading Volume',
        data: [45000000, 52000000, 48000000, 61000000, 75000000, 82000000],
        color: '#6366f1',
      },
    ],
  },
  users: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [12000, 15000, 18000, 22000, 28000, 35000],
        color: '#10b981',
      },
    ],
  },
  markets: {
    labels: ['Football', 'Basketball', 'Soccer', 'Tennis', 'Baseball', 'Other'],
    datasets: [
      {
        label: 'Market Share',
        data: [35, 25, 20, 10, 8, 2],
        color: '#f59e0b',
      },
    ],
  },
};
