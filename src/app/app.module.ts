import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AccumulationScenarioAddComponent } from './accumulation-scenario-add/accumulation-scenario-add.component';
import { AccumulationScenarioGetComponent } from './accumulation-scenario-get/accumulation-scenario-get.component';
import { AccumulationScenarioEditComponent } from './accumulation-scenario-edit/accumulation-scenario-edit.component';
import { ScenariosService } from './scenarios.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AccumulationScenarioAddComponent,
    AccumulationScenarioGetComponent,
    AccumulationScenarioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, AuthGuardService, ScenariosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
