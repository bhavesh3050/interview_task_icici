import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: any;
  checkrole: any
  constructor(private loginservice: LoginService, private router: Router) { }

  loginForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  ngOnInit(): void {
    this.getLoginDetails()
  }


  getLoginDetails() {
    this.loginservice.getLoginData().subscribe((res: any) => {
      this.loginData = res?.loginData
    })
  }

  getLogin() {
    if (this.loginForm.valid) {
      let user = this.loginData.find((item: any) => {
        return (this.loginForm.value.Username == item.username && this.loginForm.value.Password == item.password)
      })
      if (user) {
        localStorage.setItem('user', JSON.stringify(user.role));
        this.router.navigate(["user"])
      }
      else {
        alert('invalid user')
      }
    }
  }

  
}