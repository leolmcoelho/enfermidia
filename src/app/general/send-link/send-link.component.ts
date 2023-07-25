import { Component } from '@angular/core';
import { EmailService } from '../../services/email-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-link',
  templateUrl: './send-link.component.html',
  styleUrls: ['./send-link.component.scss']
})
export class SendLinkComponent {
  emailAddress: string = '';

  constructor(private emailService: EmailService,
    private router:Router) { }

  sendLink() {

    // precisa colocar mais alguma coisa aqui??????
    
    this.emailService.sendEmail(this.emailAddress).subscribe(
      () => {
        console.log('Email enviado com sucesso');
        //alert('Link enviado para: ' + this.emailAddress);
      },
      (error) => {
        console.error('Erro ao enviar o email:', error);
        //alert('Houve um erro ao enviar o link para: ' + this.emailAddress);
      }
    );

    this.router.navigate(['/email']);
  }
}
