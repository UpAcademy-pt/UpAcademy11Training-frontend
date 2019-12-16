import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Ze carlos");
    
      if (this.userService.isAuthenticated()) {
      return true;
    } else {
      console.log("Ze carlos2");
      this.router.navigate(['/login'])
    }
  }
  
}
