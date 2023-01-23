import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLoginData(){
    let url = "assets/loginData.json"
    return this.http.get(url)
  }

}
