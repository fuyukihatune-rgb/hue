// バージョンを上げるたびに CACHE_NAME も変えること
const CACHE_NAME = 'hue-1.0.0';
const CACHE_URLS = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CACHE_URLS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', e => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  const isAppShell = e.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
  if (isAppShell) {
    e.respondWith(fetch(e.request).then(res => { if (res && res.status === 200) { const c = res.clone(); caches.open(CACHE_NAME).then(x => x.put(e.request, c)); } return res; }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE_NAME).then(x => x.put(e.request, c)); } return res; }).catch(() => caches.match('./index.html'))));
});
