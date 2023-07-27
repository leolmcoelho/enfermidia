import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  //private apiUrl = 'http://127.0.0.1:93/controller/login';

  constructor(private http: HttpClient) { }

  /*loginUser1(user: string): Observable<T> {
    const url = environment.apiUrl;
    const form = new FormData();
    form.set('user', user);
    this.http.post<any>('/controller/login', form).subscribe(
      response => {
        console.log(response);
        if (response.success) {
          // Login bem-sucedido
          console.log('Login bem-sucedido');
          this.isAuthenticated = true;
          localStorage.setItem('isAuthenticated', 'true');
          
       
        } else {
          // Login falhou
          console.log('Login falhou');
          this.isAuthenticated = false;
          localStorage.setItem('isAuthenticated', 'false');
        }
        return of(this.isAuthenticated);
      },
      error => {
        // Erro durante o login
        console.error('Ocorreu um erro durante o login', error);
      }
      
    );

    
  }*/

  async loginUser(user: string): Promise<boolean> {
    const form = new FormData();
    form.set('user', user);
  
    return this.sendLoginRequest(form);
  }
  
  private sendLoginRequest(form: FormData): Promise<boolean> {
    let url = environment.apiUrl + '/controller/login'
    console.log(url);
    return new Promise<boolean>((resolve, reject) => {
      this.http.post<any>(url, form).subscribe(
        response => {
          console.log(response);
          if (response.success) {
            // Login bem-sucedido
            console.log('Login bem-sucedido');
            this.isAuthenticated = true;
            localStorage.setItem('isAuthenticated', 'true');
            resolve(true); // Resolve the promise with 'true' when login is successful
          } else {
            // Login falhou
            console.log('Login falhou');
            this.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', 'false');
            resolve(false); // Resolve the promise with 'false' when login fails
          }
        },
        error => {
          // Erro durante o login
          console.error('Ocorreu um erro durante o login', error);
          reject(error); // Reject the promise with the error in case of an error
        }
      );
    });
  }
  
  
  logout(): void {
    // Limpar o estado de autenticação do LocalStorage
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    // Verificar o estado de autenticação no LocalStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    return this.isAuthenticated || storedAuth === 'true'; // Verificar se o valor armazenado é 'true'
  }
}
