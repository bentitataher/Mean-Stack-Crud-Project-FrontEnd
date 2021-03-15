import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'signup', component: RegistrationComponent},

  {
   path: 'dashboard',
   component: DashboardComponent,
   canActivate: [AuthGuard]
  },

  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate :[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  RegistrationComponent, 
                                  LoginComponent,
                                  DashboardComponent,
                                  EditComponent
                                  ]
