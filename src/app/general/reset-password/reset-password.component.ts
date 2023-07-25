import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router,  private snackBar: MatSnackBar) { }

  savePassword() {
    // faça a lógica para salvar

    
    if (this.newPassword === this.confirmPassword) {
      //console.log('Nova senha salva:', this.newPassword);
      //alert('Nova senha salva com sucesso!');

      this.snackBar.open('Nova senha salva com sucesso!', 'Fechar', {
        duration: 3000 // Duração do snackbar em milissegundos (3 segundos)
      });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    } else {
      console.error('As senhas não coincidem.');

    }
  }
}
