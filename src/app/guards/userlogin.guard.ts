import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginGuard implements CanActivate {
  constructor( private router: Router){  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = localStorage.getItem('user')
      if(isLoggedIn){
        isLoggedIn = JSON.parse(isLoggedIn)
      }
      if(isLoggedIn){
       return true
      } else{
       alert('Please Login First')
       this.router.navigateByUrl('login')
       return false
      }
     }
   
  }
  

