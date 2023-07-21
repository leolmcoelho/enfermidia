import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment'; // Certifique-se de que esta importação está presente e correta


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwabuilder-sw.js')
    .then(registration => {
      console.log('Service Worker registrado com sucesso!', registration);
    })
    .catch(error => {
      console.error('Falha ao registrar o Service Worker:', error);
    });
}


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso!', registration);
      })
      .catch(error => {
        console.error('Falha ao registrar o Service Worker:', error);
      });
  });
}
