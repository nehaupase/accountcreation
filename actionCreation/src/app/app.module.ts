import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule}   from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormControl } from '@angular/forms/src/model';

const appRoutes:Routes=[
  {
    path : 'register',
    component : RegisterComponent
  },

  {
    path:'',
    component : LoginComponent
  },

  {
    path:'dashboard',
    component: DashboardComponent
  },

  {
    path:'login',
    component : LoginComponent
  }

]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
