/**
 * WhatAuth Client SDK - Configuration File
 * Used by cdn-session-config.html and cdn-http-config.html
 */
window.WHATAUTH_CONFIG = {
  // Public API key obtained from your WhatAuth dashboard
  apiKey: 'wk_live_create_in_dashboard_apikey',

  // WebSocket gateway endpoint
  wsUrl: 'https://api.whatauth.com',

  // Authorized domain (defaults to window.location.host if omitted)
  domain: window.location.host,

  // Storage strategy: 'sessionStorage' | 'httpOnly'
  storage: 'sessionStorage',

  // Auto-redirect URL after successful scan (optional, e.g., '/dashboard')
  redirectUrl: '/dashboard',

  // Required only when storage === 'httpOnly'
  authEndpoint: '/api/auth/login',

  // Optional custom DOM element IDs
  qrId: 'whatauth-qr',
  linkId: 'whatauth-link',
  expiredId: 'whatauth-expired',
  statusId: 'whatauth-status',
  pinId: 'whatauth-pin',

  // QR Session TTL in seconds (default is 300s = 5 minutes)
  sessionDuration: 300
};
