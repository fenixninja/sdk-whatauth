/**
 * WhatAuth ES Module SDK - Configuration File
 * Can be imported as an ES Module (import { authConfig } from './whatauth.config.js')
 * or accessed via window.WHATAUTH_CONFIG if loaded as a standard script.
 */

export const authConfig = {
  // Public API key obtained from your WhatAuth dashboard
  apiKey: 'wk_live_create_in_dashboard_apikey',

  // WebSocket gateway endpoint
  wsUrl: 'https://api.whatauth.com',

  // Authorized domain (defaults to window.location.host if omitted)
  domain: typeof window !== 'undefined' ? (window.location.host || 'localhost') : 'localhost',

  // Storage strategy: 'sessionStorage' | 'httpOnly'
  storage: 'sessionStorage',

  // Auto-redirect URL after successful scan (e.g., '/dashboard')
  redirectUrl: '/dashboard',

  // Required only when storage === 'httpOnly'
  authEndpoint: '/api/auth/login',

  // Custom DOM element IDs
  qrId: 'whatauth-qr',
  linkId: 'whatauth-link',
  expiredId: 'whatauth-expired',
  statusId: 'whatauth-status',
  pinId: 'whatauth-pin',

  // QR Session TTL in seconds (default is 300s = 5 minutes)
  sessionDuration: 300
};

// Also expose globally for seamless compatibility with window.WHATAUTH_CONFIG
if (typeof window !== 'undefined') {
  window.WHATAUTH_CONFIG = authConfig;
}

export default authConfig;
