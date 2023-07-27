import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verificar se o usuário está autenticado
    const isAuthenticated = this.authService.isAuthenticatedUser();

    // Se o usuário estiver autenticado, redirecionar para a rota padrão (por exemplo, 'termos')
    if (isAuthenticated) {
      this.router.navigate(['/termos']);
      return false;
    }

    // Se o usuário não estiver autenticado, permitir o acesso à rota atual
    return true;
  }
}
