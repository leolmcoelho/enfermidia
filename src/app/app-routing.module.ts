import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './general/login/login.component';
import { DicionaryComponent } from './client/dicionary/dicionary.component';
import { SendLinkComponent } from './general/send-link/send-link.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { GmailButtonComponent } from './general/gmail-button/gmail-button.component';

import { AuthGuard } from './guards/auth-guard.guard';
import { AuthGuardTermos } from './guards/termos.guard';

const routes: Routes = [
  { path: '', redirectTo: 'termos', pathMatch: 'full' },
  { path: 'index', redirectTo: 'termos', pathMatch: 'full' },
  { path: 'termos', component: DicionaryComponent, canActivate: [AuthGuardTermos]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }, // Use a guarda de rota para a rota 'login'
  { path: 'recovery', component: SendLinkComponent },
  { path: 'redefinir', component: ResetPasswordComponent },
  { path: 'email', component: GmailButtonComponent },
  { path: '**', redirectTo: 'termos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
