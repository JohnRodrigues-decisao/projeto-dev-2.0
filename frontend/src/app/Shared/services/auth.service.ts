import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private urlBase = 'http://localhost:4200';

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const emailExist = localStorage.getItem('emailAutenticado');
    if (emailExist) {
      return true;
    }
    window.location.href = `${this.urlBase}`;
    return false;
  }
}
