import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("http://localhost:4000/users")
  }

  getOneUser(id){
    return this.http.get("http://localhost:4000/users/" + id);
  }

  postUser(user){
    return this.http.post("http://localhost:4000/users/signup", user)
  }

  loginUser(user){
    return this.http.post("http://localhost:4000/users/login", user)
  }

  deleteUser(id){
    return this.http.delete("http://localhost:4000/users/"+id)
  }

  upDateUser(id, data){
    return this.http.put("http://localhost:4000/users/"+id, data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

} /* end of export class MainService */
