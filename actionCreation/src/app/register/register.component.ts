import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
constructor(private router: Router) { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  onFormSubmit(userForm : NgForm){
       console.log(userForm.value);
       console.log(userForm.controls['firstName'].value);
  }

  cancelEdit(){
    this.router.navigate(['login']);

  }
}
