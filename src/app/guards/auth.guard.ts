import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      let checkRole = localStorage.getItem('user')
   if(checkRole){
    checkRole = JSON.parse(checkRole)
   }
   if(checkRole == "admin" ){
    return true
   } else{
    alert('Sorry You Are Not Admin')
    this.router.navigateByUrl('user')
    return false
   }
  } 
}
