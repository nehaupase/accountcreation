import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username, password){
    if("admin" == username.value && "admin" == password.value){
    console.log(username.value);
    console.log(password.value);
    this.router.navigate(['dashboard']);
    }
    

  }

}
