import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PasswordValidator } from '../shared/password.validators';
import { MainService } from '../main.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: any = [];


  constructor(private _mainService: MainService) { }
  ngOnInit(): void {}


  registrationForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirmPassword: new FormControl('')
  }, {validators: PasswordValidator});

  add(){

    if(!this.registrationForm.valid){
      return alert('Formulaire non valide')
    }

    this._mainService.postUser(this.registrationForm.value).subscribe((data)=>{
      console.log(data);
      this.registrationForm.reset();
    })
  }

} /* end of export class... */
