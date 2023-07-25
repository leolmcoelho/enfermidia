import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './general/login/login.component';
import { DicionaryComponent } from './client/dicionary/dicionary.component';
import { SendLinkComponent } from './general/send-link/send-link.component';
import { ResetPasswordComponent } from './general/reset-password/reset-password.component';
import { GmailButtonComponent } from './general/gmail-button/gmail-button.component';

const routes: Routes = [
  { path: '', redirectTo: 'termos', pathMatch: 'full' },
  { path: 'index', redirectTo: 'termos', pathMatch: 'full' },
  { path: 'termos', component: DicionaryComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recovery', component: SendLinkComponent },
  { path: 'redefinir', component: ResetPasswordComponent },
  { path: 'email', component: GmailButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
