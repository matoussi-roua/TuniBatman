import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AlertComponent } from './alert/alert.component';
import { AccountComponent } from './account/account.component';
import { FormationComponent } from './formation/formation.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { CommunityComponent } from './community/community.component';
import { AlerteAccountComponent } from './alerte-account/alerte-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { NotifComponent } from './notif/notif.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AlertComponent,
    AccountComponent,
    FormationComponent,
    AddAlertComponent,
    AddFormationComponent,
    CommunityComponent,
    AlerteAccountComponent,
    EditAccountComponent,
    NotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
