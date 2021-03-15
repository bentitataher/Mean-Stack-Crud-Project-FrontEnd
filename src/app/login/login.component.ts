import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      users: any = [];
      constructor(
                  private _mainService: MainService,
                  private router : Router
                  ) { }

      ngOnInit(): void {}

      
      loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl(''),
      });

      login(){
        this._mainService.loginUser(this.loginForm.value)
                         .subscribe((data) =>{
                         localStorage.setItem('token',data['token']);
                         this.router.navigate(['dashboard']);
                        });
        this.loginForm.reset()
      }

}
