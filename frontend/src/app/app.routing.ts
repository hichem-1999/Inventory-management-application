import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './service/authGaurd.service';

const routes: Routes =[
  {path: '',redirectTo: 'dashboard',pathMatch: 'full',canActivate:[AuthGaurdService]}, 
  {path: 'login', component: LoginComponent},
  {path: '',component: AdminLayoutComponent,children: [{ path: '',loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) }] ,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
