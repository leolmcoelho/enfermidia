import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-install-pwa',
  templateUrl: './install-pwa.component.html',
  styleUrls: ['./install-pwa.component.scss']
})
export class InstallPwaComponent {

  showInstallButton = false;
  deferredPrompt: any;

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    // Verifica se o aplicativo está em modo de instalação autônoma (PWA já instalado)
    if (this.swUpdate.isEnabled) {
      this.showInstallButton = !this.isStandalone();
    }

    window.addEventListener('beforeinstallprompt', (event: Event) => {
      // Impedir que o evento padrão seja executado
      event.preventDefault();

      // Armazene o evento para usar mais tarde
      this.deferredPrompt = event;

      // Mostrar o botão de instalação
      this.showInstallButton = true;
    });
  }

  installPWA() {
    // Ocultar o botão de instalação
    this.showInstallButton = false;

    // Execute o evento para mostrar o prompt de instalação
    this.deferredPrompt.prompt();

    // Aguarde a escolha do usuário e trate a resposta
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('O usuário aceitou a instalação.');
      } else {
        console.log('O usuário recusou a instalação.');
      }
      // Limpe o evento para que ele não seja exibido novamente
      this.deferredPrompt = null;
    });
  }


  isStandalone(): boolean {
    return (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true);
  }
}
