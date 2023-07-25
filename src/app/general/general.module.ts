
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui

import { LoginComponent } from './login/login.component';
import { SendLinkComponent } from './send-link/send-link.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GmailButtonComponent } from './gmail-button/gmail-button.component';
import { HttpClientModule } from '@angular/common/http';
import { InstallPwaComponent } from './install-pwa/install-pwa.component';

@NgModule({
  declarations: [
    LoginComponent, 
    SendLinkComponent,
    ResetPasswordComponent,
    GmailButtonComponent,
    InstallPwaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatSnackBarModule,
    HttpClientModule

    //SendLinkComponent, 
  ],
  exports: [
    LoginComponent,
    InstallPwaComponent
  
  ],
})
export class GeneralModule {}