// SportX Platform Types

export interface MarketData {
  id: string;
  sport: string;
  event: string;
  teams: {
    home: string;
    away: string;
  };
  odds: {
    home: number;
    away: number;
    draw: number;
  };
  volume: string;
  status: 'live' | 'upcoming' | 'completed';
  startTime: Date;
  category: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  category: string;
  url?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface CTASection {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface WalletInfo {
  address: string;
  balance: string;
  connected: boolean;
  chainId: number;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// Animation Types
export interface ScrollTriggerConfig {
  trigger?: string;
  start?: string | number;
  end?: string | number;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

// 3D Types
export interface ThreeSceneProps {
  className?: string;
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

export interface SportsBallProps {
  sport: 'football' | 'basketball' | 'tennis' | 'soccer';
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

// Chart Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}

export interface MarketChartProps {
  data: ChartData;
  type?: 'line' | 'bar' | 'area';
  height?: number;
  animated?: boolean;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = T & { [P in K]-?: T[P] };
