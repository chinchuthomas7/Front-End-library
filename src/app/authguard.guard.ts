import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private _auth:AuthService, private router:Router){}

  canActivate():boolean{
    if(this._auth.loggedIn()){
      console.log('true')
      return true

    }
    else{
this.router.navigate(['/books'])
return false
    }
  }
    
  }
