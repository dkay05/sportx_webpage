// SportX Platform Constants

// Animation Constants
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  normal: 0.2,
  long: 0.3,
  longer: 0.5,
} as const;

export const EASING_FUNCTIONS = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// Breakpoint Constants
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Spacing Constants
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem',  // 8px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

// Container Constants
export const CONTAINER_MAX_WIDTHS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

// Z-Index Constants
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
  notification: 60,
  max: 100,
} as const;

// Color Constants (for dynamic theming)
export const COLOR_VARIANTS = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    900: '#312e81',
  },
  accent: {
    50: '#ecfdf5',
    100: '#d1fae5',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
  },
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    500: '#10b981',
    600: '#059669',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
  },
} as const;

// Font Size Constants
export const FONT_SIZES = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
} as const;

// Border Radius Constants
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

// Shadow Constants
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Transition Constants
export const TRANSITIONS = {
  default: 'all 150ms ease-in-out',
  colors: 'color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out',
  opacity: 'opacity 150ms ease-in-out',
  shadow: 'box-shadow 150ms ease-in-out',
  transform: 'transform 150ms ease-in-out',
} as const;

// Grid Constants
export const GRID_COLUMNS = {
  1: 'repeat(1, minmax(0, 1fr))',
  2: 'repeat(2, minmax(0, 1fr))',
  3: 'repeat(3, minmax(0, 1fr))',
  4: 'repeat(4, minmax(0, 1fr))',
  5: 'repeat(5, minmax(0, 1fr))',
  6: 'repeat(6, minmax(0, 1fr))',
  12: 'repeat(12, minmax(0, 1fr))',
} as const;

// Market Status Constants
export const MARKET_STATUS = {
  LIVE: 'live',
  UPCOMING: 'upcoming',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

// Sport Categories
export const SPORT_CATEGORIES = {
  FOOTBALL: 'football',
  BASKETBALL: 'basketball',
  SOCCER: 'soccer',
  TENNIS: 'tennis',
  BASEBALL: 'baseball',
  HOCKEY: 'hockey',
  GOLF: 'golf',
  BOXING: 'boxing',
  MMA: 'mma',
  RACING: 'racing',
} as const;

// Wallet Connection Constants
export const WALLET_PROVIDERS = {
  METAMASK: 'metamask',
  WALLET_CONNECT: 'walletconnect',
  COINBASE: 'coinbase',
  TRUST: 'trust',
} as const;

// Blockchain Network Constants
export const NETWORKS = {
  ETHEREUM: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    blockExplorerUrls: ['https://etherscan.io'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  POLYGON: {
    chainId: 137,
    name: 'Polygon Mainnet',
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com'],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  ARBITRUM: {
    chainId: 42161,
    name: 'Arbitrum One',
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
  },
} as const;

// API Constants
export const API_ENDPOINTS = {
  MARKETS: '/api/markets',
  ODDS: '/api/odds',
  USER: '/api/user',
  TRANSACTIONS: '/api/transactions',
  ANALYTICS: '/api/analytics',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  WALLET: 'sportx_wallet',
  USER_PREFERENCES: 'sportx_preferences',
  THEME: 'sportx_theme',
  AUTH_TOKEN: 'sportx_auth_token',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Please connect your wallet to continue',
  INSUFFICIENT_BALANCE: 'Insufficient balance for this transaction',
  NETWORK_ERROR: 'Network error. Please try again',
  TRANSACTION_FAILED: 'Transaction failed. Please try again',
  INVALID_AMOUNT: 'Please enter a valid amount',
  MARKET_CLOSED: 'This market is currently closed',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  TRANSACTION_SUCCESSFUL: 'Transaction completed successfully',
  WALLET_CONNECTED: 'Wallet connected successfully',
  POSITION_OPENED: 'Position opened successfully',
  BET_PLACED: 'Bet placed successfully',
} as const;

// Validation Patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ETHEREUM_ADDRESS: /^0x[a-fA-F0-9]{40}$/,
  POSITIVE_NUMBER: /^[+]?\d+\.?\d*$/,
} as const;

// Time Constants
export const TIME_CONSTANTS = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
} as const;
