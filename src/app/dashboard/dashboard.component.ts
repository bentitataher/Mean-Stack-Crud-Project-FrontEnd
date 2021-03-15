import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public users;

  constructor(
              private _mainService : MainService,
              private router : Router
              ) { }

  ngOnInit(): void {
    this._mainService.getUsers()
        .subscribe((data)=>{
          this.users = data;
        })
  }

  delete(id){
    console.log(id);
    
    this._mainService.deleteUser(id)
                     .subscribe(res => console.log(res));
                     
  }

  edit(id){
    this.router.navigate(['/edit',id])
  }

    


}
