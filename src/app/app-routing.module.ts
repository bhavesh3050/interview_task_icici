import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserloginGuard } from './guards/userlogin.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '', component: LoginComponent},
  {path: 'login' , component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard] }, 
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate:[UserloginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
