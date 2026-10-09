# WhatAuth Client SDK

Ultra-lightweight client SDK for seamless WhatsApp QR Code authentication in vanilla HTML, React, Vue, Angular, Svelte, Next.js, and modern web applications.

---

## Installation via CDN

### 1. Example HTML / Script Tag

Include id on html elements to display the QR code and WhatsApp link.

```html
<!-- DOM elements for QR display and WhatsApp link -->
<img id="whatauth-qr" alt="WhatsApp Login" />
<a id="whatauth-link">Login with WhatsApp</a>

<div id="whatauth-expired" style="display: none;">
  <span>QR Code Expired</span>
  <button onclick="location.reload()">Retry</button>
</div>
```

Include cdn script with attributes.

```html
<!-- WhatAuth CDN Script -->
<script 
  src="https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.min.js" 
  data-api-key="wk_live_YOUR_PUBLIC_API_KEY"
  data-storage="sessionStorage"
  data-redirect-url="/dashboard">
</script>
```

#### Listen for Authentication Events

```javascript
window.addEventListener('whatauth:success', (event) => {
  const { token, phone, name } = event.detail;
  console.log('Authenticated phone:', phone);
  console.log('JWT Token:', token);
});

window.addEventListener('whatauth:expired', () => {
  console.warn('Authentication session expired');
});
```

---

### 2. ES Module (React / Vue / Vite / Next.js)

### 1. Example HTML / Script Tag

Include id on html elements to display the QR code and WhatsApp link.

```html
<!-- DOM elements for QR display and WhatsApp link -->
<img id="whatauth-qr" alt="WhatsApp Login" />
<a id="whatauth-link">Login with WhatsApp</a>

<div id="whatauth-expired" style="display: none;">
  <span>QR Code Expired</span>
  <button onclick="location.reload()">Retry</button>
</div>
```

Import the ES module directly via CDN URL or bundler.

```javascript
import { WhatAuth } from 'https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.esm.js';

const auth = new WhatAuth({
  apiKey: 'wk_live_YOUR_PUBLIC_API_KEY',
  storage: 'sessionStorage',
  redirectUrl: '/dashboard'
});

auth.on('success', (data) => {
  console.log('Login successful:', data.phone, data.token);
});

auth.on('error', (err) => {
  console.error('Authentication error:', err);
});

auth.init();
```

---

## JWT Modes

### `sessionStorage` Mode (Default)
Stores the signed JWT token in browser session storage (`sessionStorage.getItem('whatauth_token')`) and redirects automatically.

#### Vanilla HTML
```html
<script 
  src="https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.min.js" 
  data-api-key="wk_live_YOUR_PUBLIC_API_KEY"
  data-storage="sessionStorage"
  data-redirect-url="/dashboard">
</script>
```

#### ES Module (React / Vue / Angular / Next.js)
```javascript
import { WhatAuth } from 'https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.esm.js';

const auth = new WhatAuth({
  apiKey: 'wk_live_YOUR_PUBLIC_API_KEY',
  storage: 'sessionStorage',
  redirectUrl: '/dashboard'
});

auth.on('success', (data) => {
  // Token is already saved in sessionStorage.getItem('whatauth_token')
  console.log('User logged in:', data.phone);
});

auth.init();
```

---

### `httpOnly` Mode (Backend Cookie Security)
Sends the JWT to your custom backend endpoint via POST with `credentials: 'include'` so your server can set secure `HttpOnly` cookies before redirecting.

#### Vanilla HTML
```html
<script 
  src="https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.min.js" 
  data-api-key="wk_live_YOUR_PUBLIC_API_KEY"
  data-storage="httpOnly"
  data-auth-endpoint="/api/auth/session"
  data-redirect-url="/dashboard">
</script>
```

#### ES Module (React / Vue / Angular / Next.js)
```javascript
import { WhatAuth } from 'https://cdn.jsdelivr.net/gh/fenixninja/sdk-whatauth@v1.0.0/whatauth.esm.js';

const auth = new WhatAuth({
  apiKey: 'wk_live_YOUR_PUBLIC_API_KEY',
  storage: 'httpOnly',
  authEndpoint: '/api/auth/session',
  redirectUrl: '/dashboard'
});

auth.on('authEndpointSuccess', (response) => {
  console.log('HttpOnly session cookie successfully set by backend');
});

auth.on('authEndpointError', (err) => {
  console.error('Failed to set session cookie on backend:', err);
});

auth.init();
```

---

## Configuration Reference

| Attribute | Option | Type | Description |
|---|---|---|---|
| `data-api-key` | `apiKey` | String | Public API Key from WhatAuth console (`wk_live_...`). Required. |
| `data-storage` | `storage` | String | Storage strategy: `sessionStorage` or `httpOnly`. Default: `sessionStorage`. |
| `data-redirect-url` | `redirectUrl` | String | Target path or URL to navigate after successful scan. |
| `data-auth-endpoint` | `authEndpoint` | String | Backend POST endpoint when using `httpOnly` mode. |
| `data-ws-url` | `wsUrl` | String | WebSocket gateway URL. Default: `https://api.whatauth.com`. |
| `data-domain` | `domain` | String | Custom authorized domain if different from `window.location.host`. |
| `data-qr-id` | `qrId` | String | DOM ID for the `<img>` element displaying the QR code. Default: `whatauth-qr`. |
| `data-link-id` | `linkId` | String | DOM ID for the WhatsApp direct click button/link. Default: `whatauth-link`. |
| `data-expired-id` | `expiredId` | String | DOM ID for the expired QR container. Default: `whatauth-expired`. |
| `data-status-id` | `statusId` | String | DOM ID for text status messages. Default: `whatauth-status`. |
| `data-pin-id` | `pinId` | String | DOM ID for the 4-digit numeric verification PIN. Default: `whatauth-pin`. |

---

## License

MIT © [WhatAuth](https://whatauth.com)
