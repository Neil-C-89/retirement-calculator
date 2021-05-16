import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccumulationScenarioAddComponent } from './accumulation-scenario-add/accumulation-scenario-add.component';
import { AccumulationScenarioEditComponent } from './accumulation-scenario-edit/accumulation-scenario-edit.component';
import { AccumulationScenarioGetComponent } from './accumulation-scenario-get/accumulation-scenario-get.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'scenario/create',
    component: AccumulationScenarioAddComponent,
  },
  {
    path: 'edit/:id',
    component: AccumulationScenarioEditComponent,
  },
  {
    path: 'scenarios',
    component: AccumulationScenarioGetComponent,
  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
