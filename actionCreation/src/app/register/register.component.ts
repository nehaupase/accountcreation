import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  phoneNumber:Number;
  age:Number;
  address:{};
  hobbies:String[];
  favColor;
  isXYZ:boolean;
  title:String;

  constructor() { }

  ngOnInit() {
  }

}
