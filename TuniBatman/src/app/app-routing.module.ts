import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import path from 'path';

const routes: Routes = [
  { path: "footer", component: FooterComponent },
  { path: "Signin", component: SignInComponent },
  { path: "Signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "community", component: CommunityComponent },
  { path: "account", component: AccountComponent },
  { path: "alert", component: AlertComponent },
  { path: "footer", component: FooterComponent },
  { path: "footer", component: FooterComponent },
  { path: "footer", component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
