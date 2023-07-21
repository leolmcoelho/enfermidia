const CACHE_NAME = 'enfermidia-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  // Adicione aqui os outros recursos do seu aplicativo que deseja armazenar em cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se a solicitação estiver em cache, retorna a resposta em cache
        if (response) {
          return response;
        }

        // Caso contrário, busca a solicitação na rede
        return fetch(event.request);
      })
  );
});
