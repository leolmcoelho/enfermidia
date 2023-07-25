import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  constructor() { }

  loginUser(user: string, password: string): boolean {
    // Conectar com o banco de dados aqui??????
    

    if (user === 'usuario' && password === 'senha') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    // Retorna o estado de autenticação atual do usuário
    return this.isAuthenticated;
  }

  
}