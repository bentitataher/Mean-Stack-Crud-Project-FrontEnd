import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PasswordValidator } from '../shared/password.validators';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
              private route : ActivatedRoute,
              private router : Router,
              private _mainService : MainService,
              ) { }
  
  

  ngOnInit(): void {
    this._mainService.getOneUser(this.route.snapshot.paramMap.get('id'))
        .subscribe((data) => {
                              this.editForm.patchValue(data)
                              });
  }

  edit(){
     this._mainService.upDateUser(this.route.snapshot.paramMap.get('id'), this.editForm.value)
         .subscribe(data=>console.log('From edit method',data));
      this.router.navigate(['/dashboard']);
  } /* fin - edit */

  editForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirmPassword: new FormControl('')
  }, {validators: PasswordValidator});

  

}
