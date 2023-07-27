import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public user = { usuario: '' };


  constructor(private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) { }


    async login() {
      const { usuario } = this.user;
      try {
        const isAuthenticated = await this.authService.loginUser(usuario);
        if (isAuthenticated) {
          console.log('Usuário autenticado!');
          this.router.navigate(['/termos']);
          // Redirecionar o usuário para a página de sucesso ou realizar outras ações necessárias
        } else {
          console.log('Usuário ou senha inválidos!');
          this.snackBar.open('CPF não encontrado no banco de dados.', 'Fechar', {
            duration: 2000,
            verticalPosition: 'top' // Define a duração da exibição do snackbar em milissegundos (3 segundos neste caso)
          });
        }
      } catch (error) {
        console.error('Ocorreu um erro durante o login', error);
        // Handle the error, if necessary
      }
    }
    
    
}