const CACHE_NAME = 'amparo-hazaq-v1';

// Lista de arquivos para cache (1.html a 11.html e imagens 1 a 12)
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo-192.png',
  './logo-512.png',
  './1.html',
  './2.html',
  './3.html',
  './4.html',
  './5.html',
  './6.html',
  './7.html',
  './8.html',
  './9.html',
  './10.html',
  './11.html',
  './1-img.png',
  './2-img.png',
  './3-img.png',
  './4-img.png',
  './5-img.png',
  './6-img.png',
  './7-img.png',
  './8-img.png',
  './9-img.png',
  './10-img.png',
  './11-img.png',
  './12-img.png',
 './hino-hazaq.mp3'
];

// Instalação: Salva os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Amparo HAZAQ: Arquivos sendo amparados no cache...');
      return cache.addAll(assets);
    })
  );
});

// Ativação: Remove caches antigos se houver atualização
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Interceptação: Serve os arquivos do cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
