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
import { AlertAccountComponent } from './alert-account/alert-account.component';
import { CommunityPartComponent } from './community-part/community-part.component';
import { NotifComponent } from './notif/notif.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import path from 'path';

const routes: Routes = [
  { path: "", component: SignUpComponent },
  { path: "footer", component: FooterComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "community", component: CommunityComponent },
  { path: "account", component: AccountComponent },
  { path: "alert/:id", component: AlertComponent },
  { path: "formation", component: FormationComponent },
  { path: "footer", component: FooterComponent },
  { path: "footer", component: FooterComponent },
  { path: "hist", component: AlertAccountComponent },
  { path: "communitypart", component: CommunityPartComponent },
  { path: "notif", component: NotifComponent },
  { path: "editaccount", component: EditaccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
