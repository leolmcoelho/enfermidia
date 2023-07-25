import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public user = { usuario: 'teste', password: 'teste' };


  constructor(private authService: AuthService, private router:Router) {}

  login(): void {
    //console.log('Clique no botão de login');
    const { usuario, password } = this.user;
    const isAuthenticated = this.authService.loginUser(usuario, password);

    if (isAuthenticated) {
      console.log('Usuário autenticado!');
      
    } else {
      console.log('Usuário ou senha inválidos!');
      // Exiba uma mensagem de erro para o usuário informando que as credenciais estão incorretas.
    }

    this.router.navigate(['/termos']);
  }
}