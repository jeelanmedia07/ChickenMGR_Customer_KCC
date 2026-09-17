self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('chicken-mgr-v1').then((cache) => {
      return cache.addAll([
        './customer_order.html',
        './setup.html',
        './Logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});