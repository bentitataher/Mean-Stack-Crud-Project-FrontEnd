import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { MainService } from './main.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor (private _mainService : MainService,
               private _router: Router ) {}

  canActivate(): boolean{
    if(this._mainService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }

}
