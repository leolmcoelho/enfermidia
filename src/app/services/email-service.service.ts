import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serverURL = 'https://seu-servidor-backend.com'; // Substitua pelo URL do seu servidor backend

  constructor(private http: HttpClient) { }

  sendEmail(emailAddress: string) {
    const link = 'https://www.example.com/link';
    // Exemplo de link, você pode formar o link de acordo com sua necessidade.

    // Aqui você pode formar o corpo da requisição com os dados que seu servidor espera.
    /*const emailData = {
      to: emailAddress,
      message: `<p>Este é um exemplo de email enviado a partir do meu servidor.</p> Link: ${link}`
    };

    return /*this.http.post(`${this.serverURL}/enviar-email`, emailData); // Substitua "/enviar-email" pela rota do seu servidor que lida com o envio do email.*/ 

    // Exemplo de link, você pode formar o link de acordo com sua necessidade.

    // Aqui você pode formar o corpo da requisição com os dados que seu servidor espera.
    const emailData = {
      to: emailAddress,
      message: `<p>Este é um exemplo de email enviado a partir do meu servidor.</p> Link: ${link}`
    };

    // Simulando uma resposta de sucesso do servidor após 1 segundo de atraso.
    return of({ success: true }).pipe(delay(1000));
  }

}
