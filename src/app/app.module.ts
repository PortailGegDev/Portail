
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import HttpClientModule et provideHttpClient
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import * as _moment from 'moment';
import { AppRoutingModule } from './app-routing.module';
import { CKEditorModule } from 'ckeditor4-angular';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { ConsommationComponent } from './pages/consommation/consommation.component';
import { FactureComponent } from './pages/facture/facture.component';
import { DocumentComponent } from './pages/document/document.component';
import { ServiceComponent } from './pages/service/service.component';
import { DetailsContratComponent } from './pages/details-contrat/details-contrat.component';
// import { EncodingInterceptor } from './interceptors/encoding.interceptor';
// import { ForceNoEncodingInterceptor } from './interceptors/force-no-encoding.interceptor';
import { RouterModule } from '@angular/router';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';



const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsContratComponent,
    AcceuilComponent,
    ConsommationComponent,
    FactureComponent,
    DocumentComponent,
    ServiceComponent,
   
  ],

  imports: [
    BrowserModule,
    // OAuthModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMomentDateModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    CKEditorModule,
    RouterModule
    
    
  ],

  providers: [
    provideHttpClient(),
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    // { provide: HTTP_INTERCEPTORS, useClass: EncodingInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ForceNoEncodingInterceptor, multi: true },


    
  ],
  

  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(private oauthService: OAuthService) {
  //   this.configureOAuth();
  // }

  // private configureOAuth(): void {
  //   this.oauthService.configure(authConfig);
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }
}
