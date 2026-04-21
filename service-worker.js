const CACHE_NAME = "marmaris-Merkez-camileri-Derneğiv1";

const filesToCache = [
  "index.html",
  "camiler.html",
  "etkinlikler.html",
  "ezan.html",
  "reklam.html",
  "faydalı-linkler.html",
  "iletişim.html",
  "faydali-dini-linkler.html",
  "sponsorlar.html",

  "hakkimizda.html"
];

// Yükleme
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  );
});

// Cache’ten çalıştırma
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});