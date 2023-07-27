import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTermos implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verificar se o usuário está autenticado
    const isAuthenticated = this.authService.isAuthenticatedUser();

    // Se o usuário estiver autenticado, permitir o acesso à rota "/termos"
    if (isAuthenticated) {
      return true;
    }

    // Se o usuário não estiver autenticado, redirecionar para a rota "login"
    this.router.navigate(['/login']);
    return false;
  }
}
